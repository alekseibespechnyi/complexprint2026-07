import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
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

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={goHome}>
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Комплекс Принт</h1>
                <p className="text-xs text-gray-500 hidden xl:block">Профессиональное обслуживание оборудования</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {/* Выпадающее меню "Услуги" */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 font-montserrat font-bold text-purple-900 hover:text-pink-600 transition-colors duration-200 focus:outline-none whitespace-nowrap">
                  <span>Услуги</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg">
                  <DropdownMenuItem 
                    onClick={() => goToPage('/remont-printerov-xerox')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Ремонт Xerox
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/remont-printerov-hp')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Ремонт HP
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/remont-printerov-canon')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Ремонт Canon
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/remont-printerov-ricoh')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Ремонт Ricoh
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/remont-printerov-konica-minolta')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Ремонт Konica Minolta
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/remont-printerov-kyocera')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Ремонт Kyocera
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <button onClick={() => scrollToSection('equipment')} className="font-montserrat font-bold text-purple-900 hover:text-pink-600 transition-colors duration-200 whitespace-nowrap">Оборудование</button>
              
              {/* Выпадающее меню "О нас" */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 font-montserrat font-bold text-purple-900 hover:text-pink-600 transition-colors duration-200 focus:outline-none whitespace-nowrap">
                  <span>О нас</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg">
                  <DropdownMenuItem 
                    onClick={() => goToPage('/about-us')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    О нас
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/reviews')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Отзывы о нас
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => window.open('https://dzen.ru/complexprint', '_blank', 'noopener')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Наш блог на Дзен
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Выпадающее меню "Справочники" */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 font-montserrat font-bold text-purple-900 hover:text-pink-600 transition-colors duration-200 focus:outline-none whitespace-nowrap">
                  <span>Справочники</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg">
                  <DropdownMenuItem 
                    onClick={() => goToPage('/ceny')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Цены
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/faq')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    FAQ
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => goToPage('/print-defects-guide')}
                    className="cursor-pointer font-montserrat font-semibold text-purple-900 hover:bg-pink-50 hover:text-pink-600"
                  >
                    Справочник дефектов
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Контакты ведет на страницу контактов */}
              <button onClick={() => goToPage('/contacts')} className="font-montserrat font-bold text-purple-900 hover:text-pink-600 transition-colors duration-200 whitespace-nowrap">Контакты</button>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone size={16} className="text-pink-500" />
                <span>+79911857289</span>
              </div>
              <Button 
                onClick={() => scrollToSection('repair-request')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Заявка на ремонт
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-50">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - ВЫНЕСЕНА ЗА ПРЕДЕЛЫ HEADER */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Затемнённый фон */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Меню */}
          <div className="absolute top-16 bottom-0 left-0 right-0 bg-white overflow-y-auto">
            <nav className="flex flex-col py-2 pb-8">
              {/* Группа "Услуги" в мобильном меню */}
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Услуги</div>
              <button onClick={() => goToPage('/remont-printerov-xerox')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Ремонт Xerox</button>
              <button onClick={() => goToPage('/remont-printerov-hp')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Ремонт HP</button>
              <button onClick={() => goToPage('/remont-printerov-canon')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Ремонт Canon</button>
              <button onClick={() => goToPage('/remont-printerov-konica-minolta')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Ремонт Konica Minolta</button>
              <button onClick={() => goToPage('/remont-printerov-kyocera')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Ремонт Kyocera</button>
              
              <button onClick={() => scrollToSection('equipment')} className="px-4 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Оборудование</button>
              
              {/* Группа "О нас" в мобильном меню */}
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">О нас</div>
              <button onClick={() => goToPage('/about-us')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">О нас</button>
              <button onClick={() => goToPage('/reviews')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Отзывы о нас</button>
              <button onClick={() => { window.open('https://dzen.ru/complexprint', '_blank', 'noopener'); setIsMenuOpen(false); }} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Наш блог на Дзен</button>
              
              {/* Группа "Справочники" в мобильном меню */}
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Справочники</div>
              <button onClick={() => goToPage('/ceny')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Цены</button>
              <button onClick={() => goToPage('/faq')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">FAQ</button>
              <button onClick={() => goToPage('/print-defects-guide')} className="px-6 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Справочник дефектов</button>
              
              <button onClick={() => goToPage('/contacts')} className="px-4 py-3 text-left font-montserrat font-bold text-purple-900 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Контакты</button>
              <div className="px-4 py-3 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone size={16} className="text-pink-500" />
                  <span>+79911857289</span>
                </div>
                <Button onClick={() => scrollToSection('repair-request')} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2 rounded-full transition-all duration-300">Заявка на ремонт</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;