import vpnSetupImage from '../../../public/assets/icons/articles-images/image_vpn_setup.jpg';
import { ArticlesRoutes } from '../routesData/routes.data';
import { ETags, TTag } from '@/shared/tagsData/tags.data';

export const commonWidth = '581px';

export enum EServiceSections {
  PC = 'Работа с ПК',
  Servers = 'Сервера',
  Nets = 'Работа с сетями',
}

export type TServiceSection =
  | EServiceSections.PC
  | EServiceSections.Servers
  | EServiceSections.Nets;

export type TLinkedPrice = {
  name: string;
  price: number | string;
};

export type TArticleData = {
  title: string;
  id: string;
  sections?: TServiceSection[];
  price?: number | string;
  tags?: TTag[];
  date?: string;
  linkedPrices?: TLinkedPrice[];
  imageSrc?: string;
  text?: string;
};

export const ALL_ARTICLES: TArticleData[] = [
  {
    title: 'Услуга по настройке VPN сервера',
    id: ArticlesRoutes.vpnSetup,
    sections: [EServiceSections.PC, EServiceSections.Servers],
    price: 1000,
    tags: [ETags.Services],
    date: '28.11.2023',
    imageSrc: vpnSetupImage.src,
    linkedPrices: [
      {
        name: 'Удаленная настройка VPN',
        price: 1000,
      },
      {
        name: 'Установка и настройка VPN с выездом',
        price: 1000,
      },
      {
        name: 'Обслуживание VPN',
        price: 1000,
      },
      {
        name: 'Установка и настройка VPN с выездом',
        price: 1000,
      },
      {
        name: 'Обслуживание VPN',
        price: 1000,
      },
      {
        name: 'Установка и настройка VPN с выездом',
        price: 1000,
      },
      {
        name: 'Обслуживание VPN',
        price: 1000,
      },
    ],
  },
  {
    title: 'Файловый сервер',
    id: ArticlesRoutes.fileServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'WEB сервер',
    id: ArticlesRoutes.webServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Почтовый сервис',
    id: ArticlesRoutes.mailService,
    sections: [EServiceSections.Nets],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Терминальный сервер',
    id: ArticlesRoutes.termialServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Контроллер домена',
    id: ArticlesRoutes.domainController,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер Asterisk\n(IP-Телефония)',
    id: ArticlesRoutes.asteriskServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер Виртуальных машин',
    id: ArticlesRoutes.virtualMachineServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'VDS (Облачный сервер)',
    id: ArticlesRoutes.vds,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер Бекапов (Резервного копирования)',
    id: ArticlesRoutes.backupServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер Видеонаблюдения',
    id: ArticlesRoutes.videoSurveillanceServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер Обновлений',
    id: ArticlesRoutes.updateServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер Печати',
    id: ArticlesRoutes.printServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Удаление Вирусов / Расшифровка файлов',
    id: ArticlesRoutes.virusRemovalDecryptingFiles,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Настройка сети (Настройка роутера)',
    id: ArticlesRoutes.networkSetup,
    sections: [EServiceSections.Nets],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Настройка Mikrotik и Cisco',
    id: ArticlesRoutes.mikrotikCiscoSetup,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сборка ПК / Сервера',
    id: ArticlesRoutes.pcServerAssambly,
    sections: [EServiceSections.Servers, EServiceSections.PC],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Сервер мониторинга (Zabbix)',
    id: ArticlesRoutes.zabbixServer,
    sections: [EServiceSections.Servers],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Установка Программного Обеспечения',
    id: ArticlesRoutes.installingSoftware,
    sections: [EServiceSections.PC],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Upgrade ПК / Установка Доп. устройств',
    id: ArticlesRoutes.pcUpgrade,
    sections: [EServiceSections.PC],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Консультация',
    id: ArticlesRoutes.consultation,
    sections: [
      EServiceSections.PC,
      EServiceSections.Servers,
      EServiceSections.Nets,
    ],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Проектирование сети',
    id: ArticlesRoutes.networkDesign,
    sections: [EServiceSections.Nets],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Настройка точки доступа / WiFi',
    id: ArticlesRoutes.wifiSetup,
    sections: [EServiceSections.Nets],
    price: 1200,
    // tags: [ETags.Services],
    // date: '20.11.2023',
    // linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
];

export const articleFootnotesTemplates = {
  raid: 'RAID – Это технология позволяющая записывать информацию одновременно на несколько дисков. В зависимости от того какой вид RAID выбран можно либо повысить надежность (RAID1), либо скорость (RAID0), либо и то и другое (RAID10).',
  software: 'ПО – Программное Обеспечение.',
  safetyCertificate:
    'Сертификат безопасности – Для того, чтобы злоумышленники не смогли воровать личные данные пользователей (Логины, Пароли, Данные карт), Придумали Сертификаты безопасности Который каждый сайт получает и обновляет раз в несколько месяцев.',
  spam: 'SPAM Адреса – Адреса почтовых ящиков, с которых отправляются массовые сообщения разным адресатам (Реклама Вирусы и т.д.)',
};
