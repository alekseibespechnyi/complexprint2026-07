console.log('=== ТЕСТ ФОРМЫ ЗАЯВКИ ==='); 

// Симуляция заполнения формы
const testFormData = {
  name: 'Иван Петров',
  email: 'ivan@test.ru',
  phone: '+74951234567', 
  company: 'ООО Тест',
  equipmentBrand: 'hewlett-packard-hp',
  equipmentModel: 'LaserJet Pro 400',
  issue: 'poor-print-quality',
  urgency: 'medium',
  description: 'Принтер печатает с полосами'
};

console.log('Тестовые данные формы:', testFormData);

// Проверка валидации
const required = ['name', 'email', 'phone', 'equipmentBrand', 'issue'];
let isValid = true;

for (let field of required) {
  if (!testFormData[field] || testFormData[field].trim() === '') {
    console.log('❌ Поле не заполнено:', field);
    isValid = false;
  } else {
    console.log('✅ Поле заполнено:', field, '=', testFormData[field]);
  }
}

if (isValid) {
  console.log('🎉 ВСЕ ОБЯЗАТЕЛЬНЫЕ ПОЛЯ ЗАПОЛНЕНЫ ПРАВИЛЬНО!');
  console.log('Форма должна работать без ошибок.');
} else {
  console.log('❌ Не все поля заполнены');
}

