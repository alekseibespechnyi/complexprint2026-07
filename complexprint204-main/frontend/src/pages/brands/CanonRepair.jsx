import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getBrandServiceSchema } from "../../utils/schemas";
import { useRepairRequestModal } from "../../components/RepairRequestModal";

export default function CanonRepair() {
  const { open: goRepairForm } = useRepairRequestModal();

  const brandSchema = getBrandServiceSchema('canon');

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Canon в Москве | ComplexPrint — выезд, оригинальные запчасти, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Профессиональный ремонт и обслуживание принтеров Canon в Москве и МО. Быстрая диагностика, выезд мастера, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-canon" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Комплекс Принт" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ремонт принтеров Canon в Москве | ComplexPrint" />
        <meta property="og:description" content="Профессиональный ремонт принтеров и МФУ Canon (i-SENSYS, imageRUNNER, imageCLASS, PIXMA) в Москве и МО. Выезд мастера, оригинальные запчасти, гарантия 6 месяцев. ☎ +7 (991) 185-72-89" />
        <meta property="og:url" content="https://complexprint.ru/remont-printerov-canon" />
        <meta property="og:image" content="https://complexprint.ru/og-canon.jpg?v=2" />
        <meta property="og:image:secure_url" content="https://complexprint.ru/og-canon.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ремонт принтеров Canon в Москве — ComplexPrint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт принтеров Canon в Москве | ComplexPrint" />
        <meta name="twitter:description" content="Ремонт Canon i-SENSYS, imageRUNNER, PIXMA. Выезд по Москве и МО, гарантия 6 месяцев." />
        <meta name="twitter:image" content="https://complexprint.ru/og-canon.jpg?v=2" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/remont-printerov-canon" />
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          
          <Breadcrumbs items={[
            { name: 'Услуги', url: '/#services' },
            { name: 'Ремонт принтеров Canon', url: '/remont-printerov-canon' }
          ]} />

          {/* Hero Image */}
          <header className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy" decoding="async" 
              src="/images/Canon_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер Canon i-SENSYS с оригинальными запчастями"
              className="w-full h-[400px] object-cover"
            />
          </header>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Профессиональный ремонт принтеров и МФУ Canon в Москве
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Линейки imageRUNNER, i-SENSYS, imageCLASS, PIXMA Pro — диагностика, ремонт, настройка. Гарантия 6 месяцев.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Canon — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Ошибки E000-E999</strong> — диагностика термоузла, датчиков, привода, форматтера.</li>
              <li><strong>Замятия</strong> — обслуживание роликов подачи/регистрации, чистка датчиков.</li>
              <li><strong>Дефекты печати</strong> — замена барабана, девелопера, лезвия очистки, герметизация.</li>
              <li><strong>Медленная печать / долгий прогрев</strong> — ремонт термоузла, проверка питания.</li>
              <li><strong>Сетевые функции МФУ</strong> — настройка сканирования, Address Book, протоколов SMB/FTP.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена термоузла (fixing unit), термопленки, прижимного вала</li>
              <li>Замена роликов подачи, отделения, регистрации</li>
              <li>Чистка лазерного блока, зеркал, оптической системы</li>
              <li>Ремонт блока питания, DC контроллера, форматтера</li>
              <li>Настройка сетевых функций Canon МФУ (imageRUNNER ADVANCE)</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">
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
