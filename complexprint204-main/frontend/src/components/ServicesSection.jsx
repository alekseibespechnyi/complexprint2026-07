import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, Shield, Wrench, Star, ArrowRight, Zap, HeartHandshake, Printer, BarChart3, FileDigit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useRepairRequestModal } from './RepairRequestModal';

const ServicesSection = () => {
  const { open: openRepairModal } = useRepairRequestModal();

  const services = [
    {
      id: 1,
      title: "Комплексное абонентское обслуживание",
      description: "Экономьте до 40–60%. Ежемесячное или ежеквартальное профилактическое обслуживание, обеспечивающее долгосрочную работу вашего офисного оборудования.",
      learnMoreUrl: "/abonentskoe-obsluzhivanie",
      learnMoreText: "Подробнее об абонентском обслуживании",
      price: "От 1500₽/месяц",
      popular: true,
      features: [
        "Регулярное профилактическое обслуживание",
        "Неограниченное время ремонта до решения проблемы", 
        "Гарантированное обслуживание и запчасти",
        "Гибкое планирование под ваш рабочий график",
        "Приоритетная поддержка",
        "Рекомендации по оптимизации оборудования"
      ],
      icon: HeartHandshake,
      color: "from-blue-600 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      title: "Разовый ремонт",
      description: "Профессиональная услуга ремонта для решения немедленных проблем с оборудованием с гарантийным покрытием.",
      learnMoreUrl: "/razovyy-remont",
      learnMoreText: "Подробнее о разовом ремонте",
      price: "От 3000₽/выезд",
      popular: false,
      features: [
        "Быстрая профессиональная диагностика",
        "Экспертный ремонт с оригинальными деталями",
        "Гарантия на обслуживание включена",
        "Возможность обслуживания в день обращения",
        "Прозрачное ценообразование",
        "Контроль качества после ремонта"
      ],
      icon: Wrench,
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50"
    },
    {
      id: 3,
      title: "Аутсорсинг печати (MPS)",
      description: "Сократите затраты на печать до 30–50%. Полный контроль и оптимизация печатной инфраструктуры на базе системы управления печатью Принт-Икс (аналог MYQ) — от мониторинга до автоматической отчётности.",
      learnMoreUrl: "/mps-autsorsing-pechati",
      learnMoreText: "Подробнее об MPS обслуживании",
      price: "От 0,55₽/отпечаток",
      popular: false,
      features: [
        "Автоматический учёт всех заданий печати по пользователям и отделам",
        "Правила печати: цветная печать только по утверждению, двусторонняя по умолчанию",
        "Безопасная печать: документ выходит только после авторизации на устройстве",
        "Предиктивное обслуживание: замена расходников до поломки",
        "Детальная аналитика и отчётность для оптимизации бюджета",
        "Интеграция с Active Directory и существующей IT-инфраструктурой"
      ],
      icon: Printer,
      color: "from-indigo-600 to-blue-700",
      bgColor: "from-indigo-50 to-blue-50"
    },
    {
      id: 4,
      title: "Покопийное обслуживание",
      description: "Платите только за фактические отпечатки. Всё остальное — забота провайдера. Идеально для стабильного документооборота.",
      learnMoreUrl: "/pokopiynoe-obsluzhivanie",
      learnMoreText: "Подробнее о покопийном обслуживании",
      price: "От 0,50 ₽/отпечаток",
      popular: false,
      features: [
        "Плата по факту – вы платите только за реально сделанные копии и распечатки, без фиксированных абонентских платежей за простой",
        "Всё включено – стоимость отпечатка уже включает все расходные материалы (тонер/картриджи) и полное сервисное обслуживание",
        "Полный спектр услуг – регулярная профилактика, срочный ремонт, оригинальные запчасти и выезд мастера – за наш счёт",
        "Прозрачный учёт – ежемесячная детализированная отчётность по количеству отпечатков с каждого устройства",
        "Экономия до 40% – вы не переплачиваете за редкое использование техники, оптимизируя бюджет именно под свою загрузку",
        "Приоритетная замена расходников – мы отслеживаем уровень тонера удалённо и привозим новый до того, как он закончится"
      ],
      icon: FileDigit,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Экономически выгодно",
      description: "Абонентское обслуживание стоит меньше множественных разовых вызовов"
    },
    {
      icon: Shield,
      title: "Гарантированное качество",
      description: "Обширный опыт работы с крупными компаниями и сервисными центрами"
    },
    {
      icon: Star,
      title: "Гибкий график",
      description: "Наши техники подстраиваются под ваш рабочий график и доступность"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60 font-semibold px-4 py-1">
            Наши услуги
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Выберите идеальный
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block lg:inline lg:ml-3">
              тарифный план
            </span>
          </h2>
          <p className="text-[17px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Наши абонентские услуги обеспечивают лучшую ценность по сравнению с разовыми вызовами, с неограниченным временем, посвященным решению ваших проблем, и гибким планированием, которое работает в соответствии с вашими рабочими часами.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] hover:-translate-y-2 border-slate-100 h-full flex flex-col ${
                service.popular 
                  ? 'ring-2 ring-blue-500 shadow-[0_12px_40px_-12px_rgba(37,99,235,0.15)]' 
                  : 'hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.08)]'
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-bl-2xl shadow-[0_4px_12px_-4px_rgba(37,99,235,0.4)]">
                    <span className="text-[13px] font-semibold flex items-center gap-1.5">
                      <Zap size={14} className="fill-white" />
                      Самый популярный
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4 pt-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)]`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-[16px] leading-relaxed mt-2">{service.description}</CardDescription>
                  {service.learnMoreUrl && (
                    <Link
                      to={service.learnMoreUrl}
                      className="inline-flex items-center gap-1.5 mt-3 text-blue-600 hover:text-cyan-600 font-semibold transition-colors group/link text-[15px]"
                    >
                      <span className="underline underline-offset-2">{service.learnMoreText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                  <div className="text-3xl font-bold text-slate-900 mt-3">{service.price}</div>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="text-slate-700 text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={openRepairModal}
                    data-testid={`services-cta-${service.id}`}
                    className="w-full py-3 text-[16px] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)]"
                    variant="default"
                  >
                    {service.id === 1 ? 'Оформить абонемент' : 'Заказать ремонт'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.1)] border border-blue-100/50">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;