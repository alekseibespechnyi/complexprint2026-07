import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getBrandServiceSchema } from "../../utils/schemas";
import { useRepairRequestModal } from "../../components/RepairRequestModal";

export default function KyoceraRepair() {
  const { open: goRepairForm } = useRepairRequestModal();

  const brandSchema = getBrandServiceSchema('kyocera');

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Kyocera в Москве | ComplexPrint — выезд, оригинальные запчасти, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Профессиональный ремонт и обслуживание принтеров Kyocera в Москве и МО. Быстрая диагностика, выезд мастера, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-kyocera" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Комплекс Принт" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ремонт принтеров Kyocera в Москве | ComplexPrint" />
        <meta property="og:description" content="Профессиональный ремонт принтеров и МФУ Kyocera (ECOSYS, TASKalfa) в Москве и МО. Замена девелопера, барабана, термоплёнки. Гарантия 6 месяцев. ☎ +7 (991) 185-72-89" />
        <meta property="og:url" content="https://complexprint.ru/remont-printerov-kyocera" />
        <meta property="og:image" content="https://complexprint.ru/og-kyocera.jpg?v=2" />
        <meta property="og:image:secure_url" content="https://complexprint.ru/og-kyocera.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ремонт принтеров Kyocera в Москве — ComplexPrint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт принтеров Kyocera в Москве | ComplexPrint" />
        <meta name="twitter:description" content="Ремонт Kyocera ECOSYS, TASKalfa. Выезд по Москве и МО, гарантия 6 месяцев." />
        <meta name="twitter:image" content="https://complexprint.ru/og-kyocera.jpg?v=2" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/remont-printerov-kyocera" />
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          
          <Breadcrumbs items={[
            { name: 'Услуги', url: '/#services' },
            { name: 'Ремонт принтеров Kyocera', url: '/remont-printerov-kyocera' }
          ]} />

          {/* Hero Image */}
          <header className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy" decoding="async" 
              src="/images/Kyocera_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер Kyocera ECOSYS с оригинальными запчастями"
              className="w-full h-[400px] object-cover"
            />
          </header>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Профессиональный ремонт принтеров и МФУ Kyocera в Москве
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Линейки ECOSYS, TASKalfa — диагностика, ремонт, настройка. Долговечная керамика Kyocera. Гарантия 6 месяцев.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Kyocera — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Ошибки C / J</strong> — диагностика термоузла, датчиков температуры, прогрева.</li>
              <li><strong>Замятия</strong> — обслуживание роликов, муфт, датчиков подачи/регистрации.</li>
              <li><strong>Полосы / дефекты печати</strong> — замена девелопера, магнитного вала, чистящего лезвия.</li>
              <li><strong>Низкая плотность / блеклая печать</strong> — регулировка лазера, замена девелопера.</li>
              <li><strong>Сетевые/скан функции</strong> — настройка Address Book, LDAP, SMB, FTP протоколов.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена термоузла (fuser unit), нагревательного элемента, термопленки</li>
              <li>Замена роликов подачи, отделения, переноса</li>
              <li>Обслуживание блока проявки (developer unit), замена магнитного вала</li>
              <li>Чистка барабана, замена чистящего лезвия</li>
              <li>Настройка сетевых функций Kyocera МФУ</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200">
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
