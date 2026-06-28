import React from 'react';
import { ArrowRight, Star, Users, Award, Clock, Shield, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { smartScrollTo } from '../utils/smartScrollTo';
import { useRepairRequestModal } from './RepairRequestModal';

const HeroSection = () => {
  const { open: openRepairModal } = useRepairRequestModal();
  const scrollToSection = (sectionId) => {
    smartScrollTo(sectionId);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-12 lg:pb-16">
      {/* Background Elements — синий/циан вместо розового/фиолетового */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/15 to-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[13px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Работаем в Москве и области
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Ремонт принтеров
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block mt-1">
                  с выездом в Москве
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 block mt-2">
                  Обслуживание для офиса
                </span>
              </h1>
              
              <p className="text-[16px] lg:text-[17px] text-slate-600 leading-relaxed max-w-xl">
                Ремонт принтеров с выездом в Москве • Выезд мастера в течение 1–4 часов • Диагностика бесплатно при ремонте • Ремонт на месте в 80–90% случаев • Гарантия от 3 до 12 месяцев • Оригинальные запчасти HP, Canon, Ricoh, Kyocera • <strong className="text-blue-600">Цены от 3000 ₽</strong> за выезд + ремонт.
              </p>
            </div>

            {/* Stats — стилизованы под Header */}
            <div className="flex items-center gap-6 lg:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-sm">
                    <Star size={14} className="text-white fill-white" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">4.9</span>
                </div>
                <p className="text-[13px] text-slate-500">Рейтинг</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm">
                    <Users size={14} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">500+</span>
                </div>
                <p className="text-[13px] text-slate-500">Довольных клиентов</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-sm">
                    <Award size={14} className="text-white" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">15+</span>
                </div>
                <p className="text-[13px] text-slate-500">Лет опыта</p>
              </div>
            </div>

            {/* CTA Buttons — стиль Header */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openRepairModal}
                data-testid="hero-cta-repair-request"
                className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-[16px] font-semibold tracking-tight shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Заказать ремонт сейчас
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50/50 hover:border-blue-300 px-8 py-4 rounded-full text-[16px] font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Узнать больше
              </Button>
            </div>

            {/* Trusted Companies */}
            <div className="pt-6 border-t border-slate-200/60">
              <p className="text-[13px] text-slate-500 mb-3">Нам доверяют ведущие компании:</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 text-[14px] font-semibold">
                <span className="hover:text-slate-600 transition-colors">Связной</span>
                <span className="hover:text-slate-600 transition-colors">Совкомбанк</span>
                <span className="hover:text-slate-600 transition-colors">Burger King</span>
                <span className="hover:text-slate-600 transition-colors">X5 Group</span>
              </div>
            </div>
          </div>

          {/* Right Content - Equipment Image */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-[0_20px_60px_-15px_rgba(2,6,23,0.1)] border border-slate-100">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/hp.jpg"
                  alt="Профессиональное печатное оборудование"
                  fetchpriority="high"
                  decoding="async"
                  width="800"
                  height="600"
                  className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Глянцевый блик на изображении */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Badge 24/7 — стиль Header */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-4 rounded-2xl shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)]">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-[13px] font-medium opacity-90">Поддержка</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements — обновлённые стили */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-[0_12px_40px_-12px_rgba(2,6,23,0.15)] border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-sm">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-[14px]">Быстрая диагностика</div>
                  <div className="text-[13px] text-slate-500">Экспертная оценка</div>
                </div>
              </div>
            </div>

            {/* Дополнительный floating element */}
            <div className="absolute -top-2 -left-2 bg-white rounded-xl p-3 shadow-[0_8px_30px_-8px_rgba(2,6,23,0.12)] border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Wrench size={16} className="text-white" />
                </div>
                <div className="text-[13px] font-semibold text-slate-800">На месте ремонт</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;