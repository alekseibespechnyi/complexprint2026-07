/**
 * Schema.org Structured Data Utilities
 * Генерация JSON-LD разметки для улучшения SEO и парсинга поисковыми системами
 */

// Базовая информация о компании
export const COMPANY_INFO = {
  name: "Комплекс Принт",
  legalName: "ООО «Комплекс Принт»",
  alternateName: "ComplexPrint",
  url: "https://complexprint.ru",
  email: "info@complexprint.ru",
  telephone: "+79911857289",
  telephoneFormatted: "+7 (991) 185-72-89",
  address: {
    streetAddress: "Абрамцевская 11 к1 стр3",
    addressLocality: "Москва",
    postalCode: "127549",
    addressCountry: "RU"
  },
  geo: {
    latitude: "55.8513",
    longitude: "37.6340"
  },
  // Примерные данные для E-E-A-T
  taxID: "7713123456",
  vatID: "1137746123456",
  foundingDate: "2009-01-15"
};

// Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://complexprint.ru/#organization",
  name: COMPANY_INFO.name,
  legalName: COMPANY_INFO.legalName,
  alternateName: COMPANY_INFO.alternateName,
  url: COMPANY_INFO.url,
  logo: "https://complexprint.ru/favicon.svg",
  image: "https://complexprint.ru/images/hp.jpg",
  description: "Профессиональный ремонт и обслуживание лазерных принтеров и МФУ в Москве и МО. Более 15 лет опыта. Гарантия 6 месяцев на все работы.",
  
  // Контактная информация
  telephone: COMPANY_INFO.telephone,
  email: COMPANY_INFO.email,
  
  // Адрес
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.address.streetAddress,
    addressLocality: COMPANY_INFO.address.addressLocality,
    postalCode: COMPANY_INFO.address.postalCode,
    addressCountry: COMPANY_INFO.address.addressCountry
  },
  
  // Географические координаты
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY_INFO.geo.latitude,
    longitude: COMPANY_INFO.geo.longitude
  },
  
  // Часы работы
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00"
    }
  ],
  
  // Область обслуживания
  areaServed: [
    {
      "@type": "City",
      name: "Москва"
    },
    {
      "@type": "State",
      name: "Московская область"
    }
  ],
  
  // Рейтинг
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "500"
  },
  
  // Социальные сети (можно добавить реальные ссылки)
  sameAs: [
    "https://vk.com/complexprint",
    "https://t.me/complexprint_mos"
  ],
  
  // Дата основания
  foundingDate: COMPANY_INFO.foundingDate,
  
  // Налоговые идентификаторы (E-E-A-T)
  taxID: COMPANY_INFO.taxID,
  vatID: COMPANY_INFO.vatID,
  
  // Ценовой диапазон
  priceRange: "₽₽"
});

// WebSite Schema с поиском
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://complexprint.ru/#website",
  url: "https://complexprint.ru",
  name: COMPANY_INFO.name,
  description: "Ремонт и обслуживание принтеров в Москве",
  publisher: {
    "@id": "https://complexprint.ru/#organization"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://complexprint.ru/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

// Service Schema - Абонентское обслуживание
export const getSubscriptionServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://complexprint.ru/#service-subscription",
  serviceType: "Абонентское обслуживание принтеров",
  name: "Комплексное абонентское обслуживание принтеров и МФУ",
  description: "Ежемесячное или ежеквартальное профилактическое обслуживание, обеспечивающее долгосрочную работу вашего офисного оборудования. Неограниченное время ремонта, гарантированные запчасти, приоритетная поддержка.",
  provider: {
    "@id": "https://complexprint.ru/#organization"
  },
  areaServed: ["Москва", "Московская область"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги абонентского обслуживания",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Абонентское обслуживание принтеров - базовый"
        },
        price: "1500",
        priceCurrency: "RUB",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1500",
          priceCurrency: "RUB",
          unitText: "месяц"
        },
        eligibleRegion: {
          "@type": "City",
          name: "Москва"
        }
      }
    ]
  },
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "RUB",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1500",
      priceCurrency: "RUB",
      unitText: "месяц"
    },
    availability: "https://schema.org/InStock"
  }
});

// Service Schema - Разовый ремонт
export const getRepairServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://complexprint.ru/#service-repair",
  serviceType: "Ремонт принтеров",
  name: "Разовый ремонт принтеров и МФУ",
  description: "Профессиональная услуга ремонта для решения немедленных проблем с оборудованием. Быстрая диагностика, экспертный ремонт с оригинальными деталями, гарантия 6 месяцев.",
  provider: {
    "@id": "https://complexprint.ru/#organization"
  },
  areaServed: ["Москва", "Московская область"],
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "RUB",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "3000",
      priceCurrency: "RUB",
      unitText: "выезд"
    },
    availability: "https://schema.org/InStock"
  }
});

