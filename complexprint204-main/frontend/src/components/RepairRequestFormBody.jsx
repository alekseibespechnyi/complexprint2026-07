import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { commonIssues, repairFormBrands } from '../data/mock';
import emailService from '../services/emailService';
import logger from '../lib/logger';
import UserAgreementModal from './UserAgreementModal';

/**
 * RepairRequestFormBody — чистое тело формы заявки на ремонт.
 * Используется и на главной (в <section id="repair-request">) и в модальном окне.
 *
 * Props:
 *  - compact  — если true, рендерится компактнее (для модалки): без больших Card-обёрток.
 *  - onSuccess — опциональный коллбек после успешной отправки (например, чтобы закрыть модалку).
 */
const RepairRequestFormBody = ({ compact = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    equipmentBrand: '',
    equipmentModel: '',
    issue: '',
    description: '',
    urgency: 'medium',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [error, setError] = useState('');
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const [isAgreementOpen, setIsAgreementOpen] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || formData.name.trim() === '') {
      setError('Пожалуйста, введите ваше полное имя.');
      return false;
    }
    if (!formData.email || formData.email.trim() === '') {
      setError('Пожалуйста, введите ваш email адрес.');
      return false;
    }
    if (!formData.phone || formData.phone.trim() === '') {
      setError('Пожалуйста, введите ваш номер телефона.');
      return false;
    }
    if (!formData.equipmentBrand || formData.equipmentBrand.trim() === '') {
      setError('Пожалуйста, выберите бренд оборудования.');
      return false;
    }
    if (!formData.issue || formData.issue.trim() === '') {
      setError('Пожалуйста, выберите тип проблемы.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Пожалуйста, введите корректный email адрес.');
      return false;
    }
    if (formData.phone.length < 10) {
      setError('Пожалуйста, введите корректный номер телефона.');
      return false;
    }
    if (!isAgreedToTerms) {
      setError('Пожалуйста, согласитесь с условиями обработки персональных данных и пользовательским соглашением.');
      return false;
    }
    logger.log('✅ Валидация формы прошла успешно');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    logger.log('📝 Попытка отправки формы (PII скрыты в проде)');

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      logger.log('📤 Отправка заявки на ремонт...');
      const response = await emailService.sendRepairRequest(formData);
      logger.log('📨 Ответ от сервиса: success=', response?.success);

      if (response.success) {
        logger.log('✅ Заявка успешно отправлена, id=', response.request_id);
        setIsSubmitted(true);
        setRequestId(response.request_id);
        if (typeof onSuccess === 'function') onSuccess(response.request_id);
      } else {
        logger.errorSafe('❌ Неуспешная отправка', response);
        setError('Не удалось отправить заявку на ремонт. Пожалуйста, попробуйте еще раз.');
      }
    } catch (err) {
      logger.errorSafe('❌ Ошибка при отправке заявки на ремонт', err);
      setError(err.message || 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону +79911857289.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        data-testid="repair-request-success"
        className={compact ? 'p-2' : 'max-w-2xl mx-auto text-center'}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Заявка успешно отправлена!</h2>
        <p className="text-base text-gray-600 mb-5">
          Спасибо за вашу заявку на ремонт. Мы свяжемся с вами в течение 24 часов для назначения обслуживания.
        </p>
        <Badge className="bg-green-100 text-green-700 text-base px-4 py-2">
          ID заявки: {requestId}
        </Badge>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left">
          <p className="text-gray-700 mb-2 font-semibold">Следующие шаги:</p>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>• Наш техник свяжется с вами для подтверждения деталей</li>
            <li>• Мы запланируем удобное время обслуживания</li>
            <li>• Профессиональная диагностика и ремонт</li>
            <li>• Уведомление по email отправлено команде Комплекс Принт</li>
          </ul>
        </div>
        <Button
          data-testid="repair-request-reset-button"
          onClick={() => {
            setIsSubmitted(false);
            setIsAgreedToTerms(false);
            setRequestId('');
            setFormData({
              name: '', email: '', phone: '', company: '',
              equipmentBrand: '', equipmentModel: '',
              issue: '', description: '', urgency: 'medium',
            });
          }}
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
        >
          Отправить другую заявку
        </Button>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rrf-name">Полное имя *</Label>
            <Input
              id="rrf-name" data-testid="repair-request-name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Введите ваше полное имя"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rrf-email">Email адрес *</Label>
            <Input
              id="rrf-email" data-testid="repair-request-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Введите ваш email"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rrf-phone">Номер телефона *</Label>
            <Input
              id="rrf-phone" data-testid="repair-request-phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Введите ваш номер телефона"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rrf-company">Название компании</Label>
            <Input
              id="rrf-company" data-testid="repair-request-company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Введите название компании (необязательно)"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rrf-brand">Бренд оборудования *</Label>
            <Select onValueChange={(value) => handleInputChange('equipmentBrand', value)}>
              <SelectTrigger id="rrf-brand" data-testid="repair-request-brand">
                <SelectValue placeholder="Выберите бренд оборудования" />
              </SelectTrigger>
              <SelectContent>
                {repairFormBrands.map((brand, index) => (
                  <SelectItem key={index} value={brand.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rrf-model">Модель оборудования</Label>
            <Input
              id="rrf-model" data-testid="repair-request-model"
              value={formData.equipmentModel}
              onChange={(e) => handleInputChange('equipmentModel', e.target.value)}
              placeholder="Введите номер модели"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="rrf-issue">Тип проблемы *</Label>
            <Select onValueChange={(value) => handleInputChange('issue', value)}>
              <SelectTrigger id="rrf-issue" data-testid="repair-request-issue">
                <SelectValue placeholder="Выберите тип проблемы" />
              </SelectTrigger>
              <SelectContent>
                {commonIssues.map((issue) => (
                  <SelectItem key={issue.value} value={issue.value}>
                    {issue.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rrf-urgency">Срочность обслуживания</Label>
            <Select onValueChange={(value) => handleInputChange('urgency', value)} defaultValue="medium">
              <SelectTrigger id="rrf-urgency" data-testid="repair-request-urgency">
                <SelectValue placeholder="Выберите уровень срочности" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Стандартно (3-5 дней)</SelectItem>
                <SelectItem value="medium">Приоритет (1-2 дня)</SelectItem>
                <SelectItem value="high">Срочно (в тот же день)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rrf-description">Описание проблемы</Label>
          <Textarea
            id="rrf-description" data-testid="repair-request-description"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Пожалуйста, подробно опишите проблему, включая любые сообщения об ошибках или коды"
            rows={compact ? 3 : 4}
          />
        </div>

        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
          <input
            type="checkbox"
            id="rrf-terms"
            data-testid="repair-request-terms"
            checked={isAgreedToTerms}
            onChange={(e) => setIsAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
          />
          <label htmlFor="rrf-terms" className="text-sm text-gray-700 leading-relaxed">
            Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и{' '}
            <button
              type="button"
              onClick={() => setIsAgreementOpen(true)}
              className="text-pink-600 underline hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 rounded"
            >
              пользовательским соглашением
            </button>
          </label>
        </div>

        <Button
          type="submit"
          data-testid="repair-request-submit"
          disabled={isSubmitting || !isAgreedToTerms}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Отправка...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Отправить заявку на ремонт
              <Send className="ml-2 w-5 h-5" />
            </span>
          )}
        </Button>
      </form>

      <UserAgreementModal
        isOpen={isAgreementOpen}
        onClose={() => setIsAgreementOpen(false)}
      />
    </>
  );
};

export default RepairRequestFormBody;
