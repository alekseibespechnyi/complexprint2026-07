import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Хлебные крошки и кнопка назад */}
            <div className="mb-8">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-4"
              >
                ← Вернуться на главную
              </button>
              <nav className="text-sm text-gray-600">
                <span>Главная</span> / <span>Условия обслуживания</span>
              </nav>
            </div>

            {/* Заголовок */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Правовая информация
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Условия обслуживания
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Пожалуйста, внимательно ознакомьтесь с условиями предоставления наших услуг по ремонту и обслуживанию принтеров
              </p>
            </div>

            {/* Контент */}
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* 1. Порядок приема оборудования */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">1</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Порядок приема оборудования в ремонт</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Диагностика:</strong> Диагностика является обязательным первым шагом.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Стоимость диагностики:</strong> Диагностика бесплатна при условии последующего ремонта в нашем сервисе.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Необходимые данные:</strong> Клиент должен предоставить модель устройства, серийный номер и четкое описание неисправности.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Комплектность:</strong> Оборудование должно сдаваться в полной комплектации (с картриджами, блоком питания).</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Гарантия */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">2</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Гарантия</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">Гарантия предоставляется на выполненные работы и установленные запасные части.</p>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <p className="text-gray-800"><strong>Срок гарантии:</strong> 3 месяца на работы и запчасти.</p>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Что НЕ покрывается гарантией:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span className="text-gray-700">На расходные материалы (термопленка, ролики подачи, которые имеют естественный износ).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span className="text-gray-700">На повторные повреждения, вызванные неправильной эксплуатацией.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span className="text-gray-700">Если устройство ремонтировалось или вскрывалось в другом сервисе.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span className="text-gray-700">На дефекты, вызванные попаданием жидкостей, воздействием влаги, пыли, механическими повреждениями.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">✗</span>
                          <span className="text-gray-700">На программное обеспечение и его настройку (если это не было целью ремонта).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Сроки ремонта */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">3</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Сроки ремонта</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">Сроки ремонта являются ориентировочными и могут меняться в зависимости от:</p>
                    
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">Сложности поломки.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">Наличия запчастей на складе.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">Загруженности сервиса.</span>
                      </li>
                    </ul>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                      <p className="text-gray-800 font-semibold">⚡ 90% ремонтов выполнено в течение часа.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 4. Стоимость и оплата */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">4</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Стоимость и оплата</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Смета на ремонт:</strong> После диагностики предоставляем клиенту детализированную смету (стоимость запчастей + работа). Ремонт начинается только после согласования сметы с клиентом.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Изменение стоимости:</strong> Если в процессе ремонта выявляются новые неисправности, стоимость пересматривается и также согласовывается с клиентом.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5. Ответственность сторон */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">5</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Ответственность сторон</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Ответственность сервиса:</h3>
                      <p className="text-gray-700">Сервис несет ответственность за сохранность оборудования на своем складе. Сервис не несет ответственности за данные клиента (программы, настройки, хранящиеся на жестком диске МФУ). Рекомендуется клиенту сделать бэкап.</p>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Ответственность клиента:</h3>
                      <p className="text-gray-700">Клиент обязан забрать отремонтированное оборудование в оговоренные сроки в течение 30 дней. После этого сервис может взимать плату за хранение или снять с себя ответственность за устройство.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Отказ от ремонта */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">6</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Отказ от ремонта</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Условия:</strong> Если клиент отказывается от ремонта после диагностики, он оплачивает стоимость диагностики и забирает устройство.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="text-gray-700"><strong>Разборка:</strong> Если устройство было разобрано для диагностики, оно возвращается в собранном виде, если иное не оговорено отдельно.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 7. Хранение невостребованной техники */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">7</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Хранение невостребованной техники</h2>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-gray-800">Максимальный срок хранения устройства после уведомления клиента о готовности — <strong>3 месяца</strong>. По истечении этого срока сервис вправе распоряжаться устройством по своему усмотрению для покрытия расходов на хранение.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Призыв к действию */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center mt-12">
                <h3 className="text-3xl font-bold mb-4">Есть вопросы по условиям?</h3>
                <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
                  Наша команда всегда готова проконсультировать вас по любым вопросам, связанным с ремонтом и обслуживанием вашего оборудования.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/')}
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Оставить заявку
                  </button>
                  <a
                    href="tel:+79911857289"
                    className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    Позвонить: +7 991 185 72 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
