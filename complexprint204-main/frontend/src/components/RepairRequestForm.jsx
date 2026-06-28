import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import RepairRequestFormBody from './RepairRequestFormBody';

const RepairRequestForm = () => {
  return (
    <section id="repair-request" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
            Получить помощь сейчас
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Заявка на ремонт
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              оборудования
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните форму ниже, и наши опытные техники свяжутся с вами в течение 24 часов для назначения услуги ремонта.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Контактная информация</CardTitle>
                <CardDescription>Свяжитесь с нашей службой поддержки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">+79911857289</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@complexprint.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">г. Москва, Абрамцевская 11 к1 стр3</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Гарантия быстрого ответа</h4>
                  <p className="text-gray-600 text-sm">Мы отвечаем на все заявки о ремонте в течение 24 часов и предоставляем гибкое планирование, соответствующее вашим рабочим часам.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Repair Request Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Форма заявки на ремонт</CardTitle>
                <CardDescription>Пожалуйста, предоставьте подробную информацию о вашем оборудовании и проблеме, с которой вы столкнулись</CardDescription>
              </CardHeader>
              <CardContent>
                <RepairRequestFormBody />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairRequestForm;
