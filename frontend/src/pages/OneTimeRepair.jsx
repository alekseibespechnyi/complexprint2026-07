import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRepairRequestModal } from "../components/RepairRequestModal";
import {
  Phone,
  Wrench,
  Zap,
  ShieldCheck,
  Clock,
  Truck,
  Package,
  FileCheck,
  Building2,
  Lock,
  CheckCircle2,
  Target,
  ArrowRight,
} from "lucide-react";

export default function OneTimeRepair() {
  const { open: scrollToRepairForm } = useRepairRequestModal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Разовый ремонт печатной техники для B2B и банков",
    serviceType: "Разовый ремонт принтеров и МФУ с выездом",
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
    areaServed: { "@type": "City", name: "Москва" },
    description:
      "Профессиональный разовый ремонт принтеров и МФУ для B2B-клиентов и банков: выезд без согласований, самостоятельная закупка запчастей в день заявки, ремонт в день обращения в 90% случаев, работа по NDA.",
    url: "https://complexprint.ru/razovyy-remont",
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: "3000",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "RUB",
        price: "3000",
        unitText: "выезд",
      },
    },
  };

  const advantages = [
    {
      icon: Zap,
      title: "Без согласований",
      text: "Не перекидываем задачу между отделами принимаем заявку и сразу ведём её до результата.",
    },
    {
      icon: Package,
      title: "Сами закупаем детали",
      text: "Если для ремонта нужна запчасть закупаем её в тот же день, не перекладывая ожидание на клиента.",
    },
    {
      icon: Clock,
      title: "До 90% ремонтов в день обращения",
      text: "Большинство неисправностей закрываем за один визит, без повторных согласований и переносов.",
    },
    {
      icon: Building2,
      title: "Понимаем B2B-регламенты",
      text: "Работаем с корпоративными клиентами и банками: договор, акты, закрывающие документы, дисциплина.",
    },
  ];

  const stats = [
    {
      icon: Clock,
      value: "15 мин",
      label: "на решение о выезде",
    },
    {
      icon: CheckCircle2,
      value: "до 90%",
      label: "ремонтов в день обращения",
    },
    {
      icon: Truck,
      value: "В тот же день",
      label: "самостоятельная закупка запчастей",
    },
    {
      icon: Lock,
      value: "NDA",
      label: "конфиденциальная работа",
    },
  ];

  const process = [
    { icon: Phone, title: "Заявка", text: "Звонок или форма фиксируем задачу" },
    { icon: Target, title: "Решение о выезде", text: "В течение 15 минут" },
    { icon: Wrench, title: "Диагностика", text: "На месте, без вывоза техники" },
    { icon: Package, title: "Закупка деталей", text: "В день заявки, сами" },
    { icon: ShieldCheck, title: "Ремонт и сдача", text: "Чаще всего в тот же день" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Разовый ремонт принтеров и МФУ для B2B и банков в Москве | ComplexPrint
        </title>
        <meta
          name="description"
          content="Разовый ремонт печатной техники для бизнеса и банков: выезд без согласований, самостоятельная закупка запчастей в день заявки, до 90% ремонтов закрываем в день обращения. Работаем по NDA."
        />
        <meta
          name="keywords"
          content="разовый ремонт принтера, ремонт МФУ для бизнеса, ремонт принтеров для банков, срочный выезд мастера принтер, B2B ремонт оргтехники, NDA ремонт принтеров"
        />
        <link
          rel="canonical"
          href="https://complexprint.ru/razovyy-remont"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="ru" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero */}
          <section className="mb-12 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-700 rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8" />
              <span className="uppercase tracking-wider text-sm font-semibold opacity-90">
                Разовый ремонт для B2B и банков
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Разовый ремонт печатной техники для B2B и банков
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed opacity-95 max-w-4xl mb-8">
              Когда встаёт принтер или МФУ в банке, офисе или сервисной
              компании, это редко бывает «просто поломка». Обычно это
              остановка документов, задержка процессов и лишнее напряжение для
              целого отдела. В таких ситуациях особенно важно не просто
              вызвать мастера, а получить быстрое, управляемое и
              профессиональное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToRepairForm}
                className="bg-white text-purple-700 hover:bg-gray-100 px-7 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Оставить заявку
              </button>
              <a
                href="tel:+79911857289"
                className="flex items-center justify-center space-x-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
              >
                <Phone className="w-5 h-5" />
                <span>+7 991 185 72 89</span>
              </a>
            </div>
          </section>

          {/* Intro */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы работаем именно так. Без лишних цепочек согласования, без
              долгого ожидания ответа от разных подразделений и без затяжных
              «передали в работу». Клиент получает прямой сервис:{" "}
              <strong>обращение → диагностика → выезд → ремонт → результат</strong>.
            </p>
          </section>

          {/* Why corporate clients choose us */}
          <section className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Building2 className="w-7 h-7 text-purple-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Почему нас выбирают корпоративные клиенты
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Мы понимаем, что в B2B-сегменте ценится не только качество
              ремонта, но и то, как выстроен сам процесс. Поэтому у нас нет
              громоздкой структуры, где срочная заявка проходит через
              несколько уровней решений. Мы сами принимаем задачу в работу,
              сами организуем закупку деталей и сами доводим ремонт до
              результата.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Если для восстановления техники нужна запчасть, мы не
              перекладываем ожидание на клиента. Мы закупаем её в тот же день
              и ускоряем восстановление оборудования настолько, насколько это
              возможно в конкретной ситуации. Именно поэтому{" "}
              <strong>почти 90% ремонтов мы завершаем в день обращения</strong>.
            </p>
          </section>

          {/* ADVANTAGES - cards */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Преимущества, которые ценят в B2B
              </h2>
              <p className="text-gray-600">
                Конкретные и измеримые, а не абстрактные
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-pink-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-xl flex-shrink-0">
                        <Icon className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {a.title}
                        </h3>
                        <p className="text-gray-700">{a.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What business gets */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <FileCheck className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Что получает ваш бизнес
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Для компании это означает главное <strong>контроль над
              ситуацией</strong>. Поломка не превращается в длинную историю, а
              остаётся рабочей задачей, которая быстро закрывается и не
              мешает основным процессам.
            </p>
            <ul className="space-y-3">
              {[
                "Быстрый выезд без бюрократии",
                "Профессиональная диагностика на месте",
                "Самостоятельная закупка необходимых деталей",
                "Ремонт в день обращения в большинстве случаев",
                "Прозрачный и управляемый сервисный процесс",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* STATS / NUMBERS BLOCK */}
          <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Цифры, которые звучат убедительнее слов
              </h2>
              <p className="text-gray-300">
                Конкретные показатели для финтеха, банков и B2B
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-pink-400" />
                    <div className="text-2xl lg:text-3xl font-bold mb-2 text-white">
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-300">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PROCESS TIMELINE */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Как проходит разовый ремонт
              </h2>
              <p className="text-gray-600">
                Прямой путь от заявки до восстановленной техники
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 rounded-full" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
                {process.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="text-center">
                      <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full text-white shadow-lg mb-4">
                        <Icon className="w-8 h-8" />
                        <span className="absolute -top-2 -right-2 bg-white text-purple-600 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold border-2 border-purple-600">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-600">{p.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Format for banks */}
          <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Lock className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Формат работы, который подходит банкам
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Для банков и финансовых организаций особенно важны{" "}
              <strong>точность, дисциплина и конфиденциальность</strong>. Мы
              понимаем эту среду и выстраиваем работу так, чтобы не создавать
              лишней нагрузки для клиента.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наш подход удобен там, где нельзя терять рабочее время, где
              важна оперативная реакция и где сервис должен быть не просто
              быстрым, а предсказуемым и корректным. Мы не тратим время
              клиента на согласования, которые не влияют на результат, и не
              превращаем срочный ремонт в бюрократическую процедуру.
            </p>
          </section>

          {/* When one-time repair is right */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-100 p-3 rounded-xl">
                <Target className="w-7 h-7 text-pink-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Когда разовый ремонт правильное решение
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Этот формат особенно хорошо работает, когда техника уже
              остановилась и нужен не договор на будущее, а конкретное
              действие сейчас. Если офису важно быстро вернуть печать, не
              останавливая работу отдела, разовый ремонт самый прямой путь
              к решению.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Он подходит компаниям, у которых уже есть внутренняя структура,
              и им нужен подрядчик, способный работать в том же темпе. Без
              лишних слов, без пауз и без потери управляемости.
            </p>
          </section>

          {/* Our principle */}
          <section className="mb-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Наш принцип работы
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Мы не обещаем «разобраться когда-нибудь». Мы берём задачу и
              доводим её до результата. Поэтому клиенты выбирают нас, когда
              им нужен сервис, который работает как часть их собственного
              бизнес-процесса <strong>чётко, быстро и без лишнего шума</strong>.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Если технику можно восстановить в тот же день мы делаем
              именно это. Если нужна деталь сами её ищем, закупаем и
              ставим. Наша задача не обсуждать ремонт, а возвращать
              оборудование в строй.
            </p>
          </section>

          {/* Strong CTA */}
          <section className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-10 text-white text-center shadow-2xl">
            <Zap className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Если техника остановилась не ждите согласований
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-95 max-w-3xl mx-auto">
              Оставьте заявку, и мы быстро подключимся к ремонту. Для
              B2B-клиентов и банков особенно важны скорость и надёжность —
              именно на этом мы и строим свою работу.
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
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <Link
                to="/abonentskoe-obsluzhivanie"
                className="inline-flex items-center gap-1 text-white/90 underline hover:text-white"
              >
                Нужно постоянное обслуживание?{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ceny"
                className="inline-flex items-center gap-1 text-white/90 underline hover:text-white"
              >
                Прайс на услуги <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
