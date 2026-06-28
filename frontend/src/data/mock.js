// Mock data for Print Complex website - Russian version

export const companyInfo = {
  name: "Комплекс Принт",
  phone: "+79911857289",
  email: "info@complexprint.ru",
  address: "г. Москва, Абрамцевская 11 к1 стр3",
  telegram: "https://t.me/complexprint_mos",
  description: "Экономьте на обслуживании печатного оборудования и продлевайте срок его службы с помощью наших профессиональных услуг."
};

export const services = [
  {
    id: 1,
    title: "Комплексное абонентское обслуживание",
    description: "Ежемесячное или ежеквартальное профилактическое обслуживание, обеспечивающее долгосрочную работу вашего офисного оборудования.",
    features: ["Профилактическое обслуживание", "Неограниченное время ремонта", "Гарантированное обслуживание", "Гарантия на запчасти"],
    popular: true
  },
  {
    id: 2,
    title: "Разовый ремонт",
    description: "Профессиональная услуга ремонта для решения немедленных проблем с оборудованием с гарантийным покрытием.",
    features: ["Быстрая диагностика", "Профессиональный ремонт", "Гарантия на обслуживание", "Оригинальные запчасти"],
    popular: false
  }
];

export const supportedBrands = [
  "Hewlett Packard (HP)",
  "Canon",
  "Kyocera", 
  "Konica Minolta",
  "Xerox",
  "Ricoh"
];

export const repairFormBrands = [
  "Hewlett Packard (HP)",
  "Canon",
  "Kyocera", 
  "Konica Minolta",
  "Xerox",
  "Ricoh",
  "Pantum",
  "Другой бренд"
];

export const equipmentTypes = [
  "Лазерные принтеры",
  "Плоттеры",
  "Многофункциональные устройства"
];

export const clientCompanies = [
  "Связной",
  "Стройгазмонтаж", 
  "Совкомбанк",
  "Burger King",
  "Криогенмаш",
  "X5 Group"
];

export const commonIssues = [
  { value: "poor-print-quality", label: "Плохое качество печати" },
  { value: "print-jams", label: "Замятие бумаги" },
  { value: "paper-wont-pickup", label: "Бумага не захватывается" },
  { value: "screen-wont-light", label: "Экран не включается" },
  { value: "error-code", label: "Отображение кода ошибки" },
  { value: "toner-issues", label: "Проблемы с тонером/чернилами" },
  { value: "connectivity-problems", label: "Проблемы с подключением" },
  { value: "other", label: "Другая проблема" }
];

export const printerImages = [
  {
    id: 1,
    url: "/images/hp.jpg",
    alt: "Профессиональное МФУ HP",
    brand: "HP"
  },
  {
    id: 2,
    url: "/images/canon.jpeg",
    alt: "Белое офисное копировальное устройство Canon",
    brand: "Canon"
  },
  {
    id: 3,
    url: "/images/kyocera.jpeg",
    alt: "Профессиональный принтер Kyocera в офисной среде",
    brand: "Kyocera"
  },
  {
    id: 4,
    url: "/images/ricoh.jpeg",
    alt: "Цветной принтер Ricoh для офиса",
    brand: "Ricoh"
  }
];

export const testimonials = [
  {
    id: 1,
    company: "Связной",
    text: "ComplexPrint обслуживает наше печатное оборудование уже более 2 лет. Их абонентское обслуживание значительно экономит наши расходы.",
    author: "IT-отдел"
  },
  {
    id: 2,
    company: "Совкомбанк", 
    text: "Профессиональное обслуживание и быстрое время отклика. Наши принтеры всегда работают бесперебойно.",
    author: "Менеджер по операциям"
  },
  {
    id: 3,
    company: "X5 Group",
    text: "Надежный сервис обслуживания, который поддерживает наше офисное оборудование на пике производительности.",
    author: "Команда по эксплуатации"
  }
];

export const repairProcessSteps = [
  {
    id: 1,
    title: "Подача заявки",
    description: "Отправьте заявку на ремонт через нашу онлайн-форму с указанием деталей оборудования и описания проблемы.",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Быстрая диагностика",
    description: "Наши опытные техники проводят быструю диагностику для выявления основной причины проблемы.",
    icon: "Search"
  },
  {
    id: 3,
    title: "Профессиональный ремонт",
    description: "Используя оригинальные запчасти и проверенные методы, мы восстанавливаем ваше оборудование до оптимального состояния.",
    icon: "Wrench"
  },
  {
    id: 4,
    title: "Контроль качества", 
    description: "Комплексное тестирование гарантирует, что ваше оборудование работает идеально перед завершением работ.",
    icon: "CheckCircle"
  }
];

// Mock function to simulate form submission
export const submitRepairRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // PII не логируем; формдата нужна только для имитации отправки
      resolve({
        success: true,
        message: "Ваша заявка на ремонт была успешно отправлена. Мы свяжемся с вами в течение 24 часов.",
        requestId: Math.random().toString(36).substr(2, 9).toUpperCase()
      });
    }, 1000);
  });
};
