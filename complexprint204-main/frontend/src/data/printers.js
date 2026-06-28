// Цвета брендов для генерации placeholder изображений
const brandColors = {
  'HP': { bg: '#0096D6', text: '#FFFFFF' },
  'Canon': { bg: '#CC0000', text: '#FFFFFF' },
  'Kyocera': { bg: '#009FE3', text: '#FFFFFF' },
  'Konica Minolta': { bg: '#E60012', text: '#FFFFFF' }
};

// Функция для создания SVG изображения принтера с брендом
const createPrinterSVG = (brand, model) => {
  const colors = brandColors[brand] || { bg: '#6B7280', text: '#FFFFFF' };
  
  // Создаем data URL для SVG изображения
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${brand}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.bg};stop-opacity:0.7" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#grad-${brand})"/>
      
      <!-- Иконка принтера -->
      <g transform="translate(200, 100)">
        <rect x="-40" y="-20" width="80" height="50" rx="5" fill="${colors.text}" opacity="0.9"/>
        <rect x="-35" y="-15" width="70" height="40" rx="3" fill="${colors.bg}" opacity="0.3"/>
        <rect x="-30" y="35" width="60" height="15" rx="2" fill="${colors.text}" opacity="0.8"/>
        <circle cx="-20" cy="42" r="3" fill="${colors.bg}"/>
        <circle cx="20" cy="42" r="3" fill="${colors.bg}"/>
      </g>
      
      <!-- Текст бренда -->
      <text x="200" y="200" font-family="Arial, sans-serif" font-size="32" font-weight="bold" 
            fill="${colors.text}" text-anchor="middle">${brand}</text>
      
      <!-- Текст модели -->
      <text x="200" y="240" font-family="Arial, sans-serif" font-size="16" 
            fill="${colors.text}" text-anchor="middle" opacity="0.9">${model.substring(0, 30)}</text>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

// Функция для получения изображения принтера
export const getPrinterImage = (printer) => {
  // Если у принтера есть прямая ссылка на изображение, используем её
  if (printer.image) {
    return printer.image;
  }
  
  // Создаём SVG изображение с брендом и моделью
  return createPrinterSVG(printer.brand, printer.model);
};

