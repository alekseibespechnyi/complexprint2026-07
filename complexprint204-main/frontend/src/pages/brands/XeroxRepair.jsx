import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getBrandServiceSchema } from "../../utils/schemas";
import { useRepairRequestModal } from "../../components/RepairRequestModal";

export default function XeroxRepair() {
  const { open: goRepairForm } = useRepairRequestModal();

  const brandSchema = getBrandServiceSchema('xerox');
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Xerox",
    provider: {
      "@type": "LocalBusiness",
      name: "Комплекс Принт",
      telephone: "+7-991-185-72-89",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        addressCountry: "RU",
        streetAddress: "Абрамцевская 11 к1 стр3",
      },
    },
    areaServed: ["Москва", "Московская область"],
    brand: "Xerox",
    url: "https://complexprint.ru/remont-printerov-xerox",
    description:
      "Профессиональный ремонт и обслуживание принтеров и МФУ Xerox в Москве и МО. Диагностика, ремонт узла закрепления, оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Xerox в Москве | ComplexPrint — быстрый выезд и гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Ремонт принтеров и МФУ Xerox в Москве и МО: диагностика, ремонт, настройка, оригинальные детали. Выезд мастера, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-xerox" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Комплекс Принт" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ремонт принтеров Xerox в Москве | ComplexPrint" />
        <meta property="og:description" content="Профессиональный ремонт принтеров и МФУ Xerox (WorkCentre, Phaser, VersaLink, AltaLink) в Москве и МО. Выезд мастера, гарантия 6 месяцев. ☎ +7 (991) 185-72-89" />
        <meta property="og:url" content="https://complexprint.ru/remont-printerov-xerox" />
        <meta property="og:image" content="https://complexprint.ru/og-xerox.jpg?v=2" />
        <meta property="og:image:secure_url" content="https://complexprint.ru/og-xerox.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ремонт принтеров Xerox в Москве — ComplexPrint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт принтеров Xerox в Москве | ComplexPrint" />
        <meta name="twitter:description" content="Ремонт Xerox WorkCentre, Phaser, VersaLink, AltaLink. Выезд по Москве и МО, гарантия 6 месяцев." />
        <meta name="twitter:image" content="https://complexprint.ru/og-xerox.jpg?v=2" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/remont-printerov-xerox" />
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          
          <Breadcrumbs items={[
            { name: 'Услуги', url: '/#services' },
            { name: 'Ремонт принтеров Xerox', url: '/remont-printerov-xerox' }
          ]} />

          {/* Hero Image */}
          <header className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy" decoding="async" 
              src="/images/Xerox_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер Xerox WorkCentre с оригинальными запчастями"
              className="w-full h-[400px] object-cover"
            />
          </header>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ремонт принтеров и МФУ Xerox в Москве
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Линейки VersaLink, WorkCentre, Phaser — диагностика, ремонт, профилактика. Гарантия 6 месяцев.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Xerox — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Замятия бумаги</strong> — восстановление тракта подачи, замена роликов захвата/отделения, регулировка датчиков.</li>
              <li><strong>Дефекты печати (полосы, пятна, блеклая печать)</strong> — диагностика картриджей/девелопера/печки, замена барабана.</li>
              <li><strong>Ошибки контроллера/сканера</strong> — проверка датчиков, калибровка цветопередачи, обновление прошивок.</li>
              <li><strong>Проблемы с термоузлом</strong> — ремонт/замена fuser unit, проверка термистора и нагревательного элемента.</li>
              <li><strong>Сетевые функции МФУ</strong> — настройка сканирования по сети, Email/SMB протоколов, Address Book.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Наши услуги</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена узла закрепления (fuser unit), термоплёнки, прижимного вала</li>
              <li>Замена роликов подачи, отделения, переноса</li>
              <li>Обслуживание картриджей и блока проявки (developer unit)</li>
              <li>Чистка барабана, замена чистящего лезвия</li>
              <li>Настройка сетевых функций МФУ Xerox</li>
              <li>Калибровка цветопередачи и качества печати</li>
              <li>Обновление прошивки и драйверов</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Заказать ремонт
              </button>
              <a href="tel:+79911857289" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 text-center">
                +7 991 185-72-89
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
