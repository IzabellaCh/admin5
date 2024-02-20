import {
  ENavigationLinksName,
  ENavigationLinksHref,
} from '@/shared/navigationData/navigation.data';

import { ELiterals } from '@/types/types';

export type HeaderLinkData = {
  label: string;
  href: string;
  type: ELiterals.Link | ELiterals.Button;
  includesPages?: string[];
};

type HeaderLinksData = HeaderLinkData[];

export const HEADER_LINKS_DATA: HeaderLinksData = [
  {
    label: ENavigationLinksName.Cost,
    href: ENavigationLinksHref.Cost,
    type: ELiterals.Link,
  },
  {
    label: ENavigationLinksName.Why,
    href: ENavigationLinksHref.Why,
    type: ELiterals.Link,
  },
  {
    label: ENavigationLinksName.Services,
    href: ENavigationLinksHref.Services,
    type: ELiterals.Button,
    includesPages: [
      ENavigationLinksHref.PC,
      ENavigationLinksHref.Servers,
      ENavigationLinksHref.Nets,
    ],
  },
  {
    label: ENavigationLinksName.About,
    href: ENavigationLinksHref.About,
    type: ELiterals.Link,
  },
  {
    label: ENavigationLinksName.Blog,
    href: ENavigationLinksHref.Blog,
    type: ELiterals.Link,
  },
];
