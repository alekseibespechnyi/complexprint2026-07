import emailjs from '@emailjs/browser';
import logger from '../lib/logger';

// EmailJS Public-настройки. Public Key безопасен в клиенте,
// при условии что в EmailJS Dashboard → Account → Security
// настроен whitelist Allowed Origins (только https://complexprint.ru).
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_7w11v3a',
  TEMPLATE_ID: 'template_d9mhwku',
  PUBLIC_KEY: 'o0iIBDBoFT2g2Cvdx',
};

const isDev =
  typeof process !== 'undefined' &&
  process.env &&
  process.env.NODE_ENV !== 'production';

class EmailService {
  constructor() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  formatIssueType(issueValue) {
    const issueMapping = {
      'poor-print-quality': 'Плохое качество печати',
      'print-jams': 'Замятие бумаги',
      'paper-wont-pickup': 'Бумага не захватывается',
      'screen-wont-light': 'Экран не включается',
      'error-code': 'Отображение кода ошибки',
      'toner-issues': 'Проблемы с тонером/чернилами',
      'connectivity-problems': 'Проблемы с подключением',
      'other': 'Другая проблема',
    };
    return issueMapping[issueValue] || issueValue;
  }

  formatUrgency(urgencyValue) {
    const urgencyMapping = {
      low: 'Стандартно (3-5 дней)',
      medium: 'Приоритет (1-2 дня)',
      high: 'Срочно (в тот же день)',
    };
    return urgencyMapping[urgencyValue] || urgencyValue;
  }

  formatEquipmentBrand(brandValue) {
    const brandMapping = {
      'hewlett-packard-hp': 'Hewlett Packard (HP)',
      canon: 'Canon',
      kyocera: 'Kyocera',
      'konica-minolta': 'Konica Minolta',
      xerox: 'Xerox',
      ricoh: 'Ricoh',
    };
    return brandMapping[brandValue] || brandValue;
  }

  async sendRepairRequest(formData) {
    try {
      // Тестовый режим (только если SERVICE_ID специально перебит на 'test_service')
      if (EMAILJS_CONFIG.SERVICE_ID === 'test_service') {
        logger.log('EmailJS не настроен, используется тестовый режим');
        // ВНИМАНИЕ: PII в формдате не логируем даже в dev — только id
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const requestId = this.generateRequestId();
        return {
          success: true,
          message:
            'Ваша заявка на ремонт была успешно отправлена. Мы свяжемся с вами в течение 24 часов.',
          request_id: requestId,
        };
      }

      const emailParams = {
        name: formData.name || 'Не указано',
        email: formData.email || 'Не указано',
        phone: formData.phone || 'Не указано',
        company: formData.company || 'Не указано',
        equipmentBrand:
          this.formatEquipmentBrand(formData.equipmentBrand) || 'Не указано',
        equipmentModel: formData.equipmentModel || 'Не указано',
        issue: this.formatIssueType(formData.issue) || 'Не указано',
        urgency: this.formatUrgency(formData.urgency) || 'Средний приоритет',
        description: formData.description || 'Описание не предоставлено',
        timestamp: new Date().toLocaleString('ru-RU'),
        requestId: this.generateRequestId(),
      };

      // В dev — только тип/маркер, без PII
      logger.log('Отправка email, requestId =', emailParams.requestId);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailParams,
      );

      logger.log('Email отправлен, status =', response?.status);

      return {
        success: true,
        message:
          'Ваша заявка на ремонт была успешно отправлена. Мы свяжемся с вами в течение 24 часов.',
        request_id: emailParams.requestId,
      };
    } catch (error) {
      logger.errorSafe('Ошибка EmailJS', error);

      let errorMessage =
        'Не удалось отправить заявку на ремонт. Пожалуйста, попробуйте еще раз.';

      if (error.status === 400) {
        errorMessage = 'EmailJS не настроен правильно. Обратитесь к администратору.';
      } else if (error.status === 403) {
        errorMessage =
          'Сервис временно недоступен. Пожалуйста, позвоните нам напрямую.';
      } else if (error.text) {
        errorMessage = `Ошибка: ${error.text}`;
      }

      throw new Error(errorMessage);
    }
  }

  generateRequestId() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return `PC-${timestamp}-${randomStr}`.toUpperCase();
  }

  // testConnection доступен только в dev-сборке.
  // В production вызов вернёт ошибку — это убирает возможность спама
  // с открытой консоли через ваш EmailJS-ключ.
  async testConnection() {
    if (!isDev) {
      return { success: false, message: 'Disabled in production' };
    }
    try {
      const testParams = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        company: 'Test Company',
        equipmentBrand: 'HP',
        equipmentModel: 'Test Model',
        issue: 'Test Issue',
        urgency: 'Medium Priority',
        description: 'This is a test message to verify EmailJS integration.',
        timestamp: new Date().toLocaleString(),
        requestId: 'TEST-' + Date.now(),
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        testParams,
      );

      return { success: true, message: 'Test email sent successfully!' };
    } catch (error) {
      logger.errorSafe('Test failed', error);
      return { success: false, message: 'Test failed: ' + (error.text || error.message) };
    }
  }
}

export default new EmailService();
