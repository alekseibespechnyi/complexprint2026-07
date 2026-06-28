import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { printerImages, supportedBrands, equipmentTypes } from '../data/mock';
import { useNavigate } from 'react-router-dom';
import {
  Power,
  Droplets,
  FileWarning,
  Flame,
  ScanLine,
  Zap,
  Printer,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

const EquipmentSection = () => {
  const navigate = useNavigate();

  // Mapping for brand routes
  const brandRoutes = {
    'HP': '/remont-printerov-hp',
    'Canon': '/remont-printerov-canon',
    'Kyocera': '/remont-printerov-kyocera',
    'Ricoh': '/remont-printerov-ricoh'
  };

  const handleCardClick = (brand) => {
    const route = brandRoutes[brand];
    if (route) {
      navigate(route);
    }
  };

  // Частые поломки — аккуратная сетка с иконками
  const commonBreakdowns = [
    { icon: Power, title: 'Не включается / не видит картридж' },
    { icon: Droplets, title: 'Полосы, пятна, бледная печать' },
    { icon: FileWarning, title: 'Замятие бумаги, проблемы с подачей' },
    { icon: Flame, title: 'Ошибки термоузла / печки' },
    { icon: ScanLine, title: 'Не работает дуплекс, сканер' },
    { icon: Zap, title: 'Проблемы с проявкой, лазером' },
  ];

  // Соответствие название бренда → файл логотипа в /brand-logos/
  const brandLogos = {
    'Hewlett Packard (HP)': '/brand-logos/hp.svg',
    'Canon': '/brand-logos/canon.svg',
    'Kyocera': '/brand-logos/kyocera.svg',
    'Konica Minolta': '/brand-logos/konica-minolta.svg',
    'Xerox': '/brand-logos/xerox.svg',
    'Ricoh': '/brand-logos/ricoh.svg',
  };

  return (
    <section id="equipment" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-cyan-400/8 to-blue-400/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60 font-semibold px-4 py-1">
            Оборудование, которое мы обслуживаем
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Ремонт принтеров любых брендов
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block lg:inline lg:ml-3">
              с гарантией качества
            </span>
          </h2>
          <p className="text-[17px] text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Мы чиним любые бренды: ремонт принтеров HP, Canon, Kyocera, Brother, Ricoh и других. Наши инженеры имеют сертификаты и опыт работы в авторизованных сервисных центрах, поэтому гарантируют качественный ремонт.
          </p>
          
          {/* Срочный ремонт - частые поломки */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                Срочный ремонт самых частых поломок
              </h3>
              <p className="text-[15px] text-slate-500 mt-2">Решаем эти проблемы в день обращения</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonBreakdowns.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.25} />
                    </div>
                    <p className="text-left text-[15px] font-semibold text-slate-800 leading-snug">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Кнопка выбора принтера */}
          <div className="text-center">
            <a 
              href="/printer-selection" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-full transform hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)]"
            >
              <Printer className="w-5 h-5" />
              Выбери печатающего помошника
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Equipment Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {printerImages.map((equipment) => (
            <Card 
              key={equipment.id} 
              className="group overflow-hidden border-slate-100 shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.12)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCardClick(equipment.brand)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img loading="lazy" decoding="async" 
                    src={equipment.url}
                    alt={equipment.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-semibold text-lg mb-1">{equipment.brand}</h3>
                    <p className="text-sm opacity-90">{equipment.alt}</p>
                  </div>
                </div>
                <div className="p-4">
                  <Badge className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-100 hover:from-blue-100 hover:to-cyan-100 font-medium">
                    {equipment.brand}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Brands */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Поддерживаемые бренды</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedBrands.map((brand, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 flex flex-col items-center justify-center shadow-[0_4px_20px_-8px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-full h-16 flex items-center justify-center mb-3">
                  {brandLogos[brand] ? (
                    <img
                      src={brandLogos[brand]}
                      alt={`Логотип ${brand}`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-14 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(37,99,235,0.4)]">
                      <span className="text-white font-bold text-lg">{brand.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <p className="font-semibold text-slate-900 text-sm text-center">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Types */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Типы оборудования, которое мы обслуживаем</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {equipmentTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-2xl p-8 text-center hover:shadow-[0_12px_40px_-12px_rgba(2,6,23,0.12)] transition-all duration-300 hover:-translate-y-1 border border-blue-100/50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_8px_24px_-8px_rgba(37,99,235,0.4)]">
                  <Printer className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{type}</h4>
                <p className="text-slate-600 text-[15px]">Профессиональное обслуживание и ремонт</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3 max-w-3xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-[15px] leading-relaxed text-left">
              <strong>Примечание:</strong> Мы не обслуживаем струйные принтеры. Мы специализируемся исключительно на лазерных принтерах и плоттерах для обеспечения высочайшего качества обслуживания.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;