// Данные принтеров из CSV файлов
export const printersData = {
  hp: [
    // Color LaserJet Pro - Личное/Офисное использование
    {
      id: 'hp-1',
      model: 'Color LaserJet Pro M255dw',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 22,
      bwSpeed: 26,
      resolution: '600 x 600 dpi',
      purpose: 'Домашний офис',
      note: 'Компактный, с дуплексом и Wi-Fi',
      price: '25 000 — 35 000 ₽',
      usageCategory: 'personal',
      image: '/images/ColorLaserJetProM255dw.jpeg'
    },
    {
      id: 'hp-2',
      model: 'Color LaserJet Pro M283fdw',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 22,
      bwSpeed: 26,
      resolution: '600 x 600 dpi',
      purpose: 'Малый офис',
      note: 'МФУ "4-в-1" с автоподачей',
      price: '45 000 — 60 000 ₽',
      usageCategory: 'office',
      image: '/images/HP-Color-LaserJet-Pro-MFP-M283fdw.jpg'
    },
    {
      id: 'hp-3',
      model: 'Color LaserJet Pro M454dn',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 25,
      bwSpeed: 30,
      resolution: '600 x 600 dpi',
      purpose: 'Рабочая группа',
      note: 'Акцент на печать, сетевой интерфейс',
      price: '55 000 — 75 000 ₽',
      usageCategory: 'office',
      image: '/images/ColorLaserJetProM454dn.jpg'
    },
    {
      id: 'hp-4',
      model: 'Color LaserJet Pro M479fdw',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 28,
      bwSpeed: 28,
      resolution: '600 x 600 dpi',
      purpose: 'Малый/Средний офис',
      note: 'Флагманское МФУ для малого бизнеса',
      price: '75 000 — 100 000 ₽',
      usageCategory: 'office',
      image: '/images/ColorLaserJetProM479fdw.jpg'
    },
    // Color LaserJet Enterprise - Высоконагруженный офис
    {
      id: 'hp-5',
      model: 'Color LaserJet Enterprise M855dn',
      brand: 'HP',
      category: 'Color LaserJet Enterprise',
      colorSpeed: 40,
      bwSpeed: 40,
      resolution: '1200 x 1200 dpi',
      purpose: 'Средний офис',
      note: 'Надежность и высокая нагрузка',
      price: '130 000 — 170 000 ₽',
      usageCategory: 'enterprise',
      image: '/images/Color_LaserJet_Enterprise_M855dn.jpg'
    },
    {
      id: 'hp-6',
      model: 'Color LaserJet Enterprise M681dn',
      brand: 'HP',
      category: 'Color LaserJet Enterprise',
      colorSpeed: 50,
      bwSpeed: 50,
      resolution: '1200 x 1200 dpi',
      purpose: 'Крупный офис',
      note: 'Высокоскоростное МФУ премиум-класса',
      price: '280 000 — 350 000+ ₽',
      usageCategory: 'enterprise',
      image: '/images/Color_LaserJet_Enterprise_M681dn.webp'
    },
    // LaserJet Pro - Личное использование
    {
      id: 'hp-7',
      model: 'LaserJet Pro M15w',
      brand: 'HP',
      category: 'LaserJet Pro',
      colorSpeed: null,
      bwSpeed: 19,
      resolution: '600 x 600 dpi',
      purpose: 'Домашнее использование',
      note: 'Один из самых компактных',
      price: '14000 ₽',
      usageCategory: 'personal',
      image: '/images/LaserJet _Pro_M15w.jpg'
    },
    {
      id: 'hp-8',
      model: 'LaserJet Pro M104a / M104w',
      brand: 'HP',
      category: 'LaserJet Pro',
      colorSpeed: null,
      bwSpeed: 22,
      resolution: '600 x 600 dpi',
      purpose: 'Индивидуальная работа',
      note: 'Только печать',
      price: '17500 ₽',
      usageCategory: 'personal',
      image: '/images/LaserJetProM104aM104w.jpeg'
    },
    // LaserJet Enterprise - Высоконагруженный офис
    {
      id: 'hp-9',
      model: 'LaserJet Enterprise M608dn',
      brand: 'HP',
      category: 'LaserJet Enterprise',
      colorSpeed: null,
      bwSpeed: 55,
      resolution: '1200 x 1200 dpi',
      purpose: 'Крупный офис',
      note: 'Высокая производительность',
      price: '105000 ₽',
      usageCategory: 'enterprise',
      image: '/images/LaserJetM608.jpg'
    }
  ],
  
  canon: [
    // imageCLASS - Личное/Офисное использование
    {
      id: 'canon-1',
      model: 'imageCLASS LBP622Cdw',
      brand: 'Canon',
      category: 'imageCLASS',
      colorSpeed: 22,
      bwSpeed: 22,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактный цветной принтер',
      price: '32000 ₽',
      usageCategory: 'office',
      image: '/images/imageCLASSLBP622Cdw.jpg'
    },
    {
      id: 'canon-2',
      model: 'imageCLASS MF743Cdw',
      brand: 'Canon',
      category: 'imageCLASS',
      colorSpeed: 28,
      bwSpeed: 28,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Цветное МФУ 4-в-1',
      price: '58000 ₽',
      usageCategory: 'office',
      image: '/images/imageCLASSMF743Cdw.jpg'
    },
    {
      id: 'canon-3',
      model: 'imageCLASS LBP162dw',
      brand: 'Canon',
      category: 'imageCLASS',
      colorSpeed: null,
      bwSpeed: 40,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактный, с дуплексом и Wi-Fi',
      price: '28000 ₽',
      usageCategory: 'personal',
      image: '/images/imageCLASS LBP162dw.jpeg'
    },
    // imageRUNNER - Высоконагруженный офис
    {
      id: 'canon-4',
      model: 'imageRUNNER C3025',
      brand: 'Canon',
      category: 'imageRUNNER',
      colorSpeed: 25,
      bwSpeed: 25,
      resolution: '1200x1200 dpi',
      purpose: 'Средний офис',
      note: 'Цветное МФУ для рабочих групп',
      price: '125000 ₽',
      usageCategory: 'enterprise',
      image: '/images/CANON-IMAGERUNNER-ADVANCE-C3025I.jpg'
    },
    {
      id: 'canon-5',
      model: 'imageRUNNER C5540',
      brand: 'Canon',
      category: 'imageRUNNER',
      colorSpeed: 40,
      bwSpeed: 40,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Мощное МФУ для больших объемов',
      price: '265000 ₽',
      usageCategory: 'enterprise',
      image: '/images/imageRUNNERC5540.jpg'
    }
  ],
  
  kyocera: [
    // ECOSYS - Офисное использование
    {
      id: 'kyocera-1',
      model: 'ECOSYS P5026cdn',
      brand: 'Kyocera',
      category: 'ECOSYS',
      colorSpeed: 26,
      bwSpeed: 26,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Цветной, с дуплексом и сетью',
      price: '78000 ₽',
      usageCategory: 'office',
      image: '/images/ECOSYS_P5026cdn.jpg'
    },
    {
      id: 'kyocera-2',
      model: 'ECOSYS P2035d',
      brand: 'Kyocera',
      category: 'ECOSYS',
      colorSpeed: null,
      bwSpeed: 35,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактный, с дуплексом',
      price: '38000 ₽',
      usageCategory: 'personal',
      image: '/images/KYOCERAEcosysP2035D.jpeg'
    },
    {
      id: 'kyocera-3',
      model: 'ECOSYS P6040cdn',
      brand: 'Kyocera',
      category: 'ECOSYS',
      colorSpeed: 40,
      bwSpeed: 40,
      resolution: '1200x1200 dpi',
      purpose: 'Средний офис',
      note: 'Высокая скорость цветной печати',
      price: '135000 ₽',
      usageCategory: 'office',
      image: '/images/ECOSYS_P6040cdn.jpg'
    },
    // TASKalfa - Высоконагруженный офис
    {
      id: 'kyocera-4',
      model: 'TASKalfa 5554ci',
      brand: 'Kyocera',
      category: 'TASKalfa',
      colorSpeed: 54,
      bwSpeed: 54,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Производительное МФУ',
      price: '325000 ₽',
      usageCategory: 'enterprise',
      image: '/images/TASKalfa5554ci.jpg'
    },
    {
      id: 'kyocera-5',
      model: 'TASKalfa 8054ci',
      brand: 'Kyocera',
      category: 'TASKalfa',
      colorSpeed: 54,
      bwSpeed: 54,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Высокая месячная нагрузка',
      price: '415000 ₽',
      usageCategory: 'enterprise',
      image: '/images/TASKalfa 8054ci.jpg'
    }
  ],
  
  konicaMinolta: [
    // bizhub - Офисное/Высоконагруженное использование
    {
      id: 'konica-1',
      model: 'bizhub C227',
      brand: 'Konica Minolta',
      category: 'bizhub',
      colorSpeed: 22,
      bwSpeed: 22,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактное цветное МФУ',
      price: '85000 ₽',
      usageCategory: 'office',
      image: '/images/bizhubC227.jpg'
    },
    {
      id: 'konica-2',
      model: 'bizhub 227',
      brand: 'Konica Minolta',
      category: 'bizhub',
      colorSpeed: null,
      bwSpeed: 22,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактное МФУ',
      price: '45000 ₽',
      usageCategory: 'personal',
      image: '/images/bizhub_227.jpeg'
    },
    {
      id: 'konica-3',
      model: 'bizhub C758',
      brand: 'Konica Minolta',
      category: 'bizhub',
      colorSpeed: 75,
      bwSpeed: 75,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Профессиональное МФУ для высоких нагрузок',
      price: '480000 ₽',
      usageCategory: 'enterprise',
      image: '/images/bizhub_C758.jpg'
    }
  ]
};

