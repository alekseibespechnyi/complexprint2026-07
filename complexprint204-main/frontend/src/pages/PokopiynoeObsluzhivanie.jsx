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
  Printer,
  BarChart3,
  Lock,
  Users,
  FileText,
  Zap,
  CheckCircle2,
  TrendingDown,
  Building2,
  PiggyBank,
  Activity,
  Package,
  Cpu,
  Eye,
  ShieldCheck,
  Fingerprint,
  Layers,
  Receipt,
  Calculator,
  Truck,
  Settings,
  AlertTriangle,
  Wallet,
  Gauge,
  HardDrive,
  Wrench,
} from "lucide-react";

export default function PokopiynoeObsluzhivanie() {
  const { open: scrollToRepairForm } = useRepairRequestModal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Покопийное обслуживание принтеров и МФУ в Москве",
    serviceType: "Покопийное обслуживание печатной техники",
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
      "Покопийное обслуживание печатной техники в Москве: платите только за фактические отпечатки. Всё включено расходники, сервис, запчасти, выезд. От 0,50 ₽/отпечаток. Экономия до 40%.",
    url: "https://complexprint.ru/pokopiynoe-obsluzhivanie",
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "0.50",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "RUB",
        price: "0.50",
        unitText: "отпечаток",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Покопийное обслуживание принтеров в Москве | ComplexPrint от 0,50 ₽/отпечаток, экономия до 40%
        </title>
        <meta
          name="description"
          content="Покопийное обслуживание печатной техники в Москве: платите только за фактические отпечатки. Всё включено тонер, картриджи, ремонт, выезд. От 0,50 ₽/стр. Экономия до 40%."
        />
        <meta
          name="keywords"
          content="покопийное обслуживание, плата за отпечаток, обслуживание принтеров по копиям, аутсорсинг печати, стоимость копии, расходники включены, сервис принтеров Москва"
        />
        <link
          rel="canonical"
          href="https://complexprint.ru/pokopiynoe-obsluzhivanie"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="ru" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero */}
          <section className="mb-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Receipt className="w-8 h-8" />
              <span className="uppercase tracking-wider text-sm font-semibold opacity-90">
                Покопийное обслуживание
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Покопийное обслуживание: платите только за то, что реально напечатали
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed opacity-95 max-w-4xl">
              В отличие от разового ремонта, где вы платите за каждый выезд, 
              и абонемента, где вы платите за время здесь цена зависит только 
              от объёма печати. Вы платите за фактические отпечатки, а всё 
              остальное закупка картриджей, выезд мастера, замена расходников, 
              ремонт берёт на себя провайдер. Это уже «зашито» в стоимость 
              каждой копии.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">до 40%</div>
                <div className="text-sm opacity-90">
                  экономия по сравнению с абонементом
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">0,50 ₽</div>
                <div className="text-sm opacity-90">
                  стоимость одного отпечатка
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">
                  расходники и сервис включены
                </div>
              </div>
            </div>
          </section>

          {/* Intro — суть покопийного формата */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Calculator className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                В чём суть покопийного формата?
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              В отличие от разового ремонта (платите за выезд) и абонемента 
              (платите за время), здесь цена зависит от объёма печати. Это 
              очень выгодно, если у вас нет постоянной нагрузки на аппарат, 
              или если вы хотите полностью уйти от забот о закупке картриджей 
              и вызове мастера всё это уже «зашито» в стоимость коп/листа.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Представьте: вы не думаете о том, сколько тонера осталось, не 
              бежите в магазин за картриджем в пятницу вечером, не звоните 
              мастеру, когда принтер внезапно остановился. Вы просто печатаете, 
              а в конце месяца получаете счёт только за то, что реально 
              отпечатали. Всё остальное наша забота.
            </p>
          </section>

          {/* CHART: comparison of 3 models */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Три модели обслуживания: где выгоднее?
              </h2>
              <p className="text-gray-600">
                Сравнение затрат при разной интенсивности печати
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <svg
                viewBox="0 0 800 340"
                className="w-full h-auto"
                role="img"
                aria-label="График сравнения трёх моделей обслуживания"
              >
                {/* Axes */}
                <line x1="60" y1="280" x2="760" y2="280" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="60" y1="40" x2="60" y2="280" stroke="#cbd5e1" strokeWidth="2" />

                {/* Y label */}
                <text x="20" y="160" fontSize="12" fill="#64748b" transform="rotate(-90 20 160)">
                  Затраты на печать
                </text>

                {/* X labels - pages per month */}
                {["500", "1 000", "2 000", "3 000", "5 000", "8 000", "10 000"].map((m, i) => {
                  const x = 60 + (i * 700) / 6;
                  return (
                    <g key={m}>
                      <line x1={x} y1="280" x2={x} y2="285" stroke="#94a3b8" />
                      <text x={x} y="300" fontSize="11" fill="#64748b" textAnchor="middle">
                        {m}
                      </text>
                    </g>
                  );
                })}
                <text x="410" y="325" fontSize="12" fill="#64748b" textAnchor="middle">
                  Отпечатков в месяц
                </text>

                {/* One-time repair - high spikes */}
                <path
                  d="M 60 180 L 160 170 L 260 140 L 360 100 L 460 80 L 560 60 L 660 50 L 760 45"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                {[60, 160, 260, 360, 460, 560, 660, 760].map((x, i) => {
                  const y = [180, 170, 140, 100, 80, 60, 50, 45][i];
                  return <circle key={x} cx={x} cy={y} r="4" fill="#ef4444" />;
                })}

                {/* Subscription - flat high */}
                <path
                  d="M 60 120 L 160 120 L 260 120 L 360 120 L 460 120 L 560 120 L 660 120 L 760 120"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                />
                {[60, 260, 460, 660, 760].map((x) => (
                  <circle key={x} cx={x} cy="120" r="4" fill="#6366f1" />
                ))}

                {/* Pay-per-copy - linear low */}
                <path
                  d="M 60 240 L 160 230 L 260 210 L 360 190 L 460 170 L 560 150 L 660 140 L 760 130"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                {[60, 160, 260, 360, 460, 560, 660, 760].map((x, i) => {
                  const y = [240, 230, 210, 190, 170, 150, 140, 130][i];
                  return <circle key={x} cx={x} cy={y} r="4" fill="#10b981" />;
                })}

                {/* Legend */}
                <g transform="translate(80, 50)">
                  <rect x="0" y="0" width="14" height="14" fill="#ef4444" rx="2" />
                  <text x="22" y="11" fontSize="12" fill="#1f2937">
                    Разовый ремонт: растёт с каждой поломкой
                  </text>
                  <rect x="0" y="22" width="14" height="14" fill="#6366f1" rx="2" />
                  <text x="22" y="33" fontSize="12" fill="#1f2937">
                    Абонемент: фиксированная плата независимо от объёма
                  </text>
                  <rect x="0" y="44" width="14" height="14" fill="#10b981" rx="2" />
                  <text x="22" y="55" fontSize="12" fill="#1f2937">
                    Покопийное: плата строго пропорциональна печати
                  </text>
                </g>
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                <div className="flex items-center gap-2 mb-2 text-red-700 font-semibold">
                  <AlertTriangle className="w-5 h-5" />
                  Разовый ремонт
                </div>
                <p className="text-sm text-gray-700">
                  Платите за каждый выезд отдельно. При частых поломках расходы 
                  непредсказуемо растут. Подходит для 1–2 устройств с редкой печатью.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                <div className="flex items-center gap-2 mb-2 text-indigo-700 font-semibold">
                  <Clock className="w-5 h-5" />
                  Абонемент
                </div>
                <p className="text-sm text-gray-700">
                  Фиксированный ежемесячный платёж. Выгодно при высокой и стабильной 
                  нагрузке. Но при низкой печати вы переплачиваете за простой.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2 text-green-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  Покопийное
                </div>
                <p className="text-sm text-gray-700">
                  Платите только за фактические отпечатки. Идеально при переменной 
                  нагрузке: в месяц 500 копий платите мало, 5000 платите больше, 
                  но всё равно выгодно.
                </p>
              </div>
            </div>
          </section>

          {/* What is included */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-xl">
                <Package className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Что входит в стоимость отпечатка
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Когда мы говорим «от 0,50 ₽ за отпечаток» это не просто цена 
              бумаги и тонера. Это полная стоимость владения печатным устройством, 
              свёрнутая в одну цифру. Всё, что нужно для работы принтера, уже 
              включено. Вам не нужно держать в голове список расходников, не 
              нужно планировать бюджет на ремонт, не нужно договариваться 
              о выезде мастера.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Вы платите за результат напечатанную страницу. А мы обеспечиваем 
              всё, что стоит за этим результатом: оборудование, материалы, 
              обслуживание, поддержку и спокойствие.
            </p>
          </section>

          {/* Print-X credentials */}
          <section className="mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Принт-Икс доверенное решение для российского бизнеса
              </h2>
              <p className="text-gray-600">
                Мы используем систему управления печатью Принт-Икс в наших услугах покопийного обслуживания
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Единый реестр отечественного ПО
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Принт-Икс включён в Единый реестр российских программ 
                  для электронных вычислительных машин и баз данных Минцифры России. 
                  Полное соответствие требованиям импортозамещения.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Сертификация ФСТЭК
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Система имеет сертификат соответствия ФСТЭК России. 
                  Гарантирует защищённость обрабатываемой информации 
                  и соответствие требованиям информационной безопасности.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Сертифицированный инженер
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  В нашей команде есть сертифицированный инженер по Принт-Икс. 
                  Профессиональная настройка, внедрение и поддержка системы 
                  на самом высоком уровне.
                </p>
              </div>
            </div>
          </section>

          {/* Features grid */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Всё включено в стоимость копии
              </h2>
              <p className="text-gray-600">
                Ни одна из этих услуг не требует дополнительной оплаты
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Receipt className="w-7 h-7 text-emerald-600" />,
                  title: "Плата по факту",
                  desc: "Вы платите только за реально сделанные копии и распечатки. Нет фиксированных абонентских платежей за простой. Напечатали 300 страниц заплатили за 300.",
                  color: "emerald",
                },
                {
                  icon: <Package className="w-7 h-7 text-teal-600" />,
                  title: "Всё включено",
                  desc: "Стоимость отпечатка уже включает все расходные материалы тонер, картриджи, барабаны, девелоперы. И полное сервисное обслуживание.",
                  color: "teal",
                },
                {
                  icon: <Wrench className="w-7 h-7 text-green-600" />,
                  title: "Полный спектр услуг",
                  desc: "Регулярная профилактика, срочный ремонт, оригинальные запчасти и выезд мастера всё за наш счёт. Никаких скрытых платежей.",
                  color: "green",
                },
                {
                  icon: <BarChart3 className="w-7 h-7 text-cyan-600" />,
                  title: "Прозрачный учёт",
                  desc: "Ежемесячная детализированная отчётность по количеству отпечатков с каждого устройства. Видите, кто, сколько и когда печатал.",
                  color: "cyan",
                },
                {
                  icon: <PiggyBank className="w-7 h-7 text-emerald-600" />,
                  title: "Экономия до 40%",
                  desc: "Не переплачиваете за редкое использование техники. Бюджет оптимизируется именно под вашу реальную загрузку, а не под «потолок».",
                  color: "emerald",
                },
                {
                  icon: <Truck className="w-7 h-7 text-teal-600" />,
                  title: "Приоритетная замена расходников",
                  desc: "Мы отслеживаем уровень тонера удалённо и привозим новый до того, как он закончится. Никаких внезапных остановок.",
                  color: "teal",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-${feature.color}-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it works timeline */}
          <section className="mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Как это работает
              </h2>
              <p className="text-gray-600">
                От подписания договора до первого счёта всё просто
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-emerald-200 rounded-full hidden md:block" />

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Аудит и расчёт",
                    desc: "Анализируем ваш парк устройств, объёмы печати и текущие расходы. Рассчитываем индивидуальную стоимость отпечатка под вашу нагрузку.",
                  },
                  {
                    step: "2",
                    title: "Договор и установка",
                    desc: "Подписываем договор с фиксированной ценой за копию. Устанавливаем счётчики на устройства или подключаем удалённый мониторинг.",
                  },
                  {
                    step: "3",
                    title: "Вы печатаете мы следим",
                    desc: "Мониторим уровень расходников удалённо. При необходимости привозим тонер и запчасти до того, как закончатся.",
                  },
                  {
                    step: "4",
                    title: "Обслуживание без доплат",
                    desc: "Мастер выезжает по графику или при поломке всё включено в стоимость копии. Никаких счетов за выезд.",
                  },
                  {
                    step: "5",
                    title: "Ежемесячный отчёт и счёт",
                    desc: "В конце месяца получаете детализированный отчёт по количеству отпечатков с каждого устройства и единый счёт.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start relative">
                    <div className="hidden md:flex w-16 h-16 bg-emerald-600 rounded-full items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10 shadow-lg">
                      {item.step}
                    </div>
                    <div className="md:hidden w-16 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      Шаг {item.step}
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md flex-1 border border-emerald-50">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who it's for */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Кому подойдёт покопийное обслуживание
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Building2 className="w-6 h-6 text-blue-600" />,
                  title: "Офисы с переменной нагрузкой",
                  desc: "Если в одни месяцы вы печатаете 500 страниц, а в другие 3000, покопийный формат избавит от переплаты за простой. Вы платите ровно столько, сколько напечатали.",
                },
                {
                  icon: <Wallet className="w-6 h-6 text-emerald-600" />,
                  title: "Компании, которые хотят предсказуемый бюджет",
                  desc: "Никаких сюрпризов в виде срочных закупок картриджей или внеплановых ремонтов. Все расходы свёрнуты в одну понятную цифру цену за копию.",
                },
                {
                  icon: <Gauge className="w-6 h-6 text-teal-600" />,
                  title: "Организации без выделенного IT-специалиста",
                  desc: "Не нужно следить за уровнем тонера, искать поставщиков, сравнивать цены на картриджи. Мы берём на себя всю рутину закупок и обслуживания.",
                },
                {
                  icon: <HardDrive className="w-6 h-6 text-cyan-600" />,
                  title: "Бюджетные и государственные учреждения",
                  desc: "Прозрачная отчётность по каждому отпечатку, детализированные счета и полный контроль расходов всё, что требуется для строгой отчётности.",
                },
                {
                  icon: <TrendingDown className="w-6 h-6 text-green-600" />,
                  title: "Те, кто хочет сократить расходы на 30–40%",
                  desc: "При низкой и средней нагрузке покопийное обслуживание заметно дешевле абонемента, а при частых поломках выгоднее разового ремонта.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-indigo-600" />,
                  title: "Компании с высокими требованиями к надёжности",
                  desc: "Предиктивная замена расходников и регулярная профилактика сводят аварийные остановки к минимуму. Техника работает, а вы не отвлекаетесь.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why not subscription or one-time */}
          <section className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-xl">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Почему покопийное обслуживание выгоднее других моделей
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Разовый ремонт хорош, пока поломки редки. Но стоит принтеру 
              сломаться дважды в квартал и вы уже платите больше, чем 
              стоит абонемент. Абонемент хорош при стабильной высокой нагрузке. 
              Но если в июле офис ушёл в отпуск и напечатал втрое меньше 
              вы всё равно платите полную сумму.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Покопийное обслуживание убирает обе эти проблемы. Вы не зависите 
              от частоты поломок ремонт уже включён. Вы не зависите от 
              сезонности платите только за факт. Это справедливая модель, 
              где цена напрямую связана с ценностью, которую вы получаете.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Покопийное обслуживание это страховка от переплаты, замаскированная 
              под удобный сервис.
            </p>
          </section>

          {/* CASE STUDY */}
          <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8 text-emerald-400" />
              <span className="uppercase tracking-wider text-sm font-semibold text-emerald-400">
                Кейс из практики
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              −35% расходов на печать за год в юридической фирме
            </h2>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Юридическая компания с 4 МФУ и 25 сотрудниками перешла на 
              покопийное обслуживание после того, как поняла, что абонемент 
              в 8 000 ₽/мес не окупается: в спокойные месяцы печатали 600–800 
              страниц, а в периоды судебных процессов до 4 000. После перехода 
              на покопийный формат среднемесячные расходы снизились с 8 000 ₽ 
              до 5 200 ₽, а в «тихие» месяцы до 2 800 ₽. За год экономия 
              составила 35% при том же качестве обслуживания.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-emerald-400">−35%</div>
                <div className="text-sm opacity-90">расходов за год</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-teal-300">5 200 ₽</div>
                <div className="text-sm opacity-90">средний счёт в месяц</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-green-300">0</div>
                <div className="text-sm opacity-90">доплат за выезды и картриджи</div>
              </div>
            </div>
          </section>

          {/* Pricing transparency */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-100 p-3 rounded-xl">
                <Wallet className="w-7 h-7 text-yellow-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Прозрачная формула расчёта
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Стоимость отпечатка рассчитывается индивидуально под ваш парк 
              устройств и историю печати. Мы учитываем модель оборудования, 
              интенсивность использования, соотношение цветной и чёрно-белой 
              печати, а также специфику вашего документооборота.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              В договоре фиксируется цена за чёрно-белый отпечаток и отдельная 
              цена за цветной. Никаких штрафов за минимальный объём, никаких 
              платежей за простой. Вы печатаете мы считаем. Всё честно 
              и предсказуемо.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Сравнение всех моделей обслуживания
              </h2>
              <p className="text-gray-600">
                Выберите подходящую модель для вашего бизнеса
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm">Параметр</th>
                    <th className="py-4 px-4 text-red-600 font-bold">Разовый ремонт</th>
                    <th className="py-4 px-4 text-indigo-600 font-bold">Абонемент</th>
                    <th className="py-4 px-4 text-emerald-600 font-bold">Покопийное</th>
                    <th className="py-4 px-4 text-blue-600 font-bold">MPS</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Оплата", "За выезд + ремонт", "Фиксированный платёж", "За фактические отпечатки", "За фактические отпечатки + управление"],
                    ["Расходники", "Закупаете сами", "Частично включены", "Всё включено", "Всё включено"],
                    ["Профилактика", "Нет", "Плановая", "Плановая + предиктивная", "Плановая + предиктивная"],
                    ["Учёт расходов", "Нет", "Частичный", "Детальный по копиям", "Детальный по пользователям"],
                    ["Безопасность печати", "Нет", "Нет", "Базовая", "Pull Printing, авторизация"],
                    ["Прогноз бюджета", "Невозможен", "Стабильный", "Пропорциональный нагрузке", "Максимально точный"],
                    ["Лучше для", "1–2 устройств, редко", "3–10 устройств, стабильно", "Переменная нагрузка", "10+ устройств, высокий контроль"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-gray-700">{row[0]}</td>
                      <td className="py-3 px-4 text-gray-600">{row[1]}</td>
                      <td className="py-3 px-4 text-gray-600">{row[2]}</td>
                      <td className="py-3 px-4 text-gray-800 font-medium">{row[3]}</td>
                      <td className="py-3 px-4 text-gray-600">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Покопийное обслуживание это справедливость в чистом виде. 
              Вы платите не за возможность печатать, не за время, а за 
              результат. Каждая копия, каждый отпечаток, каждый распечатанный 
              документ всё по честной цене, без скрытых платежей и 
              неожиданных счетов.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-semibold italic">
              Если абонемент это аренда квартиры, а разовый ремонт 
              это проживание в отеле, то покопийное обслуживание это 
              оплата коммунальных услуг: вы платите только за то, что 
              реально потребили.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 lg:p-10 text-white text-center shadow-2xl">
            <Receipt className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Хотите платить только за фактические отпечатки?
            </h2>
            <p className="text-lg lg:text-xl mb-6 opacity-95">
              Оставьте заявку рассчитаем индивидуальную стоимость покопийного 
              обслуживания для вашего офиса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToRepairForm}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
