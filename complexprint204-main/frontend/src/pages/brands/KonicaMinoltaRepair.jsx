import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { getBrandServiceSchema } from "../../utils/schemas";
import { useRepairRequestModal } from "../../components/RepairRequestModal";

export default function KonicaMinoltaRepair() {
  const { open: goRepairForm } = useRepairRequestModal();

  const brandSchema = getBrandServiceSchema('konica');
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Konica Minolta",
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
    brand: "Konica Minolta",
    url: "https://complexprint.ru/remont-printerov-konica-minolta",
    description:
      "Ремонт и обслуживание принтеров и МФУ Konica Minolta в Москве и МО. Диагностика, ремонт узла закрепления, настройка сетевых функций, оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Konica Minolta в Москве | ComplexPrint — профессионально и с гарантией 6 месяцев
        </title>
        <meta
          name="description"
          content="Ремонт и обслуживание принтеров и МФУ Konica Minolta в Москве и МО. Быстрая диагностика, выезд мастера, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-konica-minolta" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Комплекс Принт" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Ремонт принтеров Konica Minolta в Москве | ComplexPrint" />
        <meta property="og:description" content="Профессиональный ремонт МФУ и принтеров Konica Minolta bizhub в Москве и МО. Цветные и монохромные модели. Гарантия 6 месяцев. ☎ +7 (991) 185-72-89" />
        <meta property="og:url" content="https://complexprint.ru/remont-printerov-konica-minolta" />
        <meta property="og:image" content="https://complexprint.ru/og-konica-minolta.jpg?v=2" />
        <meta property="og:image:secure_url" content="https://complexprint.ru/og-konica-minolta.jpg?v=2" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ремонт принтеров Konica Minolta в Москве — ComplexPrint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт принтеров Konica Minolta в Москве | ComplexPrint" />
        <meta name="twitter:description" content="Ремонт Konica Minolta bizhub. Выезд по Москве и МО, гарантия 6 месяцев." />
        <meta name="twitter:image" content="https://complexprint.ru/og-konica-minolta.jpg?v=2" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/remont-printerov-konica-minolta" />
        <script type="application/ld+json">
          {JSON.stringify(brandSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          
          <Breadcrumbs items={[
            { name: 'Услуги', url: '/#services' },
            { name: 'Ремонт принтеров Konica Minolta', url: '/remont-printerov-konica-minolta' }
          ]} />

          {/* Hero Image */}
          <header className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img loading="lazy" decoding="async" 
              src="/images/bizhub_master.jpg"
              alt="Мастер ComplexPrint ремонтирует МФУ Konica Minolta bizhub с оригинальными запчастями"
              className="w-full h-[400px] object-cover"
            />
          </header>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ремонт принтеров и МФУ Konica Minolta в Москве
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Линейки bizhub и Accurio — диагностика, ремонт, профилактика и настройка. Гарантия 6 месяцев.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Konica Minolta — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Замятия бумаги</strong> — восстановление тракта, замена роликов подачи/отделения, регулировка направляющих.</li>
              <li><strong>Дефекты печати (полосы, пятна)</strong> — диагностика девелопера/фотоузла/печки, замена барабана, чистящего лезвия.</li>
              <li><strong>Ошибки контроллера/сканера</strong> — проверка датчиков, обновление прошивки, настройка сетевых ролей и протоколов.</li>
              <li><strong>Медленная печать</strong> — диагностика термоузла, проверка блока питания, оптимизация сетевых настроек.</li>
              <li><strong>Проблемы со сканированием</strong> — настройка Address Book, LDAP, SMB/FTP протоколов для bizhub МФУ.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена узла закрепления (fuser unit), термоплёнки, прижимного вала</li>
              <li>Замена роликов подачи, отделения, переноса</li>
              <li>Обслуживание блока проявки (developer unit), замена магнитного вала</li>
              <li>Чистка барабана, замена чистящего лезвия</li>
              <li>Настройка сетевых функций МФУ Konica Minolta (SMB/SMTP/LDAP)</li>
              <li>Обновление прошивки и драйверов</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
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
