import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { getFAQSchema, getHowToCallMasterSchema } from '../utils/schemas';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ данные
  const faqs = [
    {
      category: "Общие вопросы",
      questions: [
        {
          question: "Какие бренды принтеров вы обслуживаете?",
          answer: "Мы работаем со всеми ведущими брендами: HP (Hewlett-Packard), Canon, Kyocera, Ricoh, Konica Minolta, Xerox, Brother, Epson, Samsung и другими. Наши специалисты имеют опыт работы с лазерными и струйными принтерами, МФУ и копировальными аппаратами всех моделей."
        },
        {
          question: "Как быстро вы можете приехать на ремонт?",
          answer: "При наличии свободного специалиста мы можем выехать в день обращения. Обычно время ожидания составляет от 2 до 4 часов после согласования заявки. Для абонентов предусмотрен приоритетный выезд в течение 1-2 часов. Мы работаем с 9:00 до 21:00 ежедневно, включая выходные и праздничные дни."
        },
        {
          question: "Какую гарантию вы предоставляете на ремонт?",
          answer: "На все виды ремонтных работ мы предоставляем гарантию 6 месяцев. Гарантия распространяется на работу мастера и установленные запчасти. Если в течение гарантийного срока возникнет та же неисправность, мы бесплатно устраним её повторно. Гарантийный талон выдается после завершения ремонта."
        },
        {
          question: "Используете ли вы оригинальные запчасти?",
          answer: "Да, мы используем только оригинальные запчасти и комплектующие от производителей или их сертифицированных партнеров. Это гарантирует качество ремонта и длительный срок службы отремонтированного оборудования. При необходимости можем использовать качественные аналоги по согласованию с клиентом для снижения стоимости."
        },
        {
          question: "Выезжаете ли вы за пределы МКАД?",
          answer: "Да, мы работаем не только в пределах Москвы, но и по всей Московской области. Стоимость выезда за МКАД рассчитывается индивидуально в зависимости от удаленности объекта. Обычно это составляет дополнительно 50-100 рублей за каждый километр от МКАД."
        }
      ]
    },
    {
      category: "Стоимость услуг",
      questions: [
        {
          question: "Сколько стоит диагностика принтера?",
          answer: "Стоимость диагностики с выездом по Москве составляет от 1500₽. В эту сумму входит выезд мастера, осмотр оборудования, выявление неисправности и составление сметы ремонта. При согласии на ремонт стоимость диагностики полностью входит в стоимость работ."
        },
        {
          question: "Во что обойдется замена термоузла?",
          answer: "Стоимость замены термоузла зависит от модели принтера. Для HP LaserJet — от 5000₽, для Canon — от 4500₽, для Kyocera — от 6000₽. В стоимость входит работа мастера, оригинальный термоузел и тестирование после замены. Точную цену мастер озвучит после диагностики."
        },
        {
          question: "Что входит в абонентское обслуживание?",
          answer: "Абонентское обслуживание от 1500₽/месяц включает: регулярную профилактику (раз в месяц или квартал по договору), неограниченное время работы мастера для решения проблем, приоритетный выезд в течение 1-2 часов, бесплатную замену расходных материалов (тонер, фотобарабан при износе), чистку узлов принтера, обновление прошивки и консультации по оптимизации печати."
        },
        {
          question: "Как оплатить ваши услуги?",
          answer: "Мы принимаем оплату наличными, банковскими картами (Visa, MasterCard, Мир), по безналичному расчету для юридических лиц (с НДС и без НДС). Оплата производится после завершения ремонта и проверки работоспособности оборудования. Для абонентов возможна оплата по счету раз в месяц."
        }
      ]
    },
    {
      category: "Неисправности и ремонт",
      questions: [
        {
          question: "Почему принтер печатает с полосами?",
          answer: "Полосы на печати могут быть вызваны несколькими причинами: износ фотобарабана (требуется замена), загрязнение термоузла (нужна чистка или замена), заканчивается тонер в картридже, повреждение ракеля или магнитного вала. Для точной диагностики нужен осмотр мастера — мы определим причину и предложим оптимальное решение."
        },
        {
          question: "Что делать, если принтер не захватывает бумагу?",
          answer: "Проблемы с захватом бумаги обычно связаны с: износом резиновых роликов подачи (требуется замена), загрязнением роликов (достаточно чистки), использованием неподходящей бумаги, неправильной настройкой лотка. Наши мастера быстро определят и устранят причину, заменив изношенные ролики или очистив механизм подачи."
        },
        {
          question: "Принтер выдает ошибку - что делать?",
          answer: "При появлении ошибки на дисплее принтера: запишите код ошибки и модель принтера, позвоните нам по телефону +7 (991) 185-72-89, опишите ситуацию специалисту. В большинстве случаев мы сможем провести первичную диагностику по телефону и подсказать простое решение. Если потребуется выезд мастера — согласуем удобное время."
        },
        {
          question: "Можно ли отремонтировать принтер на месте?",
          answer: "Да, в 90% случаев ремонт выполняется непосредственно на территории клиента. Наши мастера имеют при себе необходимые инструменты и наиболее популярные запчасти. Только в редких случаях (серьезные аппаратные поломки, отсутствие редких деталей) может потребоваться транспортировка принтера в сервисный центр."
        },
        {
          question: "Сколько времени занимает ремонт?",
          answer: "Время ремонта зависит от характера неисправности: простая диагностика и настройка — 30-60 минут, замена расходных материалов — 1-2 часа, замена термоузла или других узлов — 2-4 часа, сложный ремонт с разборкой — от 4 часов до 1 рабочего дня. Мастер озвучит примерное время после диагностики."
        },
        {
          question: "Ремонтируете ли вы старые модели принтеров?",
          answer: "Да, мы работаем с принтерами любого возраста. Однако для моделей старше 10 лет может быть проблема с наличием запчастей — их придется заказывать дополнительно, что увеличит сроки ремонта. В некоторых случаях ремонт очень старой техники может быть экономически нецелесообразен, и мы порекомендуем замену оборудования."
        }
      ]
    }
  ];

  // Формируем плоский список для Schema.org
  const allFAQs = faqs.flatMap(category => category.questions);
  const faqSchema = getFAQSchema(allFAQs);
  const howToSchema = getHowToCallMasterSchema();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Часто задаваемые вопросы о ремонте принтеров | ComplexPrint FAQ</title>
        <meta 
          name="description" 
          content="Ответы на популярные вопросы о ремонте и обслуживании принтеров в Москве: стоимость, сроки, гарантия, выезд мастера. Как вызвать специалиста, что делать при неисправностях." 
        />
        <link rel="canonical" href="https://complexprint.ru/faq" />
        <meta property="og:title" content="FAQ — Вопросы о ремонте принтеров | ComplexPrint" />
        <meta property="og:description" content="Часто задаваемые вопросы о ремонте принтеров: цены, сроки, гарантии" />
        <meta property="og:url" content="https://complexprint.ru/faq" />
        <meta name="keywords" content="FAQ ремонт принтеров, вопросы ответы принтеры, стоимость ремонта принтера, гарантия на ремонт, как вызвать мастера" />
        
        {/* Schema.org разметка */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 pt-24 lg:pt-[124px] pb-16 max-w-5xl">
        <Breadcrumbs items={[{ name: 'Часто задаваемые вопросы', url: '/faq' }]} />

        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Часто задаваемые <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">вопросы</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о ремонте и обслуживании принтеров в Москве
          </p>
        </header>

        {/* HowTo Section */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Phone className="w-6 h-6 mr-3 text-blue-600" />
            Как вызвать мастера по ремонту принтеров
          </h2>
          <ol className="space-y-4">
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Свяжитесь с нами</h3>
                <p className="text-gray-700">Позвоните по телефону <a href="tel:+79911857289" className="text-blue-600 hover:underline font-semibold">+7 (991) 185-72-89</a> или оставьте заявку на сайте через форму обратной связи</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Опишите проблему</h3>
                <p className="text-gray-700">Расскажите о проблеме с принтером: модель, бренд, симптомы неисправности. Укажите бренд (HP, Canon, Kyocera и др.) и симптомы (полосы, замятие бумаги, ошибки)</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Согласуйте время визита</h3>
                <p className="text-gray-700">Выберите удобное время. Выезд возможен в день обращения, работаем с 9:00 до 21:00 ежедневно</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Диагностика на месте</h3>
                <p className="text-gray-700">Мастер приедет, проведет диагностику и озвучит стоимость. Диагностика от 1500₽ (входит в стоимость ремонта)</p>
              </div>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ремонт с гарантией</h3>
                <p className="text-gray-700">После согласия выполним ремонт с оригинальными запчастями. Гарантия 6 месяцев. Оплата после проверки работоспособности</p>
              </div>
            </li>
          </ol>
        </section>

        {/* FAQ Sections */}
        {faqs.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-pink-200">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, index) => {
                const globalIndex = categoryIndex * 100 + index;
                const isOpen = openIndex === globalIndex;
                
                return (
                  <article 
                    key={globalIndex}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {/* Contact CTA */}
        <section className="mt-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
          <p className="text-lg mb-6 opacity-95">Свяжитесь с нами, и мы поможем решить вашу проблему</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+79911857289"
              className="inline-flex items-center bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              +7 (991) 185-72-89
            </a>
            <a 
              href="mailto:info@complexprint.ru"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@complexprint.ru
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center text-sm opacity-90">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Москва, Абрамцевская 11 к1 стр3 • Работаем: 09:00-21:00 ежедневно</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
