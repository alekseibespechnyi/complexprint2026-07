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
} from "lucide-react";

export default function MpsService() {
  const { open: scrollToRepairForm } = useRepairRequestModal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Аутсорсинг печати MPS - Managed Print Services в Москве",
    serviceType: "Managed Print Services (MPS) на базе системы Принт-Икс",
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
      "Полный аутсорсинг печати MPS на базе системы управления печатью Принт-Икс (аналог MYQ). Сокращение затрат на печать до 30–50%, контроль заданий, безопасная печать, детальная аналитика.",
    url: "https://complexprint.ru/mps-autsorsing-pechati",
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "0.08",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "RUB",
        price: "0.08",
        unitText: "отпечаток",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Аутсорсинг печати MPS в Москве | ComplexPrint - Принт-Икс, экономия до 30–50%
        </title>
        <meta
          name="description"
          content="Managed Print Services (MPS) в Москве на базе Принт-Икс аналог MYQ. Автоматический учёт печати, безопасная печать, правила печати, аналитика по отделам. Сократите затраты на печать до 30–50%."
        />
        <meta
          name="keywords"
          content="MPS аутсорсинг печати, managed print services, система управления печатью, Принт-Икс, Print-X, аналог MYQ, покопийная печать, контроль печати, безопасная печать, оптимизация печати Москва"
        />
        <link
          rel="canonical"
          href="https://complexprint.ru/mps-autsorsing-pechati"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="ru" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero */}
          <section className="mb-12 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Printer className="w-8 h-8" />
              <span className="uppercase tracking-wider text-sm font-semibold opacity-90">
                Аутсорсинг печати - MPS
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Аутсорсинг печати MPS: когда вы платите только за то, что реально напечатали
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed opacity-95 max-w-4xl">
              Представьте, что печать в вашем офисе перестаёт быть чёрным ящиком, 
              в который уходят деньги без объяснений. Каждый отпечаток учтён, 
              каждый пользователь идентифицирован, каждый расход контролируется. 
              Это не магия это Managed Print Services на базе системы управления 
              печатью <strong>Принт-Икс</strong> (аналог MYQ).
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">30–50%</div>
                <div className="text-sm opacity-90">
                  сокращение затрат на печать
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">
                  прозрачность всех заданий печати
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">от 0,08 ₽</div>
                <div className="text-sm opacity-90">
                  стоимость одного отпечатка
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              MPS (Managed Print Services) это не просто обслуживание принтеров, 
              а полный контроль над печатной инфраструктурой. Мы берём на себя 
              всё: от мониторинга устройств и учёта заданий до предиктивного 
              обслуживания и оптимизации расходов. Вы получаете единый счёт, 
              прозрачную аналитику и спокойствие.
            </p>
          </section>

          {/* Why chaos happens */}
          <section className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-xl">
                <Eye className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Почему печать в офисе часто похожа на неконтролируемый поток
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              В типичном офисе печать живёт своей жизнью: кто-то печатает 
              личные фотографии в цвете, кто-то забывает забрать конфиденциальный 
              документ из лотка, кто-то отправляет на печать 200-страничный отчёт 
              в одностороннем режиме просто потому, что так проще. А бухгалтерия 
              узнаёт о реальных расходах только когда заканчиваются картриджи 
              и приходится закупать новые в спешке.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Без системы управления печатью расходы растут незаметно, как трещина 
              в фундаменте. Компания платит за цветные отпечатки, которые никто 
              не заказывал, за простои, которые можно было предвидеть, и за 
              безопасность, которую невозможно обеспечить, когда документы 
              лежат в общем лотке.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              MPS решает эту проблему, превращая хаос в управляемый процесс.
            </p>
          </section>

          {/* CHART: before vs after MPS */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Обычный офис vs Офис с MPS
              </h2>
              <p className="text-gray-600">
                Как меняется структура затрат и контроль при внедрении MPS
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <svg
                viewBox="0 0 800 340"
                className="w-full h-auto"
                role="img"
                aria-label="График сравнения затрат до и после внедрения MPS"
              >
                {/* Axes */}
                <line x1="60" y1="280" x2="760" y2="280" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="60" y1="40" x2="60" y2="280" stroke="#cbd5e1" strokeWidth="2" />

                {/* Y label */}
                <text x="20" y="160" fontSize="12" fill="#64748b" transform="rotate(-90 20 160)">
                  Затраты на печать
                </text>

                {/* X labels - months */}
                {["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"].map((m, i) => {
                  const x = 60 + (i * 700) / 11;
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
                  Месяцы
                </text>

                {/* Before MPS line - chaotic high */}
                <path
                  d="M 60 100 L 123 120 L 187 80 L 250 140 L 314 90 L 377 160 L 441 70 L 504 130 L 568 85 L 631 150 L 695 95 L 758 110"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                {/* dots */}
                {[60, 123, 187, 250, 314, 377, 441, 504, 568, 631, 695, 758].map((x, i) => {
                  const y = [100, 120, 80, 140, 90, 160, 70, 130, 85, 150, 95, 110][i];
                  return <circle key={x} cx={x} cy={y} r="4" fill="#ef4444" />;
                })}

                {/* After MPS line - flat low */}
                <path
                  d="M 60 210 Q 250 205, 441 208 T 758 210"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                {/* dots */}
                {[60, 250, 441, 631, 758].map((x) => (
                  <circle key={x} cx={x} cy="210" r="4" fill="#10b981" />
                ))}

                {/* MPS start marker */}
                <line x1="441" y1="40" x2="441" y2="280" stroke="#6366f1" strokeWidth="2" strokeDasharray="6,4" />
                <text x="441" y="35" fontSize="12" fill="#6366f1" fontWeight="bold" textAnchor="middle">
                  Внедрение MPS
                </text>

                {/* Legend */}
                <g transform="translate(80, 50)">
                  <rect x="0" y="0" width="14" height="14" fill="#ef4444" rx="2" />
                  <text x="22" y="11" fontSize="12" fill="#1f2937">
                    До MPS: хаотичные расходы, пики и непредвиденные траты
                  </text>
                  <rect x="0" y="22" width="14" height="14" fill="#10b981" rx="2" />
                  <text x="22" y="33" fontSize="12" fill="#1f2937">
                    После MPS: стабильный бюджет, предсказуемые расходы
                  </text>
                </g>
              </svg>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                <div className="flex items-center gap-2 mb-2 text-red-700 font-semibold">
                  <Eye className="w-5 h-5" />
                  До внедрения MPS
                </div>
                <p className="text-sm text-gray-700">
                  Нет учёта заданий, непредсказуемые расходы, личная печать 
                  на рабочих принтерах, конфиденциальные документы в общем лотке, 
                  аварийные закупки картриджей.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <div className="flex items-center gap-2 mb-2 text-green-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  После внедрения MPS
                </div>
                <p className="text-sm text-gray-700">
                  Полный учёт по пользователям и отделам, правила печати, 
                  безопасная печать по авторизации, предиктивное обслуживание, 
                  единый предсказуемый бюджет.
                </p>
              </div>
            </div>
          </section>

          {/* What Print-X gives */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Cpu className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Что даёт система Принт-Икс (аналог MYQ)
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Принт-Икс</strong> это программно-аппаратный комплекс, 
              разработанный для сокращения затрат на печать документов в крупных 
              компаниях. Система входит в Единый реестр российских программ 
              Минцифры России и совместима с большинством печатных устройств, 
              официально присутствующих на российском рынке.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Принт-Икс работает как невидимый диспетчер печати: видит каждое 
              задание, знает, кто его отправил, на каком устройстве печатает, 
              сколько страниц и в каком режиме. А главное позволяет настроить 
              правила, которые автоматически оптимизируют расходы и повышают 
              безопасность.
            </p>
          </section>

          {/* Print-X credentials */}
          <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Принт-Икс доверенное решение для российского бизнеса
              </h2>
              <p className="text-gray-600">
                Мы используем систему управления печатью Принт-Икс в наших услугах MPS
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-indigo-600" />
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

              <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
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

              <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                Возможности системы управления печатью
              </h2>
              <p className="text-gray-600">
                Контроль, безопасность и оптимизация на каждом этапе
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <BarChart3 className="w-7 h-7 text-blue-600" />,
                  title: "Автоматический учёт",
                  desc: "Каждое задание фиксируется: пользователь, отдел, устройство, количество страниц, цвет/чёрно-белый режим. Детальная аналитика в реальном времени.",
                  color: "blue",
                },
                {
                  icon: <Lock className="w-7 h-7 text-purple-600" />,
                  title: "Безопасная печать",
                  desc: "Документ выходит из принтера только после авторизации пользователя по карте доступа, PIN-коду или QR-коду. Конфиденциальность гарантирована.",
                  color: "purple",
                },
                {
                  icon: <Layers className="w-7 h-7 text-indigo-600" />,
                  title: "Правила печати",
                  desc: "Автоматическое перенаправление заданий, принудительный дуплекс, ограничение цветной печати по утверждению, лимиты на пользователя или отдел.",
                  color: "indigo",
                },
                {
                  icon: <Fingerprint className="w-7 h-7 text-pink-600" />,
                  title: "Авторизация и доступ",
                  desc: "Интеграция с Active Directory и LDAP. Настройка прав доступа к устройствам, копированию и сканированию для разных групп сотрудников.",
                  color: "pink",
                },
                {
                  icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
                  title: "Архив и аудит",
                  desc: "Формирование архива отправленных на печать документов, создание отчётов по каждому пользователю и устройству. Полный аудит для compliance.",
                  color: "green",
                },
                {
                  icon: <Zap className="w-7 h-7 text-yellow-600" />,
                  title: "Предиктивное обслуживание",
                  desc: "Мониторинг состояния устройств в реальном времени: ресурс расходников, износ узлов, прогноз поломок. Замена до аварии, а не после.",
                  color: "yellow",
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

          {/* TIMELINE: implementation */}
          <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                От заявки до полного контроля 7 дней
              </h2>
              <p className="text-gray-600">
                Как проходит внедрение MPS на базе Принт-Икс
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-200 rounded-full hidden md:block" />

              <div className="space-y-6">
                {[
                  {
                    day: "День 1",
                    title: "Аудит печатной инфраструктуры",
                    desc: "Анализ парка устройств, объёмов печати, текущих расходов и потребностей компании. Формирование предложения.",
                  },
                  {
                    day: "День 2–3",
                    title: "Проектирование и настройка",
                    desc: "Установка сервера Принт-Икс, интеграция с Active Directory, настройка политик печати, правил и лимитов.",
                  },
                  {
                    day: "День 4–5",
                    title: "Подключение устройств",
                    desc: "Настройка всех принтеров и МФУ в сети, установка драйверов, тестирование печати и авторизации.",
                  },
                  {
                    day: "День 6",
                    title: "Обучение персонала",
                    desc: "Инструктаж администраторов и ключевых пользователей. Полный курс обучения всего 2 дня.",
                  },
                  {
                    day: "День 7",
                    title: "Запуск и мониторинг",
                    desc: "Полноценный запуск системы. Первые отчёты, контроль заданий, начало предиктивного обслуживания.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start relative">
                    <div className="hidden md:flex w-16 h-16 bg-indigo-600 rounded-full items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10 shadow-lg">
                      {step.day}
                    </div>
                    <div className="md:hidden w-16 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {step.day}
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-md flex-1 border border-indigo-50">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where savings come from */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <PiggyBank className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Где именно появляется экономия
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Экономия при MPS приходит не от одной волшебной кнопки, а от 
              множества мелких, но уверенных шагов. Правило двусторонней печати 
              сокращает расход бумаги на 30–40%. Ограничение цветной печати 
              только по утверждению убирает «случайные» цветные отпечатки. 
              Безопасная печать исключает потерянные и перепечатанные документы.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Но главное предиктивное обслуживание. Когда система видит, что 
              ресурс узла подходит к концу, мастер выезжает до поломки. 
              Никаких аварийных простоев, никаких срочных закупок по завышенным 
              ценам, никакой паники в офисе. Техника работает, а бюджет 
              предсказуем.
            </p>
          </section>

          {/* Who it's for */}
          <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Кому подходит аутсорсинг печати MPS
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              MPS особенно эффективен там, где печать это не эпизодическая 
              задача, а ежедневный процесс, встроенный в работу компании. 
              Банки, страховые компании, финансовые учреждения традиционно 
              первые последователи управляемой печати. Но сейчас к MPS 
              активно присматриваются государственные структуры, бюджетные 
              организации, нефтегазовые компании и предприятия с высокими 
              требованиями к информационной безопасности.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Если в вашем офисе от 5 принтеров и более, если печать важна 
              для бухгалтерии, отдела продаж или юридического отдела, если 
              вы хотите знать, куда уходят деньги на печать MPS это решение, 
              которое окупается уже в первые месяцы.
            </p>
          </section>

          {/* Security section */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Shield className="w-7 h-7 text-purple-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Безопасность печати как стандарт, а не опция
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              В эпоху утечек данных и строгих требований к compliance печать 
              один из самых уязвимых участков документооборота. Документ, 
              отправленный на принтер и оставленный в лотке, может увидеть 
              кто угодно. Контракт, счёт, персональные данные всё это 
              становится доступным любому проходящему мимо.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Принт-Икс решает эту проблему через Pull Printing: документ 
              остаётся на сервере до тех пор, пока пользователь не подойдёт 
              к устройству и не авторизуется. Никаких забытых документов, 
              никаких утечек, никаких рисков. Печать становится такой же 
              контролируемой, как доступ к корпоративной почте.
            </p>
          </section>

          {/* CASE STUDY */}
          <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8 text-indigo-400" />
              <span className="uppercase tracking-wider text-sm font-semibold text-indigo-400">
                Кейс из практики
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              −38% затрат на печать за 6 месяцев в банковском секторе
            </h2>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Один из наших клиентов региональный офис крупного банка с 
              парком из 32 принтеров и МФУ столкнулся с постоянным ростом 
              расходов на печать. Анализ показал, что 23% цветных отпечатков 
              были личными, а 15% заданий печатались в одностороннем режиме 
              без необходимости. После внедрения Принт-Икс с правилами печати 
              и безопасной авторизацией затраты сократились на 38%, а число 
              инцидентов с конфиденциальными документами упало до нуля.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-indigo-400">−38%</div>
                <div className="text-sm opacity-90">затрат на печать</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-purple-300">0</div>
                <div className="text-sm opacity-90">инцидентов утечек</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-green-300">100%</div>
                <div className="text-sm opacity-90">прозрачность расходов</div>
              </div>
            </div>
          </section>

          {/* Pricing model */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-100 p-3 rounded-xl">
                <TrendingDown className="w-7 h-7 text-yellow-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Прозрачная модель оплаты
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              В отличие от классического сервисного обслуживания, где вы платите 
              за выезды и замену деталей, MPS работает по принципу покопийной 
              оплаты. Вы платите только за фактически напечатанные страницы 
              от <strong>0,08 ₽ за чёрно-белый отпечаток</strong>. В стоимость 
              входит всё: оборудование, расходные материалы, сервисное 
              обслуживание, программное обеспечение и поддержка.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Никаких скрытых платежей, никаких сюрпризов. Единый счёт в конце 
              месяца с детальной разбивкой по устройствам, отделам и пользователям. 
              Бюджет на печать становится таким же предсказуемым, как аренда офиса.
            </p>
          </section>

          {/* Comparison: MPS vs Subscription vs One-time */}
          <section className="mb-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Сравнение моделей обслуживания
              </h2>
              <p className="text-gray-600">
                Какая модель подходит именно вам
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-4 text-gray-500 font-semibold text-sm">Параметр</th>
                    <th className="py-4 px-4 text-red-600 font-bold">Разовый ремонт</th>
                    <th className="py-4 px-4 text-purple-600 font-bold">Абонентка</th>
                    <th className="py-4 px-4 text-indigo-600 font-bold">MPS</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Оплата", "За каждый выезд и ремонт", "Фиксированный ежемесячный платёж", "За фактическое количество отпечатков"],
                    ["Учёт расходов", "Нет", "Частичный", "Полный учёт по пользователям и отделам"],
                    ["Безопасность печати", "Нет", "Нет", "Pull Printing, авторизация, аудит"],
                    ["Правила печати", "Нет", "Нет", "Дуплекс, лимиты, перенаправление"],
                    ["Предиктивное ТО", "Нет", "Да", "Да + мониторинг в реальном времени"],
                    ["Прогноз бюджета", "Невозможен", "Стабильный", "Максимально точный"],
                    ["Лучше для", "1–2 устройств, редкая печать", "3–10 устройств, регулярная печать", "10+ устройств, высокие требования к контролю"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-gray-700">{row[0]}</td>
                      <td className="py-3 px-4 text-gray-600">{row[1]}</td>
                      <td className="py-3 px-4 text-gray-600">{row[2]}</td>
                      <td className="py-3 px-4 text-gray-800 font-medium">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Аутсорсинг печати MPS это не просто ещё одна услуга в списке. 
              Это переход от неуправляемых расходов к полному контролю, от 
              аварийного ремонта к предиктивному обслуживанию, от хаоса к порядку.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-semibold italic">
              Если абонентское обслуживание это регулярный техосмотр, то MPS 
              это полный аутсорсинг автопарка: вы не думаете о бензине, 
              о замене масла и о ремонте. Вы просто едете.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-8 lg:p-10 text-white text-center shadow-2xl">
            <Printer className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Хотите узнать, сколько реально стоит печать в вашем офисе?
            </h2>
            <p className="text-lg lg:text-xl mb-6 opacity-95">
              Оставьте заявку проведём бесплатный аудит печатной инфраструктуры 
              и рассчитаем экономию от внедрения MPS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToRepairForm}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
