import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Monitor, Video, ArrowRight, Cpu, Wifi, Eye, ShieldCheck } from "lucide-react";
import { useRepairRequestModal } from "../components/RepairRequestModal";

export default function AboutUs() {
  const { open: scrollToRepairForm } = useRepairRequestModal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "О нас - Комплекс Принт",
    description: "Complexprint.ru — лидер по ремонту и обслуживанию печатного оборудования в России",
    url: "https://complexprint.ru/about-us",
    publisher: {
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
  };

  return (
    <>
      <Helmet>
        <title>О нас — Сервис, компьютеры и видеонаблюдение | ComplexPrint</title>
        <meta
          name="description"
          content="Complexprint.ru — лидер по обслуживанию печатной техники в России. Также продаём компьютеры и комплектующие (Intel, AMD, ASUS, Gigabyte) и устанавливаем системы видеонаблюдения Live webcams. 15+ лет опыта."
        />
        <link rel="canonical" href="https://complexprint.ru/about-us" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 lg:pt-[124px] pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Hero Image Section */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <img loading="lazy" decoding="async" 
              src="/images/HP_A3_master.jpg"
              alt="Профессиональный мастер ComplexPrint за работой"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Сервисное обслуживание печатной техники: 
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block mt-2">
                ваш надежный партнер в Москве
              </span>
            </h1>
          </div>

          {/* Intro Section */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complexprint.ru — лидер по ремонту и обслуживанию печатного оборудования в России
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ваша печатная техника — это сердце офиса. Ее сбой парализует работу, а простой стоит денег. 
              Мы в Complexprint.ru понимаем это как никто другой. Вот уже более <strong>15 лет</strong> мы обеспечиваем 
              бесперебойную работу печатного парка для крупнейших компаний России, становясь их надежным 
              технологическим партнером.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Со временем мы расширили сферу деятельности: теперь поставляем
              <strong> компьютеры и комплектующие</strong> от Intel, AMD, ASUS, Gigabyte, Lenovo, Dell
              и устанавливаем <strong>Live webcams</strong> — системы видеонаблюдения для офисов, складов
              и торговых точек. ComplexPrint — единый IT-партнёр для вашего бизнеса.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему 9 из 10 клиентов выбирают нас повторно?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы не просто «чиним принтеры». Мы предлагаем комплексное сервисное обслуживание, которое 
              предупреждает проблемы, а не просто их устраняет. Наша цель — чтобы вы забыли о том, что такое 
              неработающая техника.
            </p>
          </section>

          {/* Our Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Наши преимущества, которые работают на вас
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Advantage 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🚗</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Бесплатный выезд мастера по Москве и области
                    </h3>
                    <p className="text-gray-700">
                      Не тратьте время и деньги на доставку оборудования. Наш специалист приедет к вам в офис 
                      в удобное время и выполнит ремонт на месте.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🔧</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Только оригинальные запчасти
                    </h3>
                    <p className="text-gray-700">
                      Мы гарантируем долговечность ремонта, потому что используем исключительно сертифицированные 
                      комплектующие. Ваше оборудование проработает дольше и будет печатать безупречно.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🛡️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Гарантия на все виды работ — 100% ответственность
                    </h3>
                    <p className="text-gray-700">
                      Мы настолько уверены в качестве нашего сервиса, что даем официальную гарантию на все 
                      выполненные работы и установленные детали. Все гарантийные случаи решаем бесплатно и оперативно.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">💎</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Прозрачная цена — никаких сюрпризов
                    </h3>
                    <p className="text-gray-700">
                      Вы узнаете точную стоимость услуг до начала ремонта. Никаких скрытых платежей и доплат 
                      «по факту». Финансовая честность — наш принцип.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Directions: PC + Live webcams */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200/60 text-purple-700 text-[13px] font-semibold mb-4">
                Новые направления
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Мы не только печатная техника
              </h2>
              <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
                За 15 лет компания выросла из сервисного центра в полноценного IT-партнёра.
                Сегодня мы поставляем компьютерное оборудование и системы видеонаблюдения «под ключ».
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* PC card */}
              <Link
                to="/komputery-i-komplektuyushchie"
                data-testid="about-direction-computers"
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-purple-200 block"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Компьютеры и комплектующие
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Системные блоки, моноблоки, рабочие станции, процессоры Intel и AMD,
                      материнские платы, SSD/HDD, мониторы, видеокарты и оперативная память.
                      Подбор инженером, доставка по РФ и B2B-условия с отсрочкой.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Intel', 'AMD', 'ASUS', 'Gigabyte', 'Lenovo', 'Dell'].map((b) => (
                        <span key={b} className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[12px] font-semibold border border-purple-100">
                          {b}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-purple-700 font-semibold text-[14px] group-hover:gap-2.5 transition-all">
                      Перейти в каталог
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity">
                  <Cpu size={16} className="text-purple-400" />
                </div>
              </Link>

              {/* Live webcams card */}
              <div
                data-testid="about-direction-webcams"
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-pink-200"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(236,72,153,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Live webcams — системы видеонаблюдения
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Подбор, поставка и монтаж IP-камер для офисов, складов и торговых точек.
                      Онлайн-трансляция, удалённый доступ со смартфона, видеоархив и интеграция
                      с системами безопасности.
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {[
                        { Icon: Eye, text: 'Просмотр в реальном времени из любой точки' },
                        { Icon: Wifi, text: 'Wi-Fi и PoE камеры HD/4K' },
                        { Icon: ShieldCheck, text: 'Монтаж «под ключ» с гарантией' },
                      ].map(({ Icon, text }) => (
                        <li key={text} className="flex items-center gap-2 text-[14px] text-gray-700">
                          <Icon size={14} className="text-pink-500 flex-shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={scrollToRepairForm}
                      data-testid="about-webcams-cta"
                      className="inline-flex items-center gap-1.5 text-pink-600 font-semibold text-[14px] hover:text-pink-700 hover:gap-2.5 transition-all"
                    >
                      Получить расчёт
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity">
                  <Video size={16} className="text-pink-400" />
                </div>
              </div>
            </div>
          </section>

          {/* Special Offer */}
          <section className="mb-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">
              Специальное предложение для бизнеса
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              «Приоритетный сервис» для минимизации простоев
            </h3>
            <p className="text-lg mb-6">
              Цените каждую минуту? Закажите срочный ремонт печатного оборудования! Наша служба 
              экспресс-обслуживания сделает все, чтобы ваша техника вернулась в строй в максимально сжатые сроки.
            </p>
          </section>

          {/* Philosophy */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша философия — ваше спокойствие
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы строим отношения на открытости и ответственности. Для нас важно не только выполнить работу 
              качественно, но и сделать процесс комфортным для вас. Мы всегда четко озвучиваем сроки и соблюдаем их, 
              потому что дорожим вашим доверием.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Готовы работать без сбоев?</h2>
            <p className="text-xl mb-6">
              📞 Позвоните нам или оставьте заявку на сайте для бесплатной диагностики и расчета стоимости обслуживания!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToRepairForm}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Оставить заявку
              </button>
              <a 
                href="tel:+79911857289"
                className="flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+7 991 185 72 89</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