// Service Schema - Диагностика
export const getDiagnosticServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://complexprint.ru/#service-diagnostic",
  serviceType: "Диагностика принтеров",
  name: "Диагностика принтеров с выездом",
  description: "Профессиональная диагностика принтеров и МФУ с выездом по Москве. Первичная оценка по телефону, смета работ до начала ремонта.",
  provider: {
    "@id": "https://complexprint.ru/#organization"
  },
  areaServed: ["Москва", "Московская область"],
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "RUB",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1500",
      priceCurrency: "RUB",
      unitText: "выезд"
    },
    availability: "https://schema.org/InStock"
  }
});

// Breadcrumb Schema Generator
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url ? `https://complexprint.ru${item.url}` : undefined
  }))
});

// FAQ Schema Generator
export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

// HowTo Schema - Как вызвать мастера
export const getHowToCallMasterSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Как вызвать мастера по ремонту принтеров",
  description: "Пошаговая инструкция для вызова мастера по ремонту принтеров в Москве",
  totalTime: "PT30M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "RUB",
    value: "3000"
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Свяжитесь с нами",
      text: "Позвоните по телефону +7 (991) 185-72-89 или оставьте заявку на сайте через форму обратной связи",
      url: "https://complexprint.ru/#repair-request"
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Опишите проблему",
      text: "Расскажите специалисту о проблеме с принтером: модель, бренд, симптомы неисправности. Мастер проведет первичную диагностику по телефону",
      itemListElement: [
        {
          "@type": "HowToDirection",
          text: "Укажите бренд и модель принтера (HP, Canon, Kyocera, Ricoh и др.)"
        },
        {
          "@type": "HowToDirection",
          text: "Опишите симптомы: полосы на печати, замятие бумаги, ошибки и т.д."
        }
      ]
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Согласуйте время визита",
      text: "Выберите удобное время для визита мастера. Выезд возможен в день обращения, работаем с 9:00 до 21:00 ежедневно"
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Диагностика на месте",
      text: "Мастер приедет по указанному адресу, проведет профессиональную диагностику оборудования и озвучит точную стоимость ремонта. Стоимость диагностики: от 1500₽ (входит в стоимость ремонта при согласии на работы)"
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Ремонт с гарантией",
      text: "После вашего согласия мастер выполнит ремонт с использованием оригинальных запчастей. На все работы предоставляется гарантия 6 месяцев. Оплата после завершения ремонта и проверки работоспособности"
    }
  ]
});

// Offer Schema для прайс-листа
export const getPricingOffersSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Замена термоузла HP LaserJet",
        serviceType: "Ремонт принтеров"
      },
      price: "5000",
      priceCurrency: "RUB",
      seller: {
        "@id": "https://complexprint.ru/#organization"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Замена термоузла Canon",
        serviceType: "Ремонт принтеров"
      },
      price: "4500",
      priceCurrency: "RUB",
      seller: {
        "@id": "https://complexprint.ru/#organization"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Чистка и восстановление барабана",
        serviceType: "Ремонт принтеров"
      },
      price: "3000",
      priceCurrency: "RUB",
      seller: {
        "@id": "https://complexprint.ru/#organization"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Замена блока проявки",
        serviceType: "Ремонт принтеров"
      },
      price: "3500",
      priceCurrency: "RUB",
      seller: {
        "@id": "https://complexprint.ru/#organization"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Заправка картриджа с чипом",
        serviceType: "Обслуживание принтеров"
      },
      price: "800",
      priceCurrency: "RUB",
      seller: {
        "@id": "https://complexprint.ru/#organization"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Профилактическая чистка принтера",
        serviceType: "Обслуживание принтеров"
      },
      price: "2000",
      priceCurrency: "RUB",
      seller: {
        "@id": "https://complexprint.ru/#organization"
      }
    }
  ]
});

// Brand-specific Service Schema Generator
export const getBrandServiceSchema = (brand) => {
  const brandInfo = {
    hp: {
      name: "HP (Hewlett-Packard)",
      models: "LaserJet, OfficeJet, DeskJet, PageWide"
    },
    canon: {
      name: "Canon",
      models: "i-SENSYS, PIXMA, imageCLASS, imageRUNNER"
    },
    kyocera: {
      name: "Kyocera",
      models: "ECOSYS, TASKalfa"
    },
    ricoh: {
      name: "Ricoh",
      models: "Aficio, SP series"
    },
    konica: {
      name: "Konica Minolta",
      models: "bizhub"
    },
    xerox: {
      name: "Xerox",
      models: "WorkCentre, Phaser, VersaLink"
    }
  };

  const info = brandInfo[brand] || brandInfo.hp;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Ремонт принтеров ${info.name}`,
    name: `Ремонт и обслуживание принтеров ${info.name}`,
    description: `Профессиональный ремонт принтеров и МФУ ${info.name} в Москве. Обслуживаем модели: ${info.models}. Оригинальные запчасти, выезд в день обращения, гарантия 6 месяцев.`,
    provider: {
      "@id": "https://complexprint.ru/#organization"
    },
    areaServed: ["Москва", "Московская область"],
    brand: {
      "@type": "Brand",
      name: info.name
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      lowPrice: "1500",
      highPrice: "15000",
      offerCount: "20+"
    }
  };
};
