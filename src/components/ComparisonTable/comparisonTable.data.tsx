type TComparisionData = { title: string; paragraph: string };

export enum EComparisionPoints {
  Expense = 'Затраты',
  Stability = 'Стабильность',
  Experience = 'Опыт',
  Documentation = 'Документация',
  Security = 'Безопасность',
}

export type TAllTableInfoItem = {
  point: string;
  ourCompany: TComparisionData;
  youEmployee: TComparisionData;
};

export const TABLE_FULL_DATA: TAllTableInfoItem[] = [
  {
    point: EComparisionPoints.Expense,
    ourCompany: {
      title: 'Высокая стоимость',
      paragraph:
        'Зарплата высококвалифицированного штатного сотрудника выше, чем наши услуги.',
    },
    youEmployee: {
      title: 'Высокая стоимость',
      paragraph:
        'Зарплата высококвалифицированного штатного сотрудника выше, чем наши услуги.',
    },
  },
  {
    point: EComparisionPoints.Stability,
    ourCompany: {
      title: 'Связь 24/7',
      paragraph:
        'Если ваш бизнес работает круглосуточно, и инженер должен быть доступен всегда – мы всегда на связи.',
    },
    youEmployee: {
      title: 'Не работают ночью/выходные',
      paragraph:
        'Штатный сотрудник должен отдыхать и может не выходить на связь в свое не рабочее время. Может внезапно заболеть, уволиться.',
    },
  },
  {
    point: EComparisionPoints.Experience,
    ourCompany: {
      title: 'Целая команда IT Инженеров',
      paragraph:
        'У нас большой штат профессиональных  специалистов, благодаря этому профиль нашей компетенции выше.',
    },
    youEmployee: {
      title: 'Один системный администратор',
      paragraph: 'Имеет определенный набор навыков, может чего-то не знать.',
    },
  },
  {
    point: EComparisionPoints.Documentation,
    ourCompany: {
      title: 'Подробная документация',
      paragraph:
        'По каждому клиенту мы ведем подробную документацию, чтобы любой наш сотрудник мог помочь Вам с решением вашей проблемы.',
    },
    youEmployee: {
      title: 'Отсутствие документации',
      paragraph:
        'Обычно штатные сотрудники документацию не ведут или ведут не систематично. Если придет новый сотрудник, ему придется долго самому изучать информацию.',
    },
  },
  {
    point: EComparisionPoints.Security,
    ourCompany: {
      title: 'Менеджер паролей',
      paragraph:
        'Все пароли, которые нам необходимы для администрирования, мы храним только в защищенном виде.',
    },
    youEmployee: {
      title: 'Текстовый документ',
      paragraph:
        'Большинство штатных специалистов хранят пароли в текстовом документе 😟',
    },
  },
];
