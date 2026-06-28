import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogTitle, DialogClose } from './ui/dialog';
import { X, MessageCircle, Star, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRepairRequestModal } from './RepairRequestModal';

const testimonials = [
  {
    id: 1,
    company: 'Азиатско-Тихоокеанский Банк',
    type: 'Банковский сектор',
    image: '/images/WhatsApp полная переписка Азиатско-Тихоокеанский Банк.jpg',
    description: 'Благодарность за оперативный ремонт принтеров',
    rating: 5
  },
  {
    id: 2,
    company: 'Криогенмаш',
    type: 'Промышленность',
    image: '/images/WhatsApp полная переписка Криогенмаш.jpg',
    description: 'Полная переписка - техническая поддержка оборудования',
    rating: 5
  },
  {
    id: 3,
    company: 'Криогенмаш',
    type: 'Промышленность',
    image: '/images/Скриншот Криогенмаш.jpg',
    description: 'Благодарственный отзыв за обслуживание',
    rating: 5
  },
  {
    id: 4,
    company: 'Альпинтех',
    type: 'Строительство',
    image: '/images/Скриншот Альпинтех.jpg',
    description: 'Отзыв о качественном ремонте',
    rating: 5
  },
  {
    id: 5,
    company: 'Коттон-Клаб',
    type: 'Торговля',
    image: '/images/Скриншот Коттон-Клаб.jpg',
    description: 'Благодарность за быстрое обслуживание',
    rating: 5
  },
  {
    id: 6,
    company: 'Соколов',
    type: 'Ювелирная сеть',
    image: '/images/Скриншот Соколов.jpg',
    description: 'Положительный отзыв о сервисе',
    rating: 5
  }
];

const TestimonialsSection = () => {
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

  const handleScrollToForm = (e) => {
    e.preventDefault();
    openRepairModal();
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
            <MessageCircle className="w-4 h-4 mr-2" />
            Реальные отзывы
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Отзывы наших
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              клиентов
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Скриншоты благодарностей из WhatsApp от наших клиентов — крупных российских компаний. 
            Мы ценим доверие каждого клиента и гордимся результатами нашей работы.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">4.9</div>
            <div className="text-gray-600">Средний рейтинг</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">99%</div>
            <div className="text-gray-600">Рекомендуют нас</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-0"
              onClick={() => openModal(testimonial, index)}
            >
              <div className="relative">
                {/* Image Preview */}
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img loading="lazy" decoding="async" 
                    src={testimonial.image} 
                    alt={`Отзыв от ${testimonial.company}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400"><span class="text-6xl">💬</span></div>';
                    }}
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Открыть полностью
                  </span>
                </div>

                {/* WhatsApp badge */}
                <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.company.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.company}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Building2 className="w-3 h-3" />
                        {testimonial.type}
                      </div>
                    </div>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Станьте нашим следующим довольным клиентом!</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Оставьте заявку прямо сейчас и убедитесь в качестве нашей работы. 
              Бесплатная диагностика при ремонте!
            </p>
            <a 
              href="#repair-request"
              onClick={handleScrollToForm}
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Оставить заявку
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default TestimonialsSection;
