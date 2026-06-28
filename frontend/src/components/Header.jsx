import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { smartScrollTo } from '../utils/smartScrollTo';
import { useRepairRequestModal } from './RepairRequestModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { open: openRepairModal } = useRepairRequestModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокируем прокрутку body при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }
    smartScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const target = location.state.scrollTo;
      window.history.replaceState({}, document.title);
      setTimeout(() => smartScrollTo(target), 120);
    }
  }, [location]);

  const goHome = () => {
    navigate('/');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  // Универсальные классы для пунктов меню (десктоп)
  const navItemBase =
    "relative flex items-center gap-1 font-montserrat font-semibold text-[15px] text-slate-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none whitespace-nowrap " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  const dropdownItemCls =
    "cursor-pointer font-montserrat font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 rounded-md transition-colors duration-150";

  return (
    <>
      {/* ================= TOP INFO BAR (только десктоп, скрывается при скролле) ================= */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white transition-[max-height,opacity] duration-300 ease-out ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-[13px]">
            {/* Left: contacts */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+79911857289"
                className="flex items-center gap-2 text-slate-200 hover:text-cyan-300 transition-colors duration-200"
              >
                <Phone size={14} className="text-cyan-400" />
                <span className="font-medium">+7 (991) 185-72-89</span>
              </a>
              <a
                href="mailto:info@complexprint.ru"
                className="hidden xl:flex items-center gap-2 text-slate-200 hover:text-cyan-300 transition-colors duration-200"
              >
                <Mail size={14} className="text-cyan-400" />
                <span>info@complexprint.ru</span>
              </a>
              <div className="hidden xl:flex items-center gap-2 text-slate-300">
                <Clock size={14} className="text-cyan-400" />
                <span>Пн–Пт 9:00–19:00</span>
              </div>
            </div>

            {/* Right: social */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 mr-1">Мы в мессенджерах:</span>
              <a
                href="https://wa.me/+79911857289"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-emerald-500 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={14} className="text-white" />
              </a>
              <a
                href="https://t.me/complexprint_mos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-sky-500 border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Send size={14} className="text-white" />
              </a>
              <a
                href="https://dzen.ru/complexprint"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Дзен"
                className="ml-1 px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-slate-200 hover:text-white transition-all duration-200"
              >
                Дзен
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(2,6,23,0.08)] border-b border-slate-200/60'
            : 'lg:top-10 top-0 bg-white/60 backdrop-blur-md border-b border-white/40'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={goHome}
            >
              <div className="relative">
                {/* Свечение под логотипом */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg ring-1 ring-white/40 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-extrabold text-[17px] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                    CP
                  </span>
                  {/* Глянцевый блик */}
                  <span className="absolute inset-x-1 top-1 h-2 rounded-md bg-white/30 blur-[1px]" />
                </div>
              </div>
              <div className="leading-tight">
                <h1 className="text-[17px] lg:text-[19px] font-bold text-slate-900 tracking-tight">
                  Комплекс<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Принт</span>
                </h1>
                <p className="text-[11px] text-slate-500 hidden xl:block tracking-wide">
                  Профессиональное обслуживание оборудования
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {/* О нас */}
              <DropdownMenu>
                <DropdownMenuTrigger className={navItemBase}>
                  <span>О нас</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl p-1.5 min-w-[200px]">
                  <DropdownMenuItem onClick={() => goToPage('/about-us')} className={dropdownItemCls}>
                    О нас
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/reviews')} className={dropdownItemCls}>
                    Отзывы о нас
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => window.open('https://dzen.ru/complexprint', '_blank', 'noopener')}
                    className={dropdownItemCls}
                  >
                    Наш блог на Дзен
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Справочники */}
              <DropdownMenu>
                <DropdownMenuTrigger className={navItemBase}>
                  <span>Справочники</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl p-1.5 min-w-[220px]">
                  <DropdownMenuItem onClick={() => goToPage('/ceny')} className={dropdownItemCls}>
                    Цены
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/faq')} className={dropdownItemCls}>
                    FAQ
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/print-defects-guide')} className={dropdownItemCls}>
                    Справочник дефектов
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/printer-error-guide')} className={dropdownItemCls}>
                    Гид по Ошибкам
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button onClick={() => scrollToSection('equipment')} className={navItemBase}>
                Оборудование
              </button>

              {/* Услуги */}
              <DropdownMenu>
                <DropdownMenuTrigger className={navItemBase}>
                  <span>Услуги</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl p-1.5 min-w-[230px]">
                  <DropdownMenuItem onClick={() => goToPage('/arenda-kyocera-m2035dn')} className={dropdownItemCls}>
                    Аренда МФУ Kyocera M2035dn
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/komputery-i-komplektuyushchie')} className={dropdownItemCls}>
                    Компьютеры и комплектующие
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/remont-printerov-xerox')} className={dropdownItemCls}>
                    Ремонт Xerox
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/remont-printerov-hp')} className={dropdownItemCls}>
                    Ремонт HP
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/remont-printerov-canon')} className={dropdownItemCls}>
                    Ремонт Canon
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/remont-printerov-ricoh')} className={dropdownItemCls}>
                    Ремонт Ricoh
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/remont-printerov-konica-minolta')} className={dropdownItemCls}>
                    Ремонт Konica Minolta
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goToPage('/remont-printerov-kyocera')} className={dropdownItemCls}>
                    Ремонт Kyocera
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button onClick={() => goToPage('/contacts')} className={navItemBase}>
                Контакты
              </button>
            </nav>

            {/* Right block: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+79911857289"
                className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200"
              >
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <Phone size={14} className="text-white" />
                </span>
                <span className="font-semibold text-[14px] text-slate-800 group-hover:text-blue-700 transition-colors">
                  +7 (991) 185-72-89
                </span>
              </a>

              <Button
                onClick={() => { openRepairModal(); setIsMenuOpen(false); }}
                data-testid="header-cta-repair-request"
                className="relative bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-2 rounded-full font-semibold tracking-tight shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Заявка на ремонт
              </Button>
            </div>

            {/* Mobile: phone icon + Menu Button */}
            <div className="lg:hidden flex items-center gap-1">
              <a
                href="tel:+79911857289"
                aria-label="Позвонить"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
              >
                <Phone size={16} className="text-white" />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 z-50 text-slate-800"
                aria-label="Меню"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Тонкая декоративная полоска снизу */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-16 bottom-0 left-0 right-0 bg-white overflow-y-auto shadow-2xl">
            <nav className="flex flex-col py-2 pb-8">
              {/* CTA сверху */}
              <div className="px-4 pt-3 pb-4 border-b border-slate-100">
                <Button
                  onClick={() => { openRepairModal(); setIsMenuOpen(false); }}
                  data-testid="header-mobile-cta-repair-request"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-2.5 rounded-full font-semibold shadow-md"
                >
                  Заявка на ремонт
                </Button>
                <div className="flex items-center justify-between mt-3 text-sm text-slate-600">
                  <a href="tel:+79911857289" className="flex items-center gap-2 hover:text-blue-600">
                    <Phone size={15} className="text-blue-500" />
                    +7 (991) 185-72-89
                  </a>
                  <div className="flex items-center gap-2">
                    <a href="https://wa.me/79911857289" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm" aria-label="WhatsApp">
                      <MessageCircle size={14} className="text-white" />
                    </a>
                    <a href="https://t.me/complexprint" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center shadow-sm" aria-label="Telegram">
                      <Send size={14} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* О нас */}
              <div className="px-4 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">О нас</div>
              <button onClick={() => goToPage('/about-us')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">О нас</button>
              <button onClick={() => goToPage('/reviews')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Отзывы о нас</button>
              <button onClick={() => { window.open('https://dzen.ru/complexprint', '_blank', 'noopener'); setIsMenuOpen(false); }} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Наш блог на Дзен</button>

              {/* Справочники */}
              <div className="px-4 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Справочники</div>
              <button onClick={() => goToPage('/ceny')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Цены</button>
              <button onClick={() => goToPage('/faq')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">FAQ</button>
              <button onClick={() => goToPage('/print-defects-guide')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Справочник дефектов</button>
              <button onClick={() => goToPage('/printer-error-guide')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Гид по Ошибкам</button>

              <button onClick={() => scrollToSection('equipment')} className="px-4 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Оборудование</button>

              {/* Услуги */}
              <div className="px-4 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Услуги</div>
              <button onClick={() => goToPage('/arenda-kyocera-m2035dn')} className="px-6 py-3 text-left font-montserrat font-semibold text-blue-600 hover:bg-blue-50 transition-colors duration-200">Аренда МФУ Kyocera M2035dn</button>
              <button onClick={() => goToPage('/komputery-i-komplektuyushchie')} className="px-6 py-3 text-left font-montserrat font-semibold text-blue-600 hover:bg-blue-50 transition-colors duration-200">Компьютеры и комплектующие</button>
              <button onClick={() => goToPage('/remont-printerov-xerox')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Ремонт Xerox</button>
              <button onClick={() => goToPage('/remont-printerov-hp')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Ремонт HP</button>
              <button onClick={() => goToPage('/remont-printerov-canon')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Ремонт Canon</button>
              <button onClick={() => goToPage('/remont-printerov-ricoh')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Ремонт Ricoh</button>
              <button onClick={() => goToPage('/remont-printerov-konica-minolta')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Ремонт Konica Minolta</button>
              <button onClick={() => goToPage('/remont-printerov-kyocera')} className="px-6 py-3 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Ремонт Kyocera</button>

              <button onClick={() => goToPage('/contacts')} className="px-4 py-3 mt-1 text-left font-montserrat font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Контакты</button>

              <div className="px-4 py-3 mt-2 border-t border-slate-100 flex items-center gap-3 text-[12px] text-slate-500">
                <Clock size={14} className="text-blue-500" />
                <span>Пн–Пт 9:00–19:00</span>
                <span className="text-slate-300">•</span>
                <Mail size={14} className="text-blue-500" />
                <span>info@complexprint.ru</span>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;