import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Printer,
  FileText,
  Copy,
  ScanLine,
  HardDrive,
  Wifi,
  RefreshCw,
  Leaf,
  Calendar,
  CreditCard,
  Truck,
  Wrench,
  FileSignature,
  Building2,
  Zap,
  ShieldCheck,
  PiggyBank,
  Headphones,
  Settings,
  Award,
  Check,
  X as XIcon,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import { Button } from '../components/ui/button';
import { useRepairRequestModal } from '../components/RepairRequestModal';

const PLANS = [
  {
    id: 'device-only',
    title: 'Только аппарат',
    desc: 'Для тех, у кого есть свой сервис',
    oldPrice: '2 500 ₽/мес.',
    price: '2 000',
    unit: '₽/мес.',
    accent: 'from-slate-500 to-slate-700',
    popular: false,
    features: [
      { ok: true, text: 'МФУ Kyocera ECOSYS M2035dn' },
      { ok: true, text: 'Доставка и установка' },
      { ok: true, text: 'Настройка под сеть' },
      { ok: true, text: 'Гарантия 12 месяцев' },
      { ok: false, text: 'Картриджи не включены' },
      { ok: false, text: 'Обслуживание и ремонт — за счёт арендатора' },
      { ok: false, text: 'Техническая поддержка — платно' },
    ],
  },
  {
    id: 'all-inclusive',
    title: 'Всё включено',
    desc: 'Полный спектр услуг — никаких забот',
    oldPrice: '4 500 ₽/мес.',
    price: '3 500',
    unit: '₽/мес.',
    accent: 'from-blue-600 to-cyan-500',
    popular: true,
    features: [
      { ok: true, text: 'МФУ Kyocera ECOSYS M2035dn' },
      { ok: true, text: 'Доставка и установка бесплатно' },
      { ok: true, text: 'Настройка под сеть и Wi-Fi' },
      { ok: true, text: 'Картриджи включены (до 7 200 стр./мес.)' },
      { ok: true, text: 'Техническое обслуживание' },
      { ok: true, text: 'Ремонт и замена деталей' },
      { ok: true, text: 'Подменный аппарат при поломке (24 ч)' },
      { ok: true, text: 'Техническая поддержка 24/7' },
    ],
  },
  {
    id: 'per-copy',
    title: 'Покопийная аренда',
    desc: 'Платите только за то, что печатаете',
    oldPrice: '2 000 ₽ + 1 ₽/стр.',
    price: '1 500',
    unit: '₽/мес. + 0,6 ₽/стр.',
    accent: 'from-emerald-500 to-teal-500',
    popular: false,
    features: [
      { ok: true, text: 'МФУ Kyocera ECOSYS M2035dn' },
      { ok: true, text: 'Доставка и установка бесплатно' },
      { ok: true, text: 'Настройка под сеть' },
      { ok: true, text: 'Картриджи — по факту печати' },
      { ok: true, text: 'Техническое обслуживание' },
      { ok: true, text: 'Ремонт и замена деталей' },
      { ok: true, text: 'Подменный аппарат при поломке' },
      { ok: true, text: 'Ежемесячный отчёт о печати' },
    ],
  },
];

const SPECS = [
  { Icon: Printer, title: 'Печать', text: 'Лазерная, ч/б, 1200×1200 dpi, скорость 35 стр./мин' },
  { Icon: FileText, title: 'Форматы', text: 'A4, A5, B5, Letter, Legal. Автоподатчик на 50 листов' },
  { Icon: Copy, title: 'Копирование', text: 'До 999 копий, масштабирование 25–400%, режимы экспозиции' },
  { Icon: ScanLine, title: 'Сканирование', text: 'Цветное, 600 dpi, 35 стр./мин (ч/б), 14 стр./мин (цвет)' },
  { Icon: HardDrive, title: 'Память', text: '512 МБ стандартно, поддержка USB-флешек' },
  { Icon: Wifi, title: 'Сеть', text: 'Ethernet, Wi-Fi (опционально), скан на e-mail/FTP' },
  { Icon: RefreshCw, title: 'Дуплекс', text: 'Автоматическая двусторонняя печать и копирование' },
  { Icon: Leaf, title: 'Экологичность', text: 'Energy Star, Blue Angel, силиконовый барабан' },
];

