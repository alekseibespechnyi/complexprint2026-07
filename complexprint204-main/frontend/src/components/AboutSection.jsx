import React from 'react';
import { Award, Users, Clock, CheckCircle, ArrowRight, FileText, Search, Wrench, Printer, AlertTriangle, Camera, ZoomIn, Shield, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { repairProcessSteps } from '../data/mock';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Довольных клиентов' },
    { icon: Award, value: '15+', label: 'Лет опыта' },
    { icon: CheckCircle, value: '99%', label: 'Успешных ремонтов' },
    { icon: Clock, value: '24/7', label: 'Доступная поддержка' }
  ];

  const getIconComponent = (iconName) => {
    const icons = {
      FileText: FileText,
      Search: Search,
      Wrench: Wrench,
      CheckCircle: CheckCircle
    };
    return icons[iconName] || Wrench;
  };

  const processIcons = [FileText, Search, Wrench, CheckCircle];

  return (
    <section id="about" className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-white relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60 font-semibold px-4 py-1">
            О ComplexPrint
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Нам доверяют
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block lg:inline lg:ml-3">
              лидеры отрасли
            </span>
          </h2>
          <p className="text-[17px] text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Качество нашего мастерства подтверждается обширным опытом обслуживания крупных компаний и накопленным опытом работы в крупных сервисных центрах. Мы ваш надежный партнер для всех потребностей в обслуживании печатного оборудования.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)]">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-[15px]">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Repair Process */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12 tracking-tight">Наш процесс ремонта</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcessSteps.map((step, index) => {
              const IconComponent = processIcons[index] || Wrench;
              return (
                <Card key={step.id} className="relative overflow-hidden border-slate-100 hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(37,99,235,0.4)]">
                      <span className="text-white font-bold text-[13px]">{step.id}</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 border border-blue-100/50">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Printer Error Guide Link */}
        <div className="mt-16 mb-8">
          <a 
            href="/printer-error-guide"
            className="block bg-white rounded-3xl p-8 lg:p-12 text-center shadow-[0_12px_40px_-12px_rgba(2,6,23,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              Не печатает принтер? Гид по ошибкам...
            </h3>
            <p className="text-[17px] text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Подробные инструкции по устранению самых распространённых ошибок HP, Canon и Kyocera
            </p>
            <span className="inline-flex items-center text-blue-600 font-semibold text-[16px] group-hover:text-cyan-600 transition-colors">
              Открыть полный гид
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
        </div>

        {/* Print Defects Guide Link */}
        <div className="mb-8">
          <a 
            href="/print-defects-guide"
            className="block bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-3xl p-8 lg:p-12 text-center shadow-[0_12px_40px_-12px_rgba(2,6,23,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] transition-all duration-300 hover:-translate-y-2 border border-blue-100/50 group"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-4 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              Справочник дефектов печати
            </h3>
            <p className="text-[17px] text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Визуальный каталог с фотографиями: почему принтер печатает полосами, что делать если осыпается тонер, вертикальные полосы на печати
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <Badge className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 font-medium">Полосы</Badge>
              <Badge className="bg-cyan-500 text-white hover:bg-cyan-600 px-3 py-1 font-medium">Пятна</Badge>
              <Badge className="bg-sky-500 text-white hover:bg-sky-600 px-3 py-1 font-medium">Осыпание тонера</Badge>
              <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 px-3 py-1 font-medium">Грязная печать</Badge>
            </div>
            <span className="inline-flex items-center text-blue-600 font-semibold text-[16px] group-hover:text-cyan-600 transition-colors">
              Открыть справочник с фото
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
        </div>

        {/* Experience Highlight */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-12 text-white text-center shadow-[0_12px_40px_-12px_rgba(37,99,235,0.4)]">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 text-white/90" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Обширный опыт работы в сервисных центрах</h3>
          <p className="text-[17px] opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Наши техники накопили ценный опыт работы в официальных сервисных центрах HP, Ricoh, Canon и Kyocera, обеспечивая ремонт высочайшего качества с использованием оригинальных деталей и проверенных методов.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-[15px] font-semibold backdrop-blur-sm">
              <Zap size={14} className="mr-1.5" />
              Сертификат HP
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-[15px] font-semibold backdrop-blur-sm">
              <Zap size={14} className="mr-1.5" />
              Сертификат Ricoh
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-[15px] font-semibold backdrop-blur-sm">
              <Zap size={14} className="mr-1.5" />
              Сертификат Canon
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-[15px] font-semibold backdrop-blur-sm">
              <Zap size={14} className="mr-1.5" />
              Сертификат Kyocera
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;