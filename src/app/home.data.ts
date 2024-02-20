import {
  ENavigationLinksName,
  ENavigationLinksHref,
} from '@/shared/navigationData/navigation.data';

import { ELiterals } from '@/types/types';

export type HomeTitleData = {
  title: string;
  href?: string;
  type: ELiterals.Link | ELiterals.Text;
};

type HomeTitlesData = HomeTitleData[];

export const HOME_TITLES: HomeTitlesData = [
  {
    title: 'Как мы работаем',
    type: ELiterals.Text,
  },
  {
    title: ENavigationLinksName.Why,
    href: ENavigationLinksHref.Why,
    type: ELiterals.Link,
  },
  {
    title: ENavigationLinksName.Services,
    href: ENavigationLinksHref.Services,
    type: ELiterals.Link,
  },
  {
    title: 'Калькулятор цен',
    href: ENavigationLinksHref.Cost,
    type: ELiterals.Link,
  },
  {
    title: ENavigationLinksName.About,
    href: ENavigationLinksHref.About,
    type: ELiterals.Link,
  },
  {
    title: 'Отзывы',
    type: ELiterals.Text,
  },
  {
    title: 'На этой неделе:',
    type: ELiterals.Text,
  },
];

export const SUBTITLES = [
  'По цене меньше зарплаты системного администратора',
  'Поддержка 24/7 без выходных, больничных и семейных обстоятельств',
];

export const WYU_US_TEXT = [
  'Без качественного ИТ-сервиса невозможна полноценная работа ни одной компании, работающей с компьютерной техникой. Готовы ли доверить такую важную сферу новичкам? Уверены, что нет.',
  'Наша компания обладает штатом высоко квалифицированных ИТ-специалистов с большим опытом работы и знаниями в области новых прогрессивных технологий и методик устранения информационно-технических проблем.',
];

export const ABOUT_US_TEXT = [
  'Для нас важно:',
  '— говорить на языке клиента (чтобы было понятно, что мы делаем и зачем)',
  '— решать вопросы комплексно (чтобы исключить сбои в работе отдельных частей)',
  '— каждый наш сотрудник – эксперт в своей области (чтобы Вы получали высококвалифицированные консультации)',
];
