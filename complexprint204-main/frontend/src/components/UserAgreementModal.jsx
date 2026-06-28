import React from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const UserAgreementModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Пользовательское соглашение</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="prose prose-sm max-w-none">
            
            <h3 className="text-lg font-semibold mb-4">1. Общие положения</h3>
            <p className="mb-4">
              <strong>1.1.</strong> Настоящее Пользовательское соглашение (далее – «Соглашение») регулирует отношения между ООО "Комплекс Принт", ИНН 7743874280, КПП 774301001 (далее – «Администрация»), владельцем сайта complexprint.ru (далее – «Сайт»), и любым лицом (далее – «Пользователь»), использующим функционал Сайта для подачи заявки на услуги ремонта.
            </p>
            <p className="mb-4">
              <strong>1.2.</strong> Используя Сайт и отправляя данные через формы на Сайте, Пользователь подтверждает свое согласие с условиями настоящего Соглашения и Политики конфиденциальности.
            </p>
            <p className="mb-6">
              <strong>1.3.</strong> Администрация оставляет за собой право в одностороннем порядке изменять условия Соглашения. Изменения вступают в силу с момента их публикации на Сайте.
            </p>

            <h3 className="text-lg font-semibold mb-4">2. Условия использования сайта</h3>
            <p className="mb-4">
              <strong>2.1.</strong> Пользователь использует Сайт для подачи заявки на диагностику и ремонт принтерной техники.
            </p>
            <p className="mb-4">
              <strong>2.2.</strong> Пользователь обязуется предоставлять достоверную и актуальную контактную информацию.
            </p>
            <p className="mb-6">
              <strong>2.3.</strong> Отправка заявки через форму на Сайте не является заключением договора на оказание услуг и рассматривается как предварительная заявка (оферта) со стороны Пользователя. Договор на оказание услуг считается заключенным с момента согласования всех деталей (стоимости, сроков) и подтверждения заказа Администрацией.
            </p>

            <h3 className="text-lg font-semibold mb-4">3. Конфиденциальность и защита персональных данных</h3>
            <p className="mb-4">
              <strong>3.1.</strong> Отправляя свои персональные данные (имя, телефон, e-mail) через формы на Сайте, Пользователь добровольно дает информированное согласие на их обработку Администрацией.
            </p>
            <p className="mb-4">
              <strong>3.2.</strong> Обработка персональных данных Пользователя осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» и с отдельным Согласием на обработку персональных данных, которое является неотъемлемой частью настоящего Соглашения.
            </p>
            <p className="mb-6">
              <strong>3.3.</strong> Администрация обязуется принимать все необходимые меры для защиты персональных данных Пользователя от несанкционированного доступа или разглашения.
            </p>

            <h3 className="text-lg font-semibold mb-4">4. Ограничение ответственности</h3>
            <p className="mb-4">
              <strong>4.1.</strong> Администрация не несет ответственности за невозможность обслуживания Пользователя по причинам, связанным с действием обстоятельств непреодолимой силы.
            </p>
            <p className="mb-4">
              <strong>4.2.</strong> Администрация не гарантирует абсолютную бесперебойность работы Сайта, но прилагает все усилия для ее обеспечения.
            </p>
            <p className="mb-6">
              <strong>4.3.</strong> Все материалы и информация, предоставленные Пользователем о неисправности, носят справочный характер. Окончательная стоимость и сроки ремонта определяются после диагностики оборудования.
            </p>

            <h3 className="text-lg font-semibold mb-4">5. Заключительные положения</h3>
            <p className="mb-4">
              <strong>5.1.</strong> Все возможные споры, вытекающие из настоящего Соглашения, подлежат разрешению в соответствии с действующим законодательством Российской Федерации.
            </p>
            <p className="mb-4">
              <strong>5.2.</strong> В случае возникновения вопросов, Пользователь может связаться с Администрацией по контактным данным, указанным на Сайте.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-6 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={() => window.open('/user-agreement', '_blank')}
            className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
          >
            Открыть в новой вкладке
          </Button>
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
          >
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserAgreementModal;