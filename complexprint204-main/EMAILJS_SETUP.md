# EmailJS Configuration Instructions

## 📧 Complete EmailJS Setup for Print Complex

### 1. Create EmailJS Account
1. Visit https://www.emailjs.com
2. Sign up for free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (if using Gmail account)
   - **Outlook** (if using 9104297686@outlook.com directly)
4. Connect your email account
5. **IMPORTANT**: Copy your **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set template name: `repair_request_template`
4. Use the template content provided below

### 4. Get Configuration Values
After completing setup, you'll have:
- **Service ID**: service_xxxxxxxxx
- **Template ID**: template_xxxxxxxx  
- **Public Key**: your_public_key_here

### 5. Update Configuration
Edit `/frontend/src/services/emailService.js` and replace:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',     // Replace with actual Service ID
  TEMPLATE_ID: 'your_template_id_here',   // Replace with actual Template ID  
  PUBLIC_KEY: 'your_public_key_here'      // Replace with actual Public Key
};
```

### 6. Email Template Content

**Template Name:** `repair_request_template`

**Тема письма:**
```
🖨️ Новая заявка на ремонт от {{name}} - Комплекс Принт
```

**Текст письма (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #ec4899, #9333ea); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="margin: 0;">🖨️ Комплекс Принт</h1>
    <h2 style="margin: 10px 0;">Новая заявка на ремонт оборудования</h2>
    <p style="margin: 5px 0;">Отправлено {{timestamp}}</p>
  </div>
  
  <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
    <div style="background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h3 style="color: #ec4899; margin-top: 0;">Информация о клиенте</h3>
      <p><strong>Имя:</strong> {{name}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Телефон:</strong> {{phone}}</p>
      <p><strong>Компания:</strong> {{company}}</p>
    </div>
    
    <div style="background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h3 style="color: #9333ea; margin-top: 0;">Детали оборудования</h3>
      <p><strong>Бренд:</strong> {{equipmentBrand}}</p>
      <p><strong>Модель:</strong> {{equipmentModel}}</p>
      <p><strong>Проблема:</strong> {{issue}}</p>
      <p><strong>Срочность:</strong> {{urgency}}</p>
    </div>
    
    <div style="background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h3 style="color: #ec4899; margin-top: 0;">Описание проблемы</h3>
      <div style="background: #f1f3f4; padding: 15px; border-radius: 5px; border-left: 4px solid #ec4899;">
        {{description}}
      </div>
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h3 style="color: #9333ea; margin-top: 0;">Следующие шаги</h3>
      <ul style="margin: 0; padding-left: 20px;">
        <li>Связаться с клиентом в течение 24 часов для подтверждения деталей</li>
        <li>Запланировать удобное время обслуживания</li>
        <li>Провести профессиональную диагностику и ремонт</li>
        <li>Предоставить гарантийное покрытие на обслуживание и запчасти</li>
      </ul>
      <div style="margin-top: 15px; padding: 10px; background-color: #fff3cd; border-radius: 5px;">
        <strong>ID заявки:</strong> {{requestId}}
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 30px; color: #666; font-size: 14px;">
      <p><strong>Комплекс Принт</strong> - Профессиональное обслуживание оборудования</p>
      <p>📞 +74951031468 | 📧 9104297686@outlook.com</p>
      <p>📍 г. Москва, Абрамцевская 11 к1 стр3</p>
      <p>🌐 complexprint.ru</p>
    </div>
  </div>
</div>
```

### 7. Template Settings
- **From Name:** Комплекс Принт Website
- **Reply To:** 9104297686@outlook.com
- **Subject:** 🖨️ Новая заявка на ремонт от {{name}} - Комплекс Принт

### 8. Testing the Setup
After configuration, test the form on your website. You should receive formatted emails at your configured email address.

### 9. EmailJS Free Plan Limits
- **200 emails/month** for free
- **No credit card required** for free plan
- **Upgrade available** if you need more emails

### 10. Troubleshooting
- Check browser console for any JavaScript errors
- Verify all three configuration values are correct
- Ensure email template uses the exact variable names shown above
- Test with a simple template first, then add formatting

### 11. Alternative: Formspree (Backup Option)
If EmailJS doesn't work, you can use Formspree:
1. Go to https://formspree.io
2. Create form with endpoint: 9104297686@outlook.com
3. Use the generated form URL in your React form

## Security Notes
- EmailJS public key is safe to use in frontend code
- Never expose private keys in client-side code
- EmailJS handles spam protection automatically