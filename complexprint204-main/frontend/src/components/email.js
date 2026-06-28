// server.js или routes/email.js
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Настройка транспорта для вашего почтового сервера
const transporter = nodemailer.createTransport({
  host: 'ваш_smtp_сервер', // например, mail.yourdomain.ru
  port: 465, // или 587
  secure: true, // true для 465, false для других портов
  auth: {
    user: 'info@complexprint.ru', // ваш email
    pass: 'ваш_пароль'
  },
  // Для некоторых провайдеров может потребоваться:
  tls: {
    rejectUnauthorized: false
  }
});

// Эндпоинт для отправки заявок
router.post('/api/send-repair-request', async (req, res) => {
  try {
    const formData = req.body;
    
    // Форматируем данные
    const emailParams = {
      from: `"Complex Print" <info@complexprint.ru>`,
      to: 'info@complexprint.ru', // куда отправлять
      replyTo: formData.email,
      subject: `Заявка на ремонт #${Date.now()}`,
      html: `
        <h2>Новая заявка на ремонт</h2>
        <p><strong>Клиент:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Телефон:</strong> ${formData.phone}</p>
        <p><strong>Компания:</strong> ${formData.company || 'Не указано'}</p>
        <p><strong>Бренд оборудования:</strong> ${formData.equipmentBrand}</p>
        <p><strong>Модель:</strong> ${formData.equipmentModel || 'Не указано'}</p>
        <p><strong>Проблема:</strong> ${formData.issue}</p>
        <p><strong>Срочность:</strong> ${formData.urgency}</p>
        <p><strong>Описание:</strong></p>
        <p>${formData.description}</p>
        <hr>
        <p><em>Заявка отправлена: ${new Date().toLocaleString('ru-RU')}</em></p>
      `,
      text: `
        Новая заявка на ремонт
        
        Клиент: ${formData.name}
        Email: ${formData.email}
        Телефон: ${formData.phone}
        Компания: ${formData.company || 'Не указано'}
        Бренд: ${formData.equipmentBrand}
        Модель: ${formData.equipmentModel || 'Не указано'}
        Проблема: ${formData.issue}
        Срочность: ${formData.urgency}
        
        Описание:
        ${formData.description}
        
        Заявка отправлена: ${new Date().toLocaleString('ru-RU')}
      `
    };

    // Отправляем письмо
    const info = await transporter.sendMail(emailParams);
    
    // Сохраняем в базу данных (опционально)
    // await saveToDatabase(formData);
    
    res.json({
      success: true,
      message: 'Заявка успешно отправлена',
      request_id: `PC-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
    });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    res.status(500).json({
      success: false,
      message: 'Ошибка при отправке заявки'
    });
  }
});

module.exports = router;