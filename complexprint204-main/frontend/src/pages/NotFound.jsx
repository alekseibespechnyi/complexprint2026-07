import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { companyInfo } from '../data/mock';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Helmet>
        <title>Страница не найдена (404) | Комплекс Принт</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Запрашиваемая страница не найдена. Вернитесь на главную или свяжитесь с нами для ремонта принтеров в Москве." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-9xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                404
              </span>
            </div>

            {/* Message */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Страница не найдена
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              К сожалению, запрашиваемая страница не существует или была перемещена. 
              Возможно, вы перешли по устаревшей ссылке.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Button>
              <Button 
                onClick={() => navigate(-1)}
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Назад
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Возможно, вы искали:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <a 
                  href="/"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <Home className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Главная страница</span>
                </a>
                <a 
                  href="/ceny"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <Search className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Цены на ремонт</span>
                </a>
                <a 
                  href="/contacts"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Контакты</span>
                </a>
                <a 
                  href="/reviews"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <span className="text-pink-500">⭐</span>
                  <span className="text-gray-700">Отзывы клиентов</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-2">Нужна помощь? Свяжитесь с нами:</p>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-xl font-bold text-pink-600 hover:text-pink-700"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
