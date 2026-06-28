import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRepairRequestModal } from "../components/RepairRequestModal";
import {
  Phone,
  Shield,
  Clock,
  Calendar,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Wrench,
  Building2,
  PiggyBank,
  Activity,
  Package,
  Timer,
} from "lucide-react";

export default function SubscriptionService() {
  const { open: scrollToRepairForm } = useRepairRequestModal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Абонентское обслуживание печатной техники",
    serviceType: "Комплексное абонентское обслуживание принтеров и МФУ",
    provider: {
      "@type": "LocalBusiness",
      name: "ComplexPrint",
      telephone: "+7-991-185-72-89",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Абрамцевская 11 к1 стр3",
        addressLocality: "Москва",
        addressCountry: "RU",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Москва",
    },
    description:
      "Регулярное профилактическое обслуживание печатной техники: ежемесячное или ежеквартальное ТО, экономия до 40–60% по сравнению с разовым ремонтом, предсказуемый бюджет и план визитов.",
    url: "https://complexprint.ru/abonentskoe-obsluzhivanie",
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "1500",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "RUB",
        price: "1500",
        unitText: "месяц",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Абонентское обслуживание принтеров и МФУ в Москве | ComplexPrint —
          экономия до 40–60%
        </title>
        <meta
          name="description"
          content="Абонентское обслуживание печатной техники в Москве: профилактика, диагностика, замена ресурсных узлов по графику. Сократите аварийные вызовы до 45% и переведите расходы на печать в предсказуемый ежемесячный платёж."
        />
        <meta
          name="keywords"
          content="абонентское обслуживание принтеров, обслуживание МФУ по договору, профилактика печатной техники, аутсорсинг печати, сервисный договор принтер, ТО принтеров Москва"
        />
        <link
          rel="canonical"
          href="https://complexprint.ru/abonentskoe-obsluzhivanie"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="ru" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero */}
          <section className="mb-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8" />
              <span className="uppercase tracking-wider text-sm font-semibold opacity-90">
                Комплексное абонентское обслуживание
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Абонентское обслуживание печатной техники: когда офис работает, а
              принтер не устраивает спектакли
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed opacity-95 max-w-4xl">
              Печатная техника любит подкидывать сюрпризы в самый неподходящий
              момент. Ещё минуту назад принтер был тихим, как библиотека ночью,
              а потом внезапно превращается в капризного актёра: мнёт бумагу,
              полосит, шумит, мигает лампочками и уходит в ошибку ровно тогда,
              когда срочно нужны договор, счёт или пакет документов.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">40–60%</div>
                <div className="text-sm opacity-90">
                  экономия по сравнению с разовым ремонтом
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">−45%</div>
                <div className="text-sm opacity-90">
                  снижение числа аварийных вызовов
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">от 1500 ₽</div>
                <div className="text-sm opacity-90">
                  фиксированная ежемесячная плата
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Именно поэтому абонентское обслуживание выгоднее ремонта «по
              факту». Это не тушение пожаров, а профилактика, при которой
              техника не доводит бизнес до аврала, а работает ровно, спокойно
              и предсказуемо.
            </p>
          </section>

          {/* Why one-time repair fails */}
          <section className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-xl">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Почему разовый ремонт похож на бег по лестнице
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Реактивный ремонт всегда выглядит одинаково: сначала всё тихо,
              потом один сбой, следом второй, а дальше начинается знакомая
              офисная гонка. Кто-то бегает за мастером, кто-то ищет, где взять
              замену, а кто-то уже печатает документы на последнем оставшемся
              устройстве, как на единственной живой свече во время отключения
              света.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Проблема в том, что поломка редко приходит одна. За ней почти
              всегда тянется цепочка потерь: простой сотрудников, срочные
              выезды, внеплановые расходы, нервная атмосфера и ощущение, что
              техника снова взяла офис в заложники.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              В такой схеме бизнес платит не только за ремонт, но и за время,
              которое нельзя вернуть.
            </p>
          </section>

          {/* CHART: reactive vs subscription */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Реактивный ремонт vs Абонентка + ТО
              </h2>
              <p className="text-gray-600">
                Сравнение нагрузки на бизнес и расходов в течение месяца
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <svg
                viewBox="0 0 800 320"
                className="w-full h-auto"
                role="img"
                aria-label="График сравнения реактивного ремонта и абонентского обслуживания"
              >
                {/* Axes */}
                <line x1="60" y1="260" x2="760" y2="260" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="60" y1="40" x2="60" y2="260" stroke="#cbd5e1" strokeWidth="2" />

                {/* Y label */}
                <text x="20" y="150" fontSize="12" fill="#64748b" transform="rotate(-90 20 150)">
                  Затраты / нагрузка
                </text>

                {/* X labels - days of month */}
                {[1, 5, 10, 15, 20, 25, 30].map((d, i) => {
                  const x = 60 + (i * 700) / 6;
                  return (
                    <g key={d}>
                      <line x1={x} y1="260" x2={x} y2="265" stroke="#94a3b8" />
                      <text x={x} y="280" fontSize="11" fill="#64748b" textAnchor="middle">
                        {d}
                      </text>
                    </g>
                  );
                })}
                <text x="410" y="305" fontSize="12" fill="#64748b" textAnchor="middle">
                  Дни месяца
                </text>

                {/* Subscription line - flat with small bumps */}
                <path
                  d="M 60 200 Q 200 195, 340 200 T 620 200 T 760 200"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                {/* dots on subscription line */}
                {[60, 200, 340, 480, 620, 760].map((x) => (
                  <circle key={x} cx={x} cy="200" r="4" fill="#10b981" />
                ))}

                {/* Reactive line - low then sharp peak */}
                <path
                  d="M 60 220 L 200 215 L 340 210 L 480 195 L 580 170 L 660 90 L 730 60"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                {/* peak marker */}
                <circle cx="730" cy="60" r="6" fill="#ef4444" />
                <text x="730" y="48" fontSize="11" fill="#ef4444" fontWeight="bold" textAnchor="middle">
                  Авария!
                </text>

                {/* Legend */}
                <g transform="translate(80, 50)">
                  <rect x="0" y="0" width="14" height="14" fill="#ef4444" rx="2" />
                  <text x="22" y="11" fontSize="12" fill="#1f2937">
                    Реактивный ремонт (пик в конце месяца)
                  </text>
                  <rect x="0" y="22" width="14" height="14" fill="#10b981" rx="2" />
                  <text x="22" y="33" fontSize="12" fill="#1f2937">
                    Абонентка + ТО (стабильная прямая)
                  </text>
                </g>
              </svg>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                <div className="flex items-center gap-2 mb-2 text-red-700 font-semibold">
                  <AlertTriangle className="w-5 h-5" />
                  Реактивная модель
                </div>
                <p className="text-sm text-gray-700">
                  Спокойствие до первого сбоя затем срочный вызов, простой,
                  внеплановые расходы и стресс команды.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2 text-green-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  Абонентская модель
                </div>
                <p className="text-sm text-gray-700">
                  Плановые визиты по графику, ровная нагрузка, отсутствие
                  внезапных трат техника просто работает.
                </p>
              </div>
            </div>
          </section>

          {/* What subscription gives */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Calendar className="w-7 h-7 text-purple-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Что даёт абонентская модель
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Абонентское обслуживание работает как регулярный техосмотр
              автомобиля: вы не ждёте, пока двигатель заглохнет на трассе, а
              заранее проверяете всё, что может подвести. Специалист приезжает
              по графику, проводит профилактику, чистит узлы, оценивает износ
              и меняет детали до того, как они превратятся в аварийную
              проблему.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Для бизнеса это означает не просто «техника обслуживается», а
              совсем другой ритм работы. Вместо хаоса появляется порядок,
              вместо срочных вызовов план, вместо случайных затрат —
              понятный ежемесячный бюджет.
            </p>
          </section>

          {/* TIMELINE: parts wait comparison */}
          <section className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                10 дней без принтера или 1 час до восстановления?
              </h2>
              <p className="text-gray-600">
                Как одни и те же 10 дней проходят при разных моделях
                обслуживания
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Reactive timeline */}
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-5">
                  <Timer className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Реактивная модель
                  </h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "День 1 - поломка, заявка, поиск мастера",
                    "День 2 - выезд, диагностика, заказ запчасти",
                    "День 3–4 - ожидание поставки",
                    "День 5–7 - задержка у поставщика",
                    "День 8 - деталь приехала не та",
                    "День 9 - повторный заказ верной детали",
                    "День 10 - наконец установка и запуск",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 bg-red-50 rounded-lg p-3 text-sm text-red-800 font-semibold">
                  Итог: 10 дней простоя и нервов
                </div>
              </div>

              {/* Subscription timeline */}
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-5">
                  <Package className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Абонентская модель
                  </h3>
                </div>
                <ol className="space-y-3">
                  {[
                    "Заранее: износ замечен на плановом ТО",
                    "Деталь уже лежит на складе сервиса",
                    "День X мастер выезжает по графику",
                    "Замена ресурсного узла за 30–60 минут",
                    "Печать продолжается без остановки",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 bg-green-50 rounded-lg p-3 text-sm text-green-800 font-semibold">
                  Итог: 1 час и работа продолжается
                </div>
              </div>
            </div>
          </section>

          {/* Where the value comes from */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <PiggyBank className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Где именно появляется выгода
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Самая заметная выгода в исчезновении мелких катастроф, которые
              обычно съедают время и деньги. Полосы на печати, замятые листы,
              капризная подача бумаги, внезапные ошибки на панели всё это не
              просто раздражающие мелочи, а первые звоночки, которые при
              отсутствии профилактики быстро превращаются в полноценный
              простой.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Вторая выгода в предсказуемости. Когда техника обслуживается
              по регламенту, сервисная компания может заранее планировать
              запчасти, а клиент расходы и время визитов. Это особенно
              ценно для офисов, где печать встроена в ежедневный поток работы
              и любая задержка бьёт по процессам, как затор на единственной
              дороге в город.
            </p>
          </section>

          {/* Why important for office */}
          <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Почему это особенно важно для офиса
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Офисная техника как тихий сотрудник, который должен всегда
              быть на месте и делать свою работу без лишних вопросов. Пока
              принтер печатает, его не замечают. Но стоит ему остановиться, и
              сразу становится видно, насколько сильно он встроен в
              повседневный ритм компании.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Поэтому абонентское обслуживание это не «дополнительная
              услуга», а способ убрать из офиса ту самую нервную паузу, когда
              все ждут, пока кто-то решит проблему. Это особенно полезно для
              бухгалтерии, отдела продаж, юридического отдела, склада и любой
              команды, где документы не терпят задержек.
            </p>
          </section>

          {/* Right service */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-100 p-3 rounded-xl">
                <Wrench className="w-7 h-7 text-pink-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Как выглядит правильный сервис
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Хорошее обслуживание это не когда мастер появляется только
              после аварии. Хороший сервис похож на внимательного врача,
              который слышит первые симптомы ещё до того, как организм
              начинает кричать.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              В рамках абонентского обслуживания техника проходит
              профилактику, диагностику и обслуживание ресурсных узлов. Если
              деталь уже «устала», её меняют вовремя, пока она не остановила
              весь процесс. Именно такой подход позволяет продлить срок
              службы оборудования и снизить количество внезапных поломок.
            </p>
          </section>

          {/* CASE STUDY */}
          <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8 text-pink-400" />
              <span className="uppercase tracking-wider text-sm font-semibold text-pink-400">
                Кейс из практики
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              −45% аварийных вызовов после перехода на абонентку
            </h2>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Один из наших клиентов крупный офис с парком из 18 принтеров
              и МФУ до перехода на абонентское обслуживание сталкивался в
              среднем с 6–8 срочными выездами в месяц. После заключения
              договора и перевода парка на регулярное ТО за первые 3 месяца
              число аварийных вызовов сократилось более чем на 45%, а
              ежемесячные расходы на печатное оборудование стали полностью
              предсказуемыми.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-pink-400">−45%</div>
                <div className="text-sm opacity-90">аварийных вызовов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-purple-300">×2</div>
                <div className="text-sm opacity-90">скорость замены узлов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-green-300">100%</div>
                <div className="text-sm opacity-90">прозрачный бюджет</div>
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-100 p-3 rounded-xl">
                <TrendingDown className="w-7 h-7 text-yellow-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Кому это особенно подходит
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Абонентское обслуживание особенно хорошо работает там, где
              техника нагружена ежедневно и без неё останавливается часть
              бизнеса. Чем больше устройств и чем выше интенсивность печати,
              тем заметнее эффект от регулярной профилактики.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Для таких компаний это уже не вопрос удобства, а вопрос
              спокойствия. Когда сервис настроен правильно, принтеры
              перестают быть источником сюрпризов и становятся тем, чем и
              должны быть: незаметным, но надёжным инструментом работы.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Абонентское обслуживание это переход от режима «пожарной
              команды» к режиму уверенного контроля. Техника не капризничает,
              офис не замирает, сотрудники не тратят время на ожидание, а
              расходы перестают быть лотереей.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-semibold italic">
              Если разовый ремонт похож на бег с ведром к уже горящему дому,
              то абонентское обслуживание это система, которая помогает
              этот дом вообще не доводить до пожара.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-10 text-white text-center shadow-2xl">
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Хотите, чтобы принтеры работали, а не устраивали спектакли?
            </h2>
            <p className="text-lg lg:text-xl mb-6 opacity-95">
              Оставьте заявку рассчитаем стоимость абонентского
              обслуживания специально для вашего офиса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToRepairForm}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Оставить заявку
              </button>
              <a
                href="tel:+79911857289"
                className="flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-800"
              >
                <Phone className="w-5 h-5" />
                <span>+7 991 185 72 89</span>
              </a>
            </div>
            <div className="mt-6">
              <Link
                to="/ceny"
                className="text-white/90 underline hover:text-white text-sm"
              >
                Посмотреть прайс на услуги →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
