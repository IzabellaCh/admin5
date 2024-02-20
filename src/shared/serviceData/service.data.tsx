import {
  ENavigationLinksName,
  ENavigationLinksHref,
} from '@/shared/navigationData/navigation.data';

import {
  ALL_ARTICLES,
  TArticleData,
  EServiceSections,
} from '@/shared/articlesData/articles.data';

export type ServiceData = {
  title: string;
  route: string;
  fullDescription: string[];
  shortDescription: string;
  commonImageType: string;
  shadowImageType: string;
  imageSizeXS: string;
  imageSizeS: string;
  imageSizeM: string;
  imageSizeL: string;
  articles: TArticleData[];
};

type Services = ServiceData[];

export const SERVICES: Services = [
  {
    title: ENavigationLinksName.PC,

    route: ENavigationLinksHref.PC,
    fullDescription: [
      'Наши клиенты знают, что надежное функционирование ПК – это основа продуктивной работы бизнеса. Любые проблемы с компьютерами могут стать причиной снижения производительности и нанести ущерб вашему бизнесу.',
      'Мы предлагаем индивидуальный подход к каждому нашему клиенту, чтобы наши услуги соответствовали их конкретным потребностям и бюджету. Наша команда опытных специалистов всегда готова быстро и качественно решить любую проблему с вашими компьютерами.',
    ],
    shortDescription:
      'Наш опытный персонал обеспечит бесперебойную работу ваших персональных компьютеров, настраивая оптимальную производительность и безопасность данных. Узнайте больше о наших услугах, посетив страницу с тарифами',
    commonImageType: 'icon-service-pc',
    shadowImageType: 'icon-service-pc-shadow',
    imageSizeXS: '188px',
    imageSizeS: '246px',
    imageSizeM: '256px',
    imageSizeL: '315px',
    articles: ALL_ARTICLES.filter(
      (article) => article.sections?.includes(EServiceSections.PC),
    ),
  },
  {
    title: ENavigationLinksName.Servers,
    route: ENavigationLinksHref.Servers,
    fullDescription: [
      'Компьютерные сервера являются неотъемлемой частью современного бизнеса. Они позволяют хранить и обрабатывать огромные объемы данных, обеспечивают доступ к корпоративным приложениям и ресурсам, и помогают сотрудникам в эффективной работе. Однако, любые сбои или проблемы с серверами могут сильно повлиять на бизнес-процессы и привести к серьезным финансовым потерям.',
    ],
    shortDescription:
      'Наш опытный персонал готов решать любые технические задачи, чтобы ваша серверная инфраструктура работала на максимальной отдачей. Посетите нашу страницу с тарифами, чтобы узнать больше о наших услугах по обслуживанию серверов и гарантировать стабильность вашего бизнеса в цифровой среде.',
    commonImageType: 'icon-service-servers',
    shadowImageType: 'icon-service-servers-shadow',
    imageSizeXS: '161px',
    imageSizeS: '206px',
    imageSizeM: '243px',
    imageSizeL: '337px',
    articles: ALL_ARTICLES.filter(
      (article) => article.sections?.includes(EServiceSections.Servers),
    ),
  },
  {
    title: ENavigationLinksName.Nets,
    route: ENavigationLinksHref.Nets,
    fullDescription: [
      'Мы предлагаем услуги по настройке беспроводной сети для вашего бизнеса. Наша команда профессионалов имеет богатый опыт в области создания и обслуживания сетей, что позволяет нам решать самые сложные задачи.',
      'Мы готовы решить любые задачи, связанные с настройкой проводной и беспроводной сети, включая выбор и установку необходимого оборудования, настройку сетевой конфигурации, проверку скорости сети и обеспечение безопасности данных.',
    ],
    shortDescription:
      'Также создаем, настраиваем и поддерживаем сетевые инфраструктуры, обеспечивая стабильное соединение, безопасность данных и максимальную производительность. Убедитесь сами, перейдя на нашу страницу с тарифами, где вы найдете оптимальные варианты для ваших потребностей в сфере сетевых технологий.',
    commonImageType: 'icon-service-nets',
    shadowImageType: 'icon-service-nets-shadow',
    imageSizeXS: '141px',
    imageSizeS: '166px',
    imageSizeM: '230px',
    imageSizeL: '339px',
    articles: ALL_ARTICLES.filter(
      (article) => article.sections?.includes(EServiceSections.Nets),
    ),
  },
];