const TERMS = [
  { Icon: Calendar, title: 'Минимальный срок', text: 'От 1 месяца для юрлиц и ИП. От 3 месяцев — скидка 10%.' },
  { Icon: CreditCard, title: 'Оплата', text: 'Безналичный расчёт для юрлиц. Предоплата за 1 месяц.' },
  { Icon: Truck, title: 'Доставка', text: 'Бесплатно в пределах МКАД. За МКАД — от 500 ₽.' },
  { Icon: Wrench, title: 'Гарантия', text: 'Подмена при поломке в течение 24 часов.' },
  { Icon: FileSignature, title: 'Договор', text: 'Официальный договор аренды и акты приёма-передачи.' },
  { Icon: Building2, title: 'Объёмные скидки', text: 'От 5 шт. — 5%, от 10 шт. — 10%, от 20 шт. — 15%.' },
];

const BENEFITS = [
  { Icon: Zap, title: 'Быстрая доставка', text: 'Доставим и настроим оборудование в день заявки. Работаем по всей Москве и области.' },
  { Icon: Settings, title: 'Собственный сервис', text: 'Штатные инженеры, запчасти и картриджи всегда в наличии. Ремонт не дольше 1 дня.' },
  { Icon: PiggyBank, title: 'Прозрачные цены', text: 'Никаких скрытых платежей. Все условия прописаны в договоре.' },
  { Icon: Headphones, title: 'Поддержка 24/7', text: 'Техническая консультация по телефону и удалённая диагностика.' },
  { Icon: RefreshCw, title: 'Гибкие условия', text: 'Возможность смены тарифа и досрочного расторжения по согласованию.' },
  { Icon: Award, title: 'Проверенное оборудование', text: 'Все аппараты прошли полное ТО, заменены износившиеся детали.' },
];

