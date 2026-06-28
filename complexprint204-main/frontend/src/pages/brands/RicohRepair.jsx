import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getBrandServiceSchema } from "../../utils/schemas";
import { useRepairRequestModal } from "../../components/RepairRequestModal";

export default function RicohRepair() {
  const { open: goRepairForm } = useRepairRequestModal();

  const brandSchema = getBrandServiceSchema('ricoh');
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Ricoh",
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
    brand: "Ricoh",
    url: "https://complexprint.ru/remont-printerov-ricoh",
    description:
      "Профессиональный ремонт и обслуживание принтеров и МФУ Ricoh в Москве и МО. Диагностика, ремонт узла закрепления, замена роликов и оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Ricoh в Москве | ComplexPrint — выезд, оригинальные запчасти, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Профессиональный ремонт и обслуживание принтеров и МФУ Ricoh в Москве и МО. Быстрая диагностика, выезд мастера, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-ricoh" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Комплекс Принт" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ремонт принтеров Ricoh в Москве | ComplexPrint" />
        <meta property="og:description" content="Профессиональный ремонт принтеров и МФУ Ricoh (Aficio, SP, MP) в Москве и МО. Выезд мастера, оригинальные запчасти, гарантия 6 месяцев. ☎ +7 (991) 185-72-89" />
        <meta property="og:url" content="https://complexprint.ru/remont-printerov-ricoh" />
        <meta property="og:image" content="https://complexprint.ru/og-ricoh.jpg?v=2" />
        <meta property="og:image:secure_url" content="https://complexprint.ru/og-ricoh.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ремонт принтеров Ricoh в Москве — ComplexPrint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт принтеров Ricoh в Москве | ComplexPrint" />
        <meta name="twitter:description" content="Ремонт Ricoh Aficio, SP, MP. Выезд по Москве и МО, гарантия 6 месяцев." />
        <meta name="twitter:image" content="https://complexprint.ru/og-ricoh.jpg?v=2" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/remont-printerov-ricoh" />
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          
          <Breadcrumbs items={[
            { name: 'Услуги', url: '/#services' },
            { name: 'Ремонт принтеров Ricoh', url: '/remont-printerov-ricoh' }
          ]} />

          {/* Hero Image */}
          <header className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy" decoding="async" 
              src="/images/Ricoh_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер Ricoh Aficio с оригинальными запчастями"
              className="w-full h-[400px] object-cover"
            />
          </header>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Профессиональный ремонт принтеров и МФУ Ricoh в Москве
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Линейки Ricoh Aficio, MP, SP, IM — диагностика, ремонт, настройка. Гарантия 6 месяцев.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Ricoh — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Замятия</strong> — обслуживание тракта, замена роликов/датчиков подачи.</li>
              <li><strong>Дефекты печати</strong> — диагностика девелопера/печки, настройка плотности.</li>
              <li><strong>Ошибки фиксации</strong> — ремонт/замена fuser, проверка прогрева.</li>
              <li><strong>Сетевые/скан-функции</strong> — настройка SMB/SMTP, права и протоколы.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена узла закрепления, термоплёнки/валов</li>
              <li>Замена роликов, шестерён, датчиков, профилактика привода</li>
              <li>Настройка сетевых функций МФУ Ricoh</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
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
