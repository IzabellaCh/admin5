import vpnSetupImage from '../../../public/assets/icons/articles-images/image_vpn_setup.jpg';

import { ETags, TTag } from '@/shared/tagsData/tags.data';

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

const LINKED_PRICES: TLinkedPrice[] = [
  {
    name: 'связанна услуга1',
    price: 1200,
  },
  {
    name: 'связанна услуга2',
    price: 1300,
  },
  {
    name: 'связанна услуга1',
    price: 1200,
  },
  {
    name: 'связанна услуга2',
    price: 1300,
  },
  {
    name: 'связанна услуга3',
    price: 1100,
  },
  {
    name: 'связанна услуга4',
    price: 'от 1050',
  },
  {
    name: 'связанна услуга5',
    price: 1400,
  },
];

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
    id: 'vpn-setup',
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
    title: 'Статья ПК и Сервера',
    id: '001',
    sections: [EServiceSections.PC, EServiceSections.Servers],
    price: 1200,
    tags: [ETags.Services],
    date: '20.11.2023',
    linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Статья ПК1',
    id: '002',
    sections: [EServiceSections.PC, EServiceSections.Servers],
    price: 'от 1500',
    tags: [ETags.Services],
    date: '21.11.2023',
    linkedPrices: [LINKED_PRICES[2]],
  },
  {
    title: 'Статья ПК2',
    id: '003',
    sections: [EServiceSections.PC, EServiceSections.Servers],
    price: 1300,
    tags: [ETags.Services],
    date: '19.11.2023',
  },
  {
    title: 'Статья Сервера1',
    id: '004',
    sections: [EServiceSections.Servers],
    price: 1200,
    tags: [ETags.Services],
    date: '20.11.2023',
    linkedPrices: [LINKED_PRICES[0], LINKED_PRICES[1]],
  },
  {
    title: 'Статья Сервера и ПК2',
    id: '005',
    sections: [EServiceSections.Servers, EServiceSections.PC],
    price: 1500,
    tags: [ETags.Services],
    date: '21.11.2023',
  },
  {
    title: 'Статья Сервера2',
    id: '006',
    sections: [EServiceSections.Servers],
    price: 1300,
    tags: [ETags.Services],
    date: '19.11.2023',
  },
  {
    title:
      'Статья Сервера, ПК, работа с сетями длинный текст длинный текс длинный текст',
    id: '007',
    sections: [
      EServiceSections.Servers,
      EServiceSections.Nets,
      EServiceSections.PC,
    ],
    price: 1700,
    tags: [ETags.Services],
    date: '19.11.2023',
  },
  {
    title: 'Статья работа с сетями1',
    id: '008',
    sections: [EServiceSections.Nets, EServiceSections.Servers],
    price: 1000,
    tags: [ETags.Services],
    date: '19.11.2023',
  },
  {
    title: 'Статья работа с сетями2',
    id: '009',
    sections: [EServiceSections.Nets, EServiceSections.Servers],
    price: 1000,
    tags: [ETags.Services],
    date: '19.11.2023',
  },
  {
    title: 'Статья работа с сетями и ПК',
    id: '010',
    sections: [
      EServiceSections.Nets,
      EServiceSections.PC,
      EServiceSections.Servers,
    ],
    price: 'от 1400',
    tags: [ETags.Services],
    date: '19.11.2023',
  },
  {
    title: 'Статья работа с сетями и сервеа',
    id: '011',
    sections: [EServiceSections.Nets, EServiceSections.Servers],
    price: 1650,
    tags: [ETags.Services],
    date: '17.11.2023',
  },
];
