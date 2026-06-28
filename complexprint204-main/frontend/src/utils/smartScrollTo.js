/**
 * smartScrollTo — умный скролл к элементу с поддержкой lazy-loaded секций.
 *
 * Алгоритм:
 *  1) Если элемент уже в DOM — скроллим к нему и запускаем стабилизацию.
 *  2) Если нет — прокручиваем страницу почти в самый низ, чтобы IntersectionObserver
 *     «разбудил» все обёрнутые в <LazyLoad> секции.
 *  3) Поллим появление элемента, после чего запускаем стабилизирующий цикл,
 *     который многократно довыставляет скролл, пока:
 *      - позиция целевой секции продолжает «уезжать» из-за дозагрузки соседних
 *        lazy-секций (главное виновник бага «остановки на разделе выше»);
 *      - scrollHeight документа продолжает увеличиваться (значит контент ещё
 *        дорисовывается);
 *      - не истекло общее время стабилизации.
 *
 * @param {string}  sectionId
 * @param {Object}  [options]
 * @param {number}  [options.maxWaitMs=5000]      — макс. ожидание появления элемента
 * @param {number}  [options.pollIntervalMs=80]   — интервал polling-а элемента
 * @param {number}  [options.stabilizeMs=2000]    — общее время стабилизирующего цикла
 * @param {number}  [options.stabilizeStepMs=120] — шаг проверки внутри стабилизации
 * @param {number}  [options.calmMs=400]          — сколько scrollHeight должен «молчать»
 * @param {number}  [options.offset=0]            — смещение от верха (под фикс-хедер)
 */
export function smartScrollTo(sectionId, options = {}) {
  const {
    maxWaitMs = 5000,
    pollIntervalMs = 80,
    stabilizeMs = 2000,
    stabilizeStepMs = 120,
    calmMs = 400,
    offset = 0,
  } = options;

  if (!sectionId || typeof document === "undefined") return;

  const getElTop = (el) => el.getBoundingClientRect().top + window.scrollY;

  const scrollToElement = (el, behavior = "smooth") => {
    const top = getElTop(el) - offset;
    window.scrollTo({ top, behavior });
  };

  const stabilizeAndScroll = (initialEl) => {
    scrollToElement(initialEl, "smooth");

    const startedAt = performance.now();
    let lastTop = getElTop(initialEl);
    let lastHeight = document.documentElement.scrollHeight;
    let lastHeightChangeAt = performance.now();

    const tick = () => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const top = getElTop(el);
      const height = document.documentElement.scrollHeight;
      const now = performance.now();

      // Высота страницы продолжает расти — значит lazy-секции ещё монтируются.
      if (height !== lastHeight) {
        lastHeight = height;
        lastHeightChangeAt = now;
      }

      // Позиция целевой секции уехала из-за перерендера соседей — догоняем.
      if (Math.abs(top - lastTop) > 2) {
        lastTop = top;
        scrollToElement(el, "auto");
      } else {
        // Позиция не сместилась — мягко синхронизируем скролл (на случай если
        // браузер прервал предыдущий smooth-скролл).
        const desired = top - offset;
        if (Math.abs(window.scrollY - desired) > 2) {
          scrollToElement(el, "auto");
        }
      }

      const elapsed = now - startedAt;
      const calm = now - lastHeightChangeAt;

      // Останавливаемся, если контент устаканился ИЛИ исчерпали бюджет времени.
      if ((calm >= calmMs && elapsed >= 300) || elapsed >= stabilizeMs) {
        // Финальный точный докрут плавным скроллом.
        scrollToElement(el, "smooth");
        return;
      }
      setTimeout(tick, stabilizeStepMs);
    };

    setTimeout(tick, stabilizeStepMs);
  };

  // 1. Элемент уже в DOM — сразу скроллим со стабилизацией.
  const existing = document.getElementById(sectionId);
  if (existing) {
    requestAnimationFrame(() => stabilizeAndScroll(existing));
    return;
  }

  // 2. Иначе: будим lazy-секции, прокручивая страницу почти в самый низ.
  const wakeScroll = () => {
    const target = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight - 200
    );
    window.scrollTo({ top: target, behavior: "auto" });
  };
  wakeScroll();

  // Повторяем wake-скролл по мере роста высоты страницы, чтобы добраться
  // до самых нижних lazy-обёрток (Footer и т.п.). Без этого, если документ
  // изначально короткий, IntersectionObserver не сработает у нижних секций.
  let lastWakeHeight = document.documentElement.scrollHeight;
  const wakeInterval = setInterval(() => {
    const h = document.documentElement.scrollHeight;
    if (h > lastWakeHeight) {
      lastWakeHeight = h;
      wakeScroll();
    }
  }, 150);

  // 3. Поллим появление элемента.
  const startedAt = performance.now();
  const interval = setInterval(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      clearInterval(interval);
      clearInterval(wakeInterval);
      requestAnimationFrame(() => stabilizeAndScroll(el));
    } else if (performance.now() - startedAt > maxWaitMs) {
      clearInterval(interval);
      clearInterval(wakeInterval);
    }
  }, pollIntervalMs);
}

export default smartScrollTo;
