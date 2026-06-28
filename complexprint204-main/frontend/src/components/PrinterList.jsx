import React, { useState } from 'react';
import PrinterCard from './PrinterCard';
import { Badge } from './ui/badge';

const PrinterList = ({ printers, categoryName }) => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  // Получаем уникальные бренды
  const uniqueBrands = [...new Set(printers.map(printer => printer.brand))];

  // Фильтрация по бренду
  const filteredPrinters = selectedBrand === 'all' 
    ? printers 
    : printers.filter(printer => printer.brand === selectedBrand);

  // Сортировка
  const sortedPrinters = [...filteredPrinters].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        // Простая сортировка по числовой части цены
        const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
        const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
        return priceA - priceB;
      case 'speed':
        return (b.bwSpeed || 0) - (a.bwSpeed || 0);
      case 'brand':
        return a.brand.localeCompare(b.brand);
      case 'name':
        return a.model.localeCompare(b.model);
      default:
        return 0;
    }
  });

  if (printers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Принтеры не найдены
        </h3>
        <p className="text-gray-600">
          В категории "{categoryName}" пока нет доступных принтеров.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Фильтры и сортировка */}
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Фильтр по бренду */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Фильтр по бренду:
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBrand('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedBrand === 'all'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Все ({printers.length})
              </button>
              {uniqueBrands.map(brand => {
                const count = printers.filter(p => p.brand === brand).length;
                return (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedBrand === brand
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {brand} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Сортировка */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Сортировать по:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="price">Цене (по возрастанию)</option>
              <option value="speed">Скорости печати (по убыванию)</option>
              <option value="brand">Бренду</option>
              <option value="name">Названию</option>
            </select>
          </div>
        </div>

        {/* Информация о результатах */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Показано {sortedPrinters.length} из {printers.length} принтеров
              {selectedBrand !== 'all' && (
                <Badge className="ml-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700">
                  {selectedBrand}
                </Badge>
              )}
            </div>
            {selectedBrand !== 'all' && (
              <button
                onClick={() => setSelectedBrand('all')}
                className="text-sm text-purple-600 hover:text-purple-800 font-medium"
              >
                Сбросить фильтр
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Сетка принтеров */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPrinters.map(printer => (
          <PrinterCard key={printer.id} printer={printer} />
        ))}
      </div>

      {/* Информация внизу */}
      {sortedPrinters.length > 0 && (
        <div className="mt-12 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-100">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Нужна консультация?
            </h4>
            <p className="text-gray-600 mb-4">
              Наши специалисты помогут выбрать оптимальное решение для ваших задач
            </p>
            <a
              href="tel:+79911857289"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📞 Связаться с нами
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrinterList;