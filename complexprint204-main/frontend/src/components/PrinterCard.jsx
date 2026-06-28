import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { getPrinterImage } from '../data/printers';
import logger from '../lib/logger';

const PrinterCard = ({ printer }) => {
  const [imageError, setImageError] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const printerImage = getPrinterImage(printer);

  // Логирование только в dev
  React.useEffect(() => {
    logger.log(`Printer: ${printer.model}, Image URL: ${printerImage}`);
  }, [printer.model, printerImage]);

  const handleBuyClick = () => {
    const subject = `Запрос на покупку: ${printer.model}`;
    const body = `Здравствуйте!

Меня интересует принтер ${printer.model} (${printer.brand}).

Характеристики:
- Модель: ${printer.model}
- Бренд: ${printer.brand}
- Категория: ${printer.category}
${printer.colorSpeed ? `- Скорость цветной печати: ${printer.colorSpeed} стр/мин` : ''}
- Скорость ч/б печати: ${printer.bwSpeed} стр/мин
- Разрешение: ${printer.resolution}
- Назначение: ${printer.purpose}
- Цена: ${printer.price}

Прошу предоставить подробную информацию о возможности покупки и условиях поставки.

С уважением.`;

    const mailtoLink = `mailto:info@complexprint.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
        {/* Изображение принтера */}
        <div 
          className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0 cursor-pointer"
          onClick={() => !imageError && setIsImageModalOpen(true)}
          title="Нажмите для просмотра в полном размере"
        >
          {!imageError ? (
            <img
              src={printerImage}
              alt={printer.model}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                logger.errorSafe(`Failed to load image for ${printer.model}`, e);
                setImageError(true);
              }}
              onLoad={() => {
                logger.log(`Successfully loaded image for ${printer.model}`);
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <span className="text-6xl mb-2 block">🖨️</span>
                <span className="text-xs text-gray-500">{printer.brand}</span>
              </div>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge className="bg-white/90 backdrop-blur-sm text-purple-700 shadow-lg">
              {printer.brand}
            </Badge>
          </div>
          
          {/* Иконка увеличения при наведении */}
          {!imageError && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-purple-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          )}
        </div>

      <CardContent className="p-6 flex flex-col flex-1">
        {/* Заголовок */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {printer.model}
          </h3>
          <span className="text-sm text-gray-500">{printer.category}</span>
        </div>

        {/* Характеристики */}
        <div className="flex-1 space-y-2 mb-4">
          <div className="text-sm text-gray-600">
            <strong>Категория:</strong> {printer.category}
          </div>
          
          {printer.colorSpeed && (
            <div className="text-sm text-gray-600">
              <strong>Цветная печать:</strong> {printer.colorSpeed} стр/мин
            </div>
          )}
          
          <div className="text-sm text-gray-600">
            <strong>Ч/б печать:</strong> {printer.bwSpeed} стр/мин
          </div>
          
          <div className="text-sm text-gray-600">
            <strong>Разрешение:</strong> {printer.resolution}
          </div>
          
          <div className="text-sm text-gray-600">
            <strong>Назначение:</strong> {printer.purpose}
          </div>
          
          {printer.note && (
            <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <strong>Особенности:</strong> {printer.note}
            </div>
          )}
        </div>

        {/* Цена и кнопка */}
        <div className="mt-auto">
          <div className="text-lg font-bold text-purple-600 mb-4">
            {printer.price}
          </div>
          
          <button
            onClick={handleBuyClick}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🛒 Купить
          </button>
        </div>
      </CardContent>
    </Card>

    {/* Модальное окно для просмотра полноразмерного изображения */}
    <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black/95">
        <DialogTitle className="sr-only">
          Полноразмерное изображение: {printer.model}
        </DialogTitle>
        <div className="relative">
          {/* Кнопка закрытия */}
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Закрыть"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Информация о принтере */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-center gap-2">
              <Badge className="bg-purple-600 text-white">
                {printer.brand}
              </Badge>
              <span className="text-sm font-semibold text-gray-800">{printer.model}</span>
            </div>
          </div>

          {/* Полноразмерное изображение */}
          <div className="flex items-center justify-center min-h-[400px] max-h-[85vh] p-8">
            <img 
              src={printerImage}
              alt={printer.model}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Дополнительная информация внизу */}
          <div className="bg-white/95 backdrop-blur-sm p-4 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Категория:</span>
                <p className="text-gray-600">{printer.category}</p>
              </div>
              {printer.colorSpeed && (
                <div>
                  <span className="font-semibold text-gray-700">Цветная печать:</span>
                  <p className="text-gray-600">{printer.colorSpeed} стр/мин</p>
                </div>
              )}
              <div>
                <span className="font-semibold text-gray-700">Ч/б печать:</span>
                <p className="text-gray-600">{printer.bwSpeed} стр/мин</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Разрешение:</span>
                <p className="text-gray-600">{printer.resolution}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default PrinterCard;