// Категории использования
export const usageCategories = [
  {
    id: 'personal',
    name: 'Личное использование',
    description: 'Идеальные решения для дома и индивидуальной работы',
    features: [
      'Компактные размеры',
      'Экономичность',
      'Простота использования',
      'Беспроводные технологии',
      'Многофункциональность'
    ],
    brands: ['HP', 'Canon', 'Pantum'],
    icon: '🏠'
  },
  {
    id: 'office',
    name: 'Офисное использование',
    description: 'Надежные решения для небольших и средних офисов',
    features: [
      'Высокая производительность',
      'Сетевые возможности',
      'Автоматизация процессов',
      'Экономия расходников',
      'Простое обслуживание'
    ],
    brands: ['HP', 'Kyocera', 'Canon', 'Ricoh'],
    icon: '🏢'
  },
  {
    id: 'enterprise',
    name: 'Высоконагруженный офис',
    description: 'Профессиональные решения для интенсивной печати',
    features: [
      'Высокая скорость печати',
      'Большой ресурс',
      'Продвинутые функции управления',
      'Минимальная стоимость отпечатка',
      'Надежность 24/7'
    ],
    brands: ['Konica Minolta', 'Ricoh', 'Kyocera'],
    icon: '🏭'
  }
];

// Функция для получения принтеров по категории использования
export const getPrintersByUsageCategory = (category) => {
  const allPrinters = [
    ...printersData.hp,
    ...printersData.canon,
    ...printersData.kyocera,
    ...printersData.konicaMinolta
  ];
  
  return allPrinters.filter(printer => printer.usageCategory === category);
};

// Функция для получения всех принтеров
export const getAllPrinters = () => {
  return [
    ...printersData.hp,
    ...printersData.canon,
    ...printersData.kyocera,
    ...printersData.konicaMinolta
  ];
};

// Функция для получения принтера по ID
export const getPrinterById = (id) => {
  const allPrinters = getAllPrinters();
  return allPrinters.find(printer => printer.id === id);
};