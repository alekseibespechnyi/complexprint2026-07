import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getBrandServiceSchema } from "../../utils/schemas";
import { useRepairRequestModal } from "../../components/RepairRequestModal";

export default function HpRepair() {
  const { open: goRepairForm } = useRepairRequestModal();

  const brandSchema = getBrandServiceSchema('hp');

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров HP в Москве с выездом | ComplexPrint — оригинальные запчасти, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Профессиональный ремонт и обслуживание лазерных принтеров HP в Москве и МО. Быстрая диагностика, выезд в день обращения, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-hp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Комплекс Принт" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ремонт принтеров HP в Москве | ComplexPrint" />
        <meta property="og:description" content="Профессиональный ремонт лазерных принтеров и МФУ HP (LaserJet, OfficeJet, DesignJet) в Москве и МО. Выезд в день обращения, оригинальные запчасти, гарантия 6 месяцев. ☎ +7 (991) 185-72-89" />
        <meta property="og:url" content="https://complexprint.ru/remont-printerov-hp" />
        <meta property="og:image" content="https://complexprint.ru/og-hp.jpg?v=2" />
        <meta property="og:image:secure_url" content="https://complexprint.ru/og-hp.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ремонт принтеров HP в Москве — ComplexPrint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт принтеров HP в Москве | ComplexPrint" />
        <meta name="twitter:description" content="Профессиональный ремонт HP LaserJet, OfficeJet, DesignJet. Выезд по Москве и МО, гарантия 6 месяцев." />
        <meta name="twitter:image" content="https://complexprint.ru/og-hp.jpg?v=2" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/remont-printerov-hp" />
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          
          <Breadcrumbs items={[
            { name: 'Услуги', url: '/#services' },
            { name: 'Ремонт принтеров HP', url: '/remont-printerov-hp' }
          ]} />
          
          {/* Hero Image */}
          <header className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy" decoding="async" 
              src="/images/hp_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер HP LaserJet с оригинальными запчастями"
              className="w-full h-[400px] object-cover"
            />
          </header>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ремонт принтеров HP в Москве с выездом
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Быстрая диагностика и ремонт всех моделей HP LaserJet, Color LaserJet, PageWide, OfficeJet Pro. Гарантия 6 месяцев на все работы.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы принтеров HP — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Ошибка 50.x</strong> — ремонт/замена термоузла (fuser unit), проверка термистора.</li>
              <li><strong>Замятия бумаги</strong> — замена роликов подачи/отделения, очистка тракта.</li>
              <li><strong>Дефекты печати (полосы, пятна)</strong> — замена барабана, лезвия очистки, уплотнителей картриджа.</li>
              <li><strong>Ошибки картриджа</strong> — перепрошивка чипа, замена контактов, диагностика совместимости.</li>
              <li><strong>Не включается / не печатает</strong> — ремонт блока питания, форматтера, диагностика прошивки.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Бесплатная диагностика в день обращения</li>
              <li>Ремонт/замена термоузла (fuser) — работаем только с оригинальными запчастями</li>
              <li>Замена роликов подачи, отделения, переноса (pickup, separation, transfer rollers)</li>
              <li>Чистка лазерного блока, зеркал, оптики</li>
              <li>Ремонт блока питания (power supply), форматтера (formatter board)</li>
              <li>Настройка сетевых функций, обновление прошивки</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
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
