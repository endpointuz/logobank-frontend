export const titles = {
  home: {
    title: () => 'Logobank | Самая обновляемая коллекция логотипов в векторе',
    description: () => 'Здесь Вы можете скачать логотипы известных фирм, предприятий и организаций Узбекистана в полпулярных форматах .cdr .png .eps',
    keywords: () => 'логотипы, вектор, узбекистан, компании, pdf, png, eps, высокое качество',
  },
  about: {
    title: () => 'О сервисе | Logobank',
    description: () => 'Данный сервис создан исключительно в информационных целях профессиональной командой разработчиков Endpoint.',
    keywords: () => 'логотипы, вектор, узбекистан, компании, pdf, png, eps, высокое качество',
  },
  singleLogo: {
    title: (logoName) => `Логотип компании ${logoName} в формате PNG, EPS, CDR | Logobank`,
    description: (logoName) => `Логотип компании ${logoName} в хорошем качестве. Вы можете скачать в форматах PNG, EPS, CDR`,
    keywords: (logoName) => `логотип, компания Узбекистана, ${logoName}, высокое качество, PNG, EPS, CDR`,
  },
  singleCategory: {
    title: (categoryName) => `Категория ${categoryName} | Logobank`,
    description: (categoryName) => `Все логотипы категории ${categoryName} в хорошем качестве. Вы можете скачать в форматах PNG, EPS, CDR`,
    keywords: (categoryName) => `логотип, компания Узбекистана, ${categoryName}, высокое качество, PNG, EPS, CDR, категории`,
  },
};

export const opengraph = {
  home: 'Logobank | Самая обновляемая коллекция логотипов в векторе',
  singleLogo: {
    title: (logoName) => `Logobank | Логотип компании ${logoName} в формате PNG, EPS, CDR`,
    description: (logoName) => `Вы можете скачать логотип компании ${logoName} в форматах PNG, EPS, CDR.`,
    keywords: (logoName) => `логотип, компания Узбекистана, ${logoName}, высокое качество, PNG, EPS, CDR`,
  },
};
