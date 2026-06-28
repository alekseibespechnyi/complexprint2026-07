import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PrinterCategoryCard = ({ category, onClick }) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full"
      onClick={onClick}
    >
      <CardContent className="p-8 text-center h-full flex flex-col">
        {/* Иконка */}
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>

        {/* Заголовок */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
          {category.name}
        </h3>

        {/* Описание */}
        <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
          {category.description}
        </p>

        {/* Особенности */}
        <div className="mb-6">
          <div className="grid gap-2">
            {category.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-700">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Рекомендуемые бренды */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Рекомендуемые бренды:</p>
          <div className="flex flex-wrap gap-1 justify-center">
            {category.brands.map((brand, index) => (
              <Badge 
                key={index} 
                className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 hover:from-pink-200 hover:to-purple-200 text-xs"
              >
                {brand}
              </Badge>
            ))}
          </div>
        </div>

        {/* Кнопка */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
          Выбрать принтер →
        </button>
      </CardContent>
    </Card>
  );
};

export default PrinterCategoryCard;