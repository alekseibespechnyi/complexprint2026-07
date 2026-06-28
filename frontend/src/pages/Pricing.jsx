import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { getPricingOffersSchema } from "../utils/schemas";
import { useRepairRequestModal } from "../components/RepairRequestModal";

export default function Pricing() {
  const { open: goRepairForm } = useRepairRequestModal();

  const pricingSchema = getPricingOffersSchema();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Цены на ремонт принтеров в Москве | ComplexPrint — диагностика, ремонт, абонентка</title>
        <meta name="description" content="Прозрачные цены на ремонт принтеров и МФУ в Москве: диагностика от 1000₽ с выездом, ремонт от 3000₽, абонентское обслуживание от 1500₽/мес. Гарантия 6 месяцев." />
        <link rel="canonical" href="https://complexprint.ru/ceny" />
        <meta property="og:title" content="Цены на ремонт принтеров | ComplexPrint" />
        <meta property="og:url" content="https://complexprint.ru/ceny" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/ceny" />
        
        {/* Schema.org для прайс-листа */}
        <script type="application/ld+json">{JSON.stringify(pricingSchema)}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 pt-24 pb-16 max-w-6xl">
        <Breadcrumbs items={[{ name: 'Цены', url: '/ceny' }]} />
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Цены на ремонт принтеров</h1>
          <p className="text-gray-600 text-lg">Прозрачные тарифы: диагностика, разовый ремонт и абонентское обслуживание</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">Диагностика</h2>
            <p className="text-3xl font-extrabold mb-4">от 1000₽</p>
            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>Включая выезд по Москве</li>
              <li>Первичная оценка по телефону</li>
              <li>Смета работ до начала ремонта</li>
            </ul>
            <button onClick={goRepairForm} className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">Заказать</button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-pink-400">
            <h2 className="text-2xl font-bold mb-2">Разовый ремонт</h2>
            <p className="text-3xl font-extrabold mb-4">от 3000₽</p>
            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>Оригинальные запчасти</li>
              <li>Ремонт в день обращения</li>
              <li>Гарантия 6 месяцев</li>
            </ul>
            <button onClick={goRepairForm} className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">Вызвать мастера</button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">Абонентское обслуживание</h2>
            <p className="text-3xl font-extrabold mb-4">от 1500₽/мес</p>
            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>Плановая профилактика</li>
              <li>Приоритетный выезд</li>
              <li>Оптимизация затрат</li>
            </ul>
            <button onClick={goRepairForm} className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">Оставить заявку</button>
          </div>
        </div>

        {/* Детальный прайс-лист в виде таблицы для AI-парсинга */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Детальный прайс-лист на ремонт принтеров</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  <th className="px-6 py-4 font-semibold">Услуга</th>
                  <th className="px-6 py-4 font-semibold">Бренды</th>
                  <th className="px-6 py-4 font-semibold">Срок выполнения</th>
                  <th className="px-6 py-4 font-semibold text-right">Цена</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Замена термоузла HP</td>
                  <td className="px-6 py-4 text-gray-700">HP LaserJet</td>
                  <td className="px-6 py-4 text-gray-700">2-4 часа</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 5000₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Замена термоузла Canon</td>
                  <td className="px-6 py-4 text-gray-700">Canon i-SENSYS</td>
                  <td className="px-6 py-4 text-gray-700">2-4 часа</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 4500₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Замена термоузла Kyocera</td>
                  <td className="px-6 py-4 text-gray-700">Kyocera ECOSYS</td>
                  <td className="px-6 py-4 text-gray-700">3-5 часов</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 6000₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Чистка и восстановление барабана</td>
                  <td className="px-6 py-4 text-gray-700">Все бренды</td>
                  <td className="px-6 py-4 text-gray-700">1-2 часа</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 3000₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Замена блока проявки</td>
                  <td className="px-6 py-4 text-gray-700">HP, Canon, Kyocera</td>
                  <td className="px-6 py-4 text-gray-700">2-3 часа</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 3500₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Заправка картриджа с чипом</td>
                  <td className="px-6 py-4 text-gray-700">Все бренды</td>
                  <td className="px-6 py-4 text-gray-700">30-60 минут</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 800₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Профилактическая чистка принтера</td>
                  <td className="px-6 py-4 text-gray-700">Все бренды</td>
                  <td className="px-6 py-4 text-gray-700">1-2 часа</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 2000₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Замена роликов подачи бумаги</td>
                  <td className="px-6 py-4 text-gray-700">Все бренды</td>
                  <td className="px-6 py-4 text-gray-700">1 час</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 1800₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Настройка сетевой печати</td>
                  <td className="px-6 py-4 text-gray-700">Все бренды</td>
                  <td className="px-6 py-4 text-gray-700">30-60 минут</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 1200₽</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Замена материнской платы</td>
                  <td className="px-6 py-4 text-gray-700">Все бренды</td>
                  <td className="px-6 py-4 text-gray-700">от 1 дня</td>
                  <td className="px-6 py-4 text-right font-semibold text-pink-600">от 8000₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Важные условия</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Точная стоимость зависит от модели и характера неисправности</li>
            <li>Диагностика может засчитываться в стоимость ремонта</li>
            <li>Выезд за МКАД — по согласованию (от 50₽/км)</li>
            <li>Гарантия на все работы — 6 месяцев</li>
            <li>Используем только оригинальные запчасти</li>
            <li>Оплата после завершения работ и проверки</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
