import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/mock';
import CompanyDetailsModal from './CompanyDetailsModal';
import { useNavigate, useLocation } from 'react-router-dom';
import { smartScrollTo } from '../utils/smartScrollTo';
import { useRepairRequestModal } from './RepairRequestModal';

const Footer = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { open: openRepairModal } = useRepairRequestModal();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    smartScrollTo(sectionId);
  };

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Единые стили с Header
  const linkBase = "text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-left flex items-center gap-1 group";
  
  const sectionTitle = "text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-4";

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900" />
      
      {/* Декоративная полоска сверху */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Company Info — 5 колонок */}
          <div className="lg:col-span-5">
            {/* Логотип как в Header */}
            <div className="flex items-center gap-3 mb-6 cursor-pointer group" onClick={() => go('/')}>
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg ring-1 ring-white/40 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-extrabold text-[17px] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                    CP
                  </span>
                  <span className="absolute inset-x-1 top-1 h-2 rounded-md bg-white/30 blur-[1px]" />
                </div>
              </div>
              <div className="leading-tight">
                <h3 className="text-[17px] lg:text-[19px] font-bold text-white tracking-tight">
                  Комплекс<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Принт</span>
                </h3>
                <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide">
                  Профессиональное обслуживание оборудования
                </p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 max-w-md text-[15px] leading-relaxed">
              {companyInfo.description} Доверьтесь нашим опытным техникам, чтобы ваше печатное оборудование работало бесперебойно.
            </p>

            {/* Контакты с иконками в стиле Header */}
            <div className="space-y-3">
              <a href={`tel:${companyInfo.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Phone size={14} className="text-white" />
                </span>
                <span className="text-slate-300 group-hover:text-cyan-300 transition-colors font-medium">{companyInfo.phone}</span>
              </a>
              
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={14} className="text-cyan-400" />
                </span>
                <span className="text-slate-300 group-hover:text-cyan-300 transition-colors">{companyInfo.email}</span>
              </a>
              
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={14} className="text-cyan-400" />
                </span>
                <span className="text-slate-300">{companyInfo.address}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock size={14} className="text-cyan-400" />
                </span>
                <span className="text-slate-300">Пн–Пт 9:00–19:00</span>
              </div>

              {/* Мессенджеры */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-slate-400 text-[13px] mr-1">Мы в мессенджерах:</span>
                <a
                  href="https://wa.me/79911857289"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-emerald-500 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle size={14} className="text-white" />
                </a>
                <a
                  href="https://t.me/complexprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-sky-500 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Send size={14} className="text-white" />
                </a>
                <a
                  href="https://dzen.ru/complexprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Дзен"
                  className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-slate-200 hover:text-white transition-all duration-200"
                >
                  Дзен
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links — 4 колонки */}
          <div className="lg:col-span-4">
            <h4 className={sectionTitle}>Навигация</h4>
            <nav className="space-y-2.5">
              <button onClick={() => scrollToSection('home')} className={linkBase}>
                <span>Главная</span>
              </button>
              <button onClick={() => scrollToSection('services')} className={linkBase}>
                <span>Услуги</span>
              </button>
              <button onClick={() => scrollToSection('equipment')} className={linkBase}>
                <span>Оборудование</span>
              </button>
              <button onClick={() => go('/about-us')} className={linkBase}>
                <span>О нас</span>
              </button>
              <button onClick={() => go('/reviews')} className={linkBase}>
                <span>Отзывы о нас</span>
              </button>
              <button onClick={() => go('/ceny')} className={linkBase}>
                <span>Цены</span>
              </button>
              <button onClick={() => go('/faq')} className={linkBase}>
                <span>FAQ</span>
              </button>
              <button onClick={() => go('/print-defects-guide')} className={linkBase}>
                <span>Справочник дефектов</span>
              </button>
              <button onClick={() => go('/printer-error-guide')} className={linkBase}>
                <span>Гид по ошибкам</span>
              </button>
              <button onClick={() => go('/contacts')} className={linkBase}>
                <span>Контакты</span>
              </button>
              <button onClick={openRepairModal} data-testid="footer-cta-repair-request" className={linkBase + " text-cyan-300 font-medium"}>
                <span>Заявка на ремонт</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </nav>
          </div>

          {/* Brands & Pages — 3 колонки */}
          <div className="lg:col-span-3">
            <h4 className={sectionTitle}>Ремонт брендов</h4>
            <nav className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {[
                { name: 'Xerox', path: '/remont-printerov-xerox' },
                { name: 'HP', path: '/remont-printerov-hp' },
                { name: 'Canon', path: '/remont-printerov-canon' },
                { name: 'Ricoh', path: '/remont-printerov-ricoh' },
                { name: 'Konica Minolta', path: '/remont-printerov-konica-minolta' },
                { name: 'Kyocera', path: '/remont-printerov-kyocera' },
              ].map((brand) => (
                <button
                  key={brand.path}
                  onClick={() => go(brand.path)}
                  className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-left text-[14px] flex items-center gap-1 group"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500/60 group-hover:bg-cyan-400 transition-colors" />
                  {brand.name}
                </button>
              ))}
              <button onClick={() => go('/rayony-moskvy')} className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-left text-[14px] col-span-2 flex items-center gap-1 group">
                <span className="w-1 h-1 rounded-full bg-blue-500/60 group-hover:bg-cyan-400 transition-colors" />
                Районы Москвы
              </button>
            </nav>

            {/* CTA в футере */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 backdrop-blur-sm">
              <p className="text-[13px] text-slate-300 mb-3">Нужна консультация?</p>
              <button
                onClick={() => { openRepairModal(); }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2 rounded-full font-semibold text-[13px] shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Заявка на ремонт
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-slate-400 text-[13px]">
              © 2025 Комплекс Принт. Все права защищены.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <button onClick={() => go('/contacts')} className="text-slate-400 text-[13px] hover:text-cyan-300 transition-colors duration-200 text-left">
                Контакты
              </button>
              <span className="text-slate-400 text-[13px]">Политика конфиденциальности</span>
              <a href="/terms-of-service" className="text-slate-400 text-[13px] hover:text-cyan-300 transition-colors duration-200 text-left">
                Условия обслуживания
              </a>
              <button onClick={() => setIsDetailsModalOpen(true)} className="text-slate-400 text-[13px] hover:text-cyan-300 transition-colors duration-200 text-left">
                Реквизиты компании
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details Modal */}
      <CompanyDetailsModal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} />
    </footer>
  );
};

export default Footer;