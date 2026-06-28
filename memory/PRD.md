# ComplexPrint — PRD

## Original problem statement
У фирмы освободилось 40 МФУ Kyocera ECOSYS M2035dn. Нужна страница аренды
с актуальными ценами по Москве и несколькими вариантами: с обслуживанием
(ремонт+картриджи) и без. На главной — попап через пару секунд с призывом.
Контент акции и тарифов взят из `frontend/src/pages/arenda.html`.
Картинка `frontend/public/images/Kyocera-ECOSYS-M2035dn.webp`.

## Architecture
- React 19 + react-router-dom 7 + Tailwind + craco
- FastAPI + MongoDB (для заявок на ремонт)
- Лендинг ComplexPrint (multi-page SPA) с lazy-loading роутов

## What's been implemented (Jun 28, 2026)
- Новая страница `/arenda-kyocera-m2035dn` (`pages/KyoceraRental.jsx`):
  - Секция «Тарифы» — 3 карточки: Только аппарат (2 000₽/мес), Всё включено
    (3 500₽/мес, отмечен «ПОПУЛЯРНЫЙ»), Покопийная аренда (1 500₽ + 0,6₽/стр)
  - Технические характеристики (8 плиток, lucide-иконки)
  - Условия аренды (срок, оплата, доставка, гарантия, договор, скидки)
  - Почему выбирают нас (6 преимуществ)
  - Финальный CTA с телефоном, WhatsApp, email
  - JSON-LD Product schema для SEO
  - Все CTA открывают существующую модалку `RepairRequestModal`
- Промо-попап `components/PromoPopup.jsx`:
  - Появляется через 3 секунды на главной
  - Картинка слева (на синем градиенте), контент справа
  - sessionStorage предотвращает повторный показ в той же сессии
  - Кнопка «Смотреть тарифы» ведёт на `/arenda-kyocera-m2035dn`
- Интеграция:
  - Маршрут добавлен в `App.js` с lazy-loading
  - Попап подключён на главной странице через Suspense
  - Ссылка «Аренда МФУ Kyocera M2035dn» добавлена в выпадающее меню
    «Услуги» в Header (desktop + mobile)
- Запуск окружения с нуля: установлены зависимости (yarn install,
  pip install -r requirements.txt), созданы `.env` файлы для backend
  (MONGO_URL, DB_NAME, ALLOWED_ORIGINS=*) и frontend (REACT_APP_BACKEND_URL)
- Новая страница `/komputery-i-komplektuyushchie` (`pages/ComputersAndParts.jsx`):
  - Hero «Компьютеры и комплектующие» + статы (5000+, 15+, РФ, B2B) +
    мозаика из 4 категорий справа
  - 6 категорий: Системные блоки, CPU Intel/AMD, Материнские платы,
    SSD/HDD, Мониторы, Видеокарты и ОЗУ (запчасти для принтеров исключены
    по запросу заказчика)
  - 12 брендов: Intel, AMD, ASUS, Gigabyte, MSI, Acer, Lenovo, BenQ, Dell,
    Seagate, Kingston, Crucial
  - 8 преимуществ + 3 доп.услуги + B2B-блок (отсрочка, НДС, договор)
  - JSON-LD Schema.org Service для SEO
  - Цели аналитики: computers_page_view, computers_request_click(source)
  - Ссылка в меню «Услуги» (desktop + mobile)
  - sitemap.xml обновлён

## Core requirements (static)
- Дизайн в едином стиле существующего сайта (синие/cyan градиенты,
  скруглённые карточки, шрифт системный sans-serif)
- 3 варианта тарифа с разной экономикой
- Попап с offline-сохранением показа (sessionStorage)
- Использование существующей модалки заявки

## Backlog (P0/P1/P2)
- P1: Добавить блок «Аренда» на главной (в Equipment/Services section)
  с прямой ссылкой на новую страницу
- P2: A/B тест разных текстов попапа / разных задержек показа
- P2: Метрика конверсии попапа в Yandex.Metrica/GA4
- P2: Микро-форма прямо в попапе (телефон → callback)

## Test endpoints
- GET /arenda-kyocera-m2035dn — страница аренды
- GET / — главная с попапом через 3с
- POST /api/repair-requests — приём заявок (уже было)