const KyoceraRental = () => {
  const { open: openRepairModal } = useRepairRequestModal();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      <Helmet>
        <title>Аренда МФУ Kyocera ECOSYS M2035dn в Москве — от 1 500 ₽/мес | ComplexPrint</title>
        <meta
          name="description"
          content="Аренда МФУ Kyocera ECOSYS M2035dn в Москве с обслуживанием и без. 3 тарифа: только аппарат от 2 000 ₽/мес, всё включено 3 500 ₽/мес, покопийная аренда от 1 500 ₽/мес + 0,6 ₽/стр. Доставка, установка, картриджи, ремонт. Осталось 40 штук."
        />
        <link rel="canonical" href="https://complexprint.ru/arenda-kyocera-m2035dn" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Аренда МФУ Kyocera ECOSYS M2035dn',
          description: 'Аренда многофункционального устройства Kyocera ECOSYS M2035dn в Москве с обслуживанием и без.',
          brand: { '@type': 'Brand', name: 'Kyocera' },
          image: 'https://complexprint.ru/images/Kyocera-ECOSYS-M2035dn.webp',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '1500',
            highPrice: '4500',
            priceCurrency: 'RUB',
            availability: 'https://schema.org/InStock',
            offerCount: '40',
          },
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
            <Breadcrumbs items={[{ name: 'Аренда Kyocera M2035dn' }]} />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-2 pb-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-red-700 text-[13px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Осталось 40 штук — успейте забронировать
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Аренда МФУ
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block mt-1">
                    Kyocera ECOSYS M2035dn
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 block mt-2">
                    в Москве — от 1 500 ₽/мес.
                  </span>
                </h1>

                <p className="text-[16px] lg:text-[17px] text-slate-600 leading-relaxed max-w-xl">
                  Надёжные лазерные МФУ для офиса. <strong>3 гибких тарифа</strong> — с полным обслуживанием
                  (картриджи + ремонт) или просто аренда аппарата. Доставка по Москве, установка за 2 часа,
                  работаем с юрлицами и ИП по безналу.
                </p>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">35</div>
                    <p className="text-[12px] text-slate-500">стр./мин</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">1200</div>
                    <p className="text-[12px] text-slate-500">dpi печать</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">24ч</div>
                    <p className="text-[12px] text-slate-500">подмена при поломке</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div className="text-center">
                    <div className="flex items-center gap-1 justify-center">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-2xl font-bold text-slate-900">4.9</span>
                    </div>
                    <p className="text-[12px] text-slate-500">рейтинг</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    onClick={openRepairModal}
                    data-testid="rental-hero-cta-request"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-[16px] font-semibold shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    Забронировать сейчас
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="#tariffs"
                    data-testid="rental-hero-scroll-tariffs"
                    className="inline-flex items-center justify-center border-2 border-blue-200 text-blue-600 hover:bg-blue-50/50 hover:border-blue-300 px-8 py-4 rounded-full text-[16px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Смотреть тарифы
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] border border-slate-100">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 p-6">
                    <img
                      src="/images/Kyocera-ECOSYS-M2035dn.webp"
                      alt="МФУ Kyocera ECOSYS M2035dn — аренда в Москве"
                      width="800"
                      height="600"
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto object-contain max-h-[420px] mx-auto"
                    />
                  </div>

                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-rose-500 text-white px-4 py-3 rounded-2xl shadow-[0_8px_24px_-8px_rgba(244,63,94,0.6)]">
                    <div className="text-center">
                      <div className="text-[11px] font-medium opacity-90">Акция</div>
                      <div className="text-lg font-bold leading-tight">−40%</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-[0_12px_40px_-12px_rgba(2,6,23,0.18)] border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                        <ShieldCheck size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-[14px]">Гарантия 12 мес.</div>
                        <div className="text-[12px] text-slate-500">Подмена за 24 часа</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────── TARIFFS ────── */}
        <section id="tariffs" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[13px] font-semibold mb-4">
                3 тарифа на выбор
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Тарифы на аренду
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">
                Выберите подходящий вариант. Все тарифы — без скрытых платежей.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  data-testid={`tariff-card-${plan.id}`}
                  className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? 'border-2 border-blue-500 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.35)]'
                      : 'border border-slate-200 shadow-[0_8px_30px_-8px_rgba(2,6,23,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[12px] font-bold px-4 py-1 rounded-full shadow-md">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                    <p className="text-slate-500 text-[14px] mt-1">{plan.desc}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-slate-400 line-through text-[14px] mb-1">{plan.oldPrice}</div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-5xl font-extrabold bg-gradient-to-r ${plan.accent} bg-clip-text text-transparent`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-slate-600 font-medium text-[15px]">{plan.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {f.ok ? (
                          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Check size={12} className="text-emerald-600" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                            <XIcon size={12} className="text-slate-400" strokeWidth={3} />
                          </span>
                        )}
                        <span className={`text-[14px] ${f.ok ? 'text-slate-700' : 'text-slate-400'}`}>{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openRepairModal}
                    data-testid={`tariff-cta-${plan.id}`}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)]'
                        : 'bg-white border-2 border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700'
                    }`}
                  >
                    Оставить заявку
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────── SPECS ────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/60 text-cyan-700 text-[13px] font-semibold mb-4">
                Технические характеристики
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Kyocera ECOSYS M2035dn
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">Проверенное временем решение для офиса</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SPECS.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
                  <p className="text-[14px] text-slate-600 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────── TERMS ────── */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[13px] font-semibold mb-4">
                Условия аренды
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Прозрачные правила
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">Без подводных камней — всё прописано в договоре</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TERMS.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-7 border-l-4 border-blue-500 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-[16px]">{title}</h4>
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────── BENEFITS ────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[13px] font-semibold mb-4">
                Почему ComplexPrint
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Почему выбирают нас
              </h2>
              <p className="text-slate-600 mt-3 text-[16px]">Сервисный центр с 15-летним опытом</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.25)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
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
                  Готовы сэкономить на печати?
                </h2>
                <p className="text-blue-50/90 mt-4 text-[17px] leading-relaxed">
                  Оставьте заявку — перезвоним в течение 15 минут и подберём оптимальный тариф под ваш офис.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    onClick={openRepairModal}
                    data-testid="rental-final-cta-request"
                    className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 px-8 py-4 rounded-full text-[16px] font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    Оставить заявку
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="tel:+79911857289"
                    data-testid="rental-final-cta-phone"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/20 px-8 py-4 rounded-full text-[16px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
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
                  <span className="text-blue-200/40">•</span>
                  <Link to="/contacts" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                    Все контакты
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KyoceraRental;
