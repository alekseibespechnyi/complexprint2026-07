// services/emailService.js
class EmailService {
  async sendRepairRequest(formData) {
    try {
      // Используем новый эндпоинт с Exim
      const response = await fetch('/api/send-repair-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Ошибка отправки');
      }

      if (!data.success) {
        throw new Error(data.message || 'Ошибка отправки');
      }

      return {
        success: true,
        message: data.message || 'Заявка успешно отправлена!',
        request_id: data.request_id
      };
    } catch (error) {
      console.error('Ошибка отправки:', error);
      throw new Error('Не удалось отправить заявку. Пожалуйста, позвоните нам по телефону +79911857289');
    }
  }
}

export default new EmailService();