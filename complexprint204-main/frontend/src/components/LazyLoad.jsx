import React, { Suspense, useEffect, useRef, useState } from "react";

/**
 * LazyLoad — рендерит children только когда контейнер приближается
 * к области видимости. Это ОТЛИЧАЕТСЯ от обычного React.lazy + Suspense:
 * чанк скачивается только в момент скролла к секции, а не сразу при рендере.
 *
 * Использование:
 *   const Footer = React.lazy(() => import("./Footer"));
 *   <LazyLoad placeholder={<div style={{ minHeight: 400 }} />}>
 *     <Footer />
 *   </LazyLoad>
 *
 * @param {Object}   props
 * @param {ReactNode} props.children       — содержимое (обычно lazy-компонент)
 * @param {ReactNode} [props.placeholder]  — что показать, пока не видно
 * @param {string}   [props.rootMargin]    — за сколько до пересечения начинать грузить
 * @param {string}   [props.minHeight]     — резерв высоты, чтобы CLS не дёргался
 */
const LazyLoad = ({
  children,
  placeholder = null,
  rootMargin = "300px 0px",
  minHeight = "200px",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // SSR-safe и старые браузеры: рендерим сразу
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={!visible ? { minHeight } : undefined}>
      {visible ? (
        <Suspense fallback={placeholder}>{children}</Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};

export default LazyLoad;
