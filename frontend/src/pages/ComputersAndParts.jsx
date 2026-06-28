import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Monitor,
  Cpu,
  CircuitBoard,
  HardDrive,
  MemoryStick,
  Server,
  Wrench,
  Search,
  Settings,
  Headphones,
  TrendingDown,
  Package,
  ShieldCheck,
  Users,
  Truck,
  Receipt,
  Boxes,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Check,
} from 'lucide-react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';
import { useRepairRequestModal } from '../components/RepairRequestModal';
import { trackGoal } from '../utils/analytics';

const CATEGORIES = [
  {
    Icon: Server,
    title: 'Системные блоки и моноблоки',
    text: 'Готовые офисные ПК, моноблоки и рабочие станции под любые задачи: офис, бухгалтерия, проектирование, графика.',
    image: '/images/pc-workstation.png',
    imgClass: 'object-contain bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  },
  {
    Icon: Cpu,
    title: 'Процессоры Intel и AMD',
    text: 'Полная линейка CPU: от Intel Core i3 до Xeon, от AMD Ryzen 3 до Threadripper. Подбор под материнскую плату.',
    image: '/images/pc-cpu-intel-amd.webp',
    imgClass: 'object-cover',
  },
  {
    Icon: CircuitBoard,
    title: 'Материнские платы',
    text: 'Платы Gigabyte, ASUS, MSI и ASRock для всех современных сокетов. Гарантия совместимости с CPU и RAM.',
    image: '/images/pc-motherboard.webp',
    imgClass: 'object-contain bg-gradient-to-br from-slate-100 to-slate-200',
  },
  {
    Icon: HardDrive,
    title: 'SSD и HDD накопители',
    text: 'NVMe и SATA SSD до 8 ТБ, серверные и десктопные HDD Seagate, WD. Резервное копирование «под ключ».',
    image: '/images/pc-ssd.avif',
    imgClass: 'object-cover',
  },
  {
    Icon: Monitor,
    title: 'Мониторы',
    text: 'Офисные и профессиональные мониторы BenQ, Acer, Lenovo, Dell. Диагонали 22"–34", IPS, 4K, изогнутые.',
    image: '/images/pc-monitor.webp',
    imgClass: 'object-cover',
  },
  {
    Icon: MemoryStick,
    title: 'Видеокарты и оперативная память',
    text: 'GPU NVIDIA и AMD для офиса, дизайнеров и инженеров. DDR4/DDR5 от Kingston, Crucial, Corsair.',
    image: '/images/pc-videocard.avif',
    imgClass: 'object-cover',
  },
];

const BRANDS = ['Intel', 'AMD', 'ASUS', 'Gigabyte', 'MSI', 'Acer', 'Lenovo', 'BenQ', 'Dell', 'Seagate', 'Kingston', 'Crucial'];

const WHY_US = [
  {
    Icon: TrendingDown,
    title: 'Конкурентные цены',
    text: 'Прямые поставки от производителей без посредников. Акции и скидки для постоянных клиентов.',
  },
  {
    Icon: Boxes,
    title: 'Широкий ассортимент',
    text: 'Более 5 000 позиций на складе. Чего нет — привезём под заказ в кратчайшие сроки.',
  },
  {
    Icon: ShieldCheck,
    title: 'Гарантийное обслуживание',
    text: 'Полная гарантия производителя и собственное послегарантийное обслуживание.',
  },
  {
    Icon: Users,
    title: 'Подбор от инженеров',
    text: 'Наши IT-специалисты помогут собрать конфигурацию под задачи и бюджет.',
  },
  {
    Icon: Truck,
    title: 'Доставка по России',
    text: 'Доставка в любой регион РФ. Чёткое соблюдение сроков поставки.',
  },
  {
    Icon: Receipt,
    title: 'Отсрочка платежа',
    text: 'Индивидуальные условия для юрлиц и ИП. Личный менеджер и закрывающие документы.',
  },
  {
    Icon: Package,
    title: 'Любой масштаб заказа',
    text: 'От единичных позиций до крупных оптовых поставок — точно в срок.',
  },
  {
    Icon: Wrench,
    title: 'Модернизация и апгрейд',
    text: 'Диагностируем имеющуюся технику и подберём комплектующие для апгрейда.',
  },
];

const SERVICES = [
  {
    Icon: Search,
    title: 'Диагностика оборудования',
    text: 'Бесплатная оценка состояния вашей техники и рекомендации по модернизации.',
  },
  {
    Icon: Settings,
    title: 'Установка и настройка',
    text: 'Подключение и конфигурация компьютеров под вашу сеть и рабочие задачи.',
  },
  {
    Icon: Headphones,
    title: 'Сервисное обслуживание',
    text: 'Регулярное ТО, ремонт и замена износившихся компонентов.',
  },
];

const ComputersAndParts = () => {
  const { open: openRepairModal } = useRepairRequestModal();

  const requestWithGoal = (source) => () => {
    trackGoal('computers_request_click', { source });
    openRepairModal();
  };

  useEffect(() => {
    trackGoal('computers_page_view');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <Helmet>
        <title>Компьютеры и комплектующие в Москве — продажа и подбор | ComplexPrint</title>
        <meta
          name="description"
          content="Продажа компьютеров, комплектующих и периферии в Москве. Системные блоки, моноблоки, процессоры Intel/AMD, материнские платы, SSD, мониторы, видеокарты. Гарантия, доставка по РФ, отсрочка платежа для юрлиц."
        />
        <link rel="canonical" href="https://complexprint.ru/komputery-i-komplektuyushchie" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Продажа компьютеров и комплектующих',
          provider: { '@type': 'Organization', name: 'ComplexPrint' },
          areaServed: { '@type': 'Country', name: 'Россия' },
          description: 'Продажа компьютеров, моноблоков, процессоров, материнских плат, SSD/HDD, мониторов, видеокарт и оперативной памяти в Москве и по России.',
        })}</script>
      </Helmet>

      <Header />

      <main className="pt-28 lg:pt-32">
        {/* ────── HERO ────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 pb-8">
            <Breadcrumbs items={[{ name: 'Компьютеры и комплектующие' }]} />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-2 pb-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[13px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  5 000+ позиций на складе
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Компьютеры и
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block mt-1">
                    комплектующие
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 block mt-2">
                    продажа в Москве и по России
                  </span>
                </h1>

                <p className="text-[16px] lg:text-[17px] text-slate-600 leading-relaxed max-w-xl">
                  Системные блоки, моноблоки, процессоры Intel и AMD, материнские платы,
                  SSD/HDD, мониторы, видеокарты и оперативная память. Подбор инженером,
                  доставка по РФ, гарантия производителя и <strong>отсрочка платежа</strong> для юрлиц.
                </p>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">5 000+</div>
                    <p className="text-[12px] text-slate-500">позиций на складе</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">15+</div>
                    <p className="text-[12px] text-slate-500">лет на рынке</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">РФ</div>
                    <p className="text-[12px] text-slate-500">доставка</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">B2B</div>
                    <p className="text-[12px] text-slate-500">отсрочка платежа</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    onClick={requestWithGoal('hero')}
                    data-testid="computers-hero-cta-request"
                    className="w-full sm:w-auto sm:min-w-[240px] h-14 justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 rounded-full text-[16px] font-semibold shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    Подобрать технику
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="#categories"
                    data-testid="computers-hero-scroll-categories"
                    className="w-full sm:w-auto sm:min-w-[240px] h-14 inline-flex items-center justify-center border-2 border-blue-200 text-blue-600 hover:bg-blue-50/50 hover:border-blue-300 px-8 rounded-full text-[16px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Каталог категорий
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] border border-slate-100">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="group bg-gradient-to-br from-blue-50 to-cyan-50/40 rounded-2xl p-5 border border-blue-100/60 hover:-translate-y-1 transition-transform duration-300">
                      <Server size={28} className="text-blue-600 mb-3" />
                      <div className="text-[15px] font-bold text-slate-900">Системные блоки</div>
                      <div className="text-[12px] text-slate-500 mt-1">офис · графика · сервер</div>
                    </div>
                    <div className="group bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-2xl p-5 border border-emerald-100/60 hover:-translate-y-1 transition-transform duration-300">
                      <Cpu size={28} className="text-emerald-600 mb-3" />
                      <div className="text-[15px] font-bold text-slate-900">Процессоры</div>
                      <div className="text-[12px] text-slate-500 mt-1">Intel · AMD · Xeon · Ryzen</div>
                    </div>
                    <div className="group bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-2xl p-5 border border-amber-100/60 hover:-translate-y-1 transition-transform duration-300">
                      <Monitor size={28} className="text-amber-600 mb-3" />
                      <div className="text-[15px] font-bold text-slate-900">Мониторы</div>
                      <div className="text-[12px] text-slate-500 mt-1">22&quot;–34&quot; · IPS · 4K</div>
                    </div>
                    <div className="group bg-gradient-to-br from-violet-50 to-purple-50/40 rounded-2xl p-5 border border-violet-100/60 hover:-translate-y-1 transition-transform duration-300">
                      <HardDrive size={28} className="text-violet-600 mb-3" />
                      <div className="text-[15px] font-bold text-slate-900">SSD / HDD</div>
                      <div className="text-[12px] text-slate-500 mt-1">NVMe · SATA · до 8 ТБ</div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-2xl shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)]">
                    <div className="text-center">
                      <div className="text-[11px] font-medium opacity-90">Подбор</div>
                      <div className="text-lg font-bold leading-tight">бесплатно</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-[0_12px_40px_-12px_rgba(2,6,23,0.18)] border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                        <ShieldCheck size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-[14px]">Гарантия производителя</div>
                        <div className="text-[12px] text-slate-500">+ наше сервисное ТО</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────── CATEGORIES ────── */}
        <section id="categories" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[13px] font-semibold mb-4">
                Что мы продаём
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Категории техники
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">
                От готовых сборок до отдельных комплектующих под апгрейд
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map(({ Icon, title, text, image, imgClass }) => (
                <div
                  key={title}
                  data-testid={`category-card-${title}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {image ? (
                    <div className="relative h-48 overflow-hidden bg-slate-50">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full ${imgClass || 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center">
                      <Icon size={64} className="text-white/95 drop-shadow-lg" strokeWidth={1.4} />
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-200/20 rounded-full blur-2xl" />
                    </div>
                  )}
                  <div className="p-7 flex-1 flex flex-col">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
                    <p className="text-[14px] text-slate-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────── BRANDS ────── */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/60 text-cyan-700 text-[13px] font-semibold mb-4">
                Бренды
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                С кем мы работаем
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">
                Официальные поставщики и авторизованные дилеры
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold text-[14px] hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ────── WHY US ────── */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[13px] font-semibold mb-4">
                Почему ComplexPrint
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Почему выбирают нас
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">Более 15 лет на рынке IT-технологий</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY_US.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-[16px]">{title}</h4>
                  <p className="text-[13.5px] text-slate-600 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────── EXTRA SERVICES ────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[13px] font-semibold mb-4">
                Дополнительные услуги
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Комплексный подход
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">
                Не только продаём, но и обслуживаем
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {SERVICES.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-7 border-l-4 border-blue-500 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-[16px]">{title}</h4>
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────── B2B BLOCK ────── */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.08)] max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[12px] font-semibold mb-4">
                    Для бизнеса
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Оптовые поставки и B2B-условия
                  </h3>
                  <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
                    Работаем с юрлицами и ИП по безналу. Закрывающие документы,
                    отсрочка платежа, личный менеджер и индивидуальные цены при
                    больших объёмах.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    'Договор поставки и закрывающие документы',
                    'Отсрочка платежа до 30 дней',
                    'Персональный менеджер',
                    'Скидки от объёма заказа',
                    'НДС в счёте-фактуре',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check size={12} className="text-emerald-600" strokeWidth={3} />
                      </span>
                      <span className="text-[14.5px] text-slate-700">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ────── CTA ────── */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-8 py-14 lg:px-16 lg:py-20 text-center shadow-[0_30px_80px_-20px_rgba(37,99,235,0.5)]">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Нужна консультация по подбору техники?
                </h2>
                <p className="text-blue-50/90 mt-4 text-[17px] leading-relaxed">
                  Оставьте заявку — специалист перезвонит в течение 15 минут и подберёт оптимальное решение под ваш бюджет и задачи.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    onClick={requestWithGoal('final-cta')}
                    data-testid="computers-final-cta-request"
                    className="w-full sm:w-auto sm:min-w-[260px] h-14 justify-center bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 px-8 rounded-full text-[16px] font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    Получить консультацию
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="tel:+79911857289"
                    data-testid="computers-final-cta-phone"
                    className="w-full sm:w-auto sm:min-w-[260px] h-14 inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 px-8 rounded-full text-[16px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone size={18} />
                    +7 (991) 185-72-89
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-blue-50/80 text-[14px]">
                  <a
                    href="https://wa.me/79911857289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <span className="text-blue-200/40">•</span>
                  <a
                    href="mailto:info@complexprint.ru"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    info@complexprint.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComputersAndParts;
