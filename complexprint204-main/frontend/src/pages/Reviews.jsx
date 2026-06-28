import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogClose } from '../components/ui/dialog';
import { X, MessageCircle, Star, Building2, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { useRepairRequestModal } from '../components/RepairRequestModal';

const testimonials = [
  {
    id: 1,
    company: 'Азиатско-Тихоокеанский Банк',
    type: 'Банковский сектор',
    image: '/images/WhatsApp полная переписка Азиатско-Тихоокеанский Банк.jpg',
    description: 'Благодарность за оперативный ремонт принтеров',
    rating: 5,
    textReview: 'Выражаем благодарность компании Комплекс Принт за оперативный и качественный ремонт нашего печатного оборудования. Мастер приехал в день обращения, быстро диагностировал проблему и устранил неисправность. Принтеры работают отлично, время простоя было минимальным. Рекомендуем данный сервисный центр всем организациям, которые ценят качество и скорость обслуживания.',
    author: 'Отдел IT',
    date: '2024'
  },
  {
    id: 2,
    company: 'Криогенмаш',
    type: 'Промышленность',
    image: '/images/WhatsApp полная переписка Криогенмаш.jpg',
    description: 'Полная переписка - техническая поддержка оборудования',
    rating: 5,
    textReview: 'Сотрудничаем с Комплекс Принт уже более 2 лет. За это время они обслуживают весь наш парк печатного оборудования — более 15 принтеров и МФУ различных брендов. Качество работы на высшем уровне: все ремонты выполняются в срок, запчасти оригинальные, гарантия на все работы. Особенно ценим оперативность — на срочные заявки реагируют в течение нескольких часов.',
    author: 'Служба главного инженера',
    date: '2024'
  },
  {
    id: 3,
    company: 'Криогенмаш',
    type: 'Промышленность',
    image: '/images/Скриншот Криогенмаш.jpg',
    description: 'Благодарственный отзыв за обслуживание',
    rating: 5,
    textReview: 'Благодарим специалистов Комплекс Принт за профессиональный подход к работе. Регулярное техническое обслуживание значительно снизило количество поломок и простоев оборудования. Экономия на ремонтах очевидна. Мастера всегда вежливые, объясняют суть проблемы и дают рекомендации по эксплуатации.',
    author: 'Административный отдел',
    date: '2024'
  },
  {
    id: 4,
    company: 'Альпинтех',
    type: 'Строительство',
    image: '/images/Скриншот Альпинтех.jpg',
    description: 'Отзыв о качественном ремонте',
    rating: 5,
    textReview: 'Обратились в Комплекс Принт с проблемой качества печати на нашем МФУ HP. Мастер быстро определил причину — износ фотобарабана. Замена была произведена на месте, принтер заработал как новый. Цены адекватные, работа выполнена качественно. Теперь обращаемся только к ним.',
    author: 'Офис-менеджер',
    date: '2024'
  },
  {
    id: 5,
    company: 'Коттон-Клаб',
    type: 'Торговля',
    image: '/images/Скриншот Коттон-Клаб.jpg',
    description: 'Благодарность за быстрое обслуживание',
    rating: 5,
    textReview: 'Спасибо Комплекс Принт за оперативную помощь! У нас вышел из строя принтер в самый неподходящий момент — перед сдачей важных документов. Позвонили, и уже через 2 часа мастер был на месте. Проблема решена, документы напечатаны в срок. Очень выручили!',
    author: 'Бухгалтерия',
    date: '2024'
  },
  {
    id: 6,
    company: 'Соколов',
    type: 'Ювелирная сеть',
    image: '/images/Скриншот Соколов.jpg',
    description: 'Положительный отзыв о сервисе',
    rating: 5,
    textReview: 'Наша ювелирная сеть работает с Комплекс Принт по договору абонентского обслуживания. Это очень удобно — фиксированная ежемесячная плата, а все ремонты и профилактика включены. За год сэкономили значительную сумму по сравнению с разовыми ремонтами. Рекомендуем!',
    author: 'IT-служба',
    date: '2024'
  }
];

const Reviews = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { open: openRepairModal } = useRepairRequestModal();

  const openModal = (testimonial, index) => {
    setSelectedImage(testimonial);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % testimonials.length 
      : (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    setSelectedImage(testimonials[newIndex]);
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Helmet>
        <title>Отзывы клиентов | Комплекс Принт — Ремонт принтеров в Москве</title>
        <meta name="description" content="Отзывы клиентов о ремонте принтеров в сервисном центре Комплекс Принт. Реальные отзывы от крупных компаний: Криогенмаш, Азиатско-Тихоокеанский Банк, Соколов и других. Рейтинг 4.9 из 5." />
        <link rel="canonical" href="https://complexprint.ru/reviews" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="отзывы ремонт принтеров, отзывы Комплекс Принт, сервис принтеров Москва отзывы, ремонт МФУ отзывы" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { name: 'Главная', url: '/' },
            { name: 'Отзывы', url: '/reviews' }
          ]} />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              Реальные отзывы
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Отзывы наших
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
                клиентов
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Реальные отзывы от наших клиентов — крупных российских компаний. 
              Мы ценим доверие каждого клиента и гордимся результатами нашей работы.
              Ниже представлены скриншоты благодарностей из WhatsApp и текстовые версии отзывов.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">4.9</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">99%</div>
              <div className="text-gray-600">Рекомендуют нас</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">10+</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div 
                      className="relative cursor-pointer group lg:col-span-1"
                      onClick={() => openModal(testimonial, index)}
                    >
                      <div className="h-64 lg:h-full min-h-[300px] overflow-hidden bg-gray-100">
                        <img loading="lazy" decoding="async" 
                          src={testimonial.image} 
                          alt={`Отзыв от ${testimonial.company} - скриншот WhatsApp переписки`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400"><span class="text-6xl">💬</span></div>';
                          }}
                        />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-semibold flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          Открыть скриншот
                        </span>
                      </div>

                      {/* WhatsApp badge */}
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <MessageCircle className="w-3 h-3" />
                        WhatsApp
                      </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.company.charAt(0)}
                          </div>
                          <div>
                            <h2 className="font-bold text-xl text-gray-900">{testimonial.company}</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Building2 className="w-4 h-4" />
                              {testimonial.type}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex">{renderStars(testimonial.rating)}</div>
                          <span className="text-sm text-gray-400 mt-1">{testimonial.date}</span>
                        </div>
                      </div>

                      {/* Text Review */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200" />
                        <p className="text-gray-700 leading-relaxed pl-6 text-base lg:text-lg">
                          {testimonial.textReview}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Подтвержденный отзыв</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{testimonial.author}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Станьте нашим следующим довольным клиентом!</h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Оставьте заявку прямо сейчас и убедитесь в качестве нашей работы. 
                Бесплатная диагностика при ремонте!
              </p>
              <Button 
                onClick={openRepairModal}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg"
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for full image */}
      <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-0">
          <DialogTitle className="sr-only">
            {selectedImage ? `Отзыв от ${selectedImage.company}` : 'Просмотр отзыва'}
          </DialogTitle>
          
          {selectedImage && (
            <div className="relative">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {selectedImage.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{selectedImage.company}</h3>
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {selectedImage.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500 text-white">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    WhatsApp
                  </Badge>
                  <DialogClose className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                    <X className="w-6 h-6" />
                  </DialogClose>
                </div>
              </div>

              {/* Navigation buttons */}
              <button 
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="flex items-center justify-center p-4 pt-20 pb-16 max-h-[95vh] overflow-auto">
                <img loading="lazy" decoding="async" 
                  src={selectedImage.image} 
                  alt={`Отзыв от ${selectedImage.company}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
                <p className="text-white/80 text-sm">{selectedImage.description}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  {currentIndex + 1} / {testimonials.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Reviews;
