import {
  ENavigationLinksName,
  ENavigationLinksHref,
} from '@/shared/navigationData/navigation.data';

export type FooterLinkData = {
  label: string;
  href: string;
};

type FooterLinksData = FooterLinkData[];

export const FOOTER_LINKS_DATA: FooterLinksData = [
  {
    label: ENavigationLinksName.Cost,
    href: ENavigationLinksHref.Cost,
  },
  {
    label: ENavigationLinksName.Why,
    href: ENavigationLinksHref.Why,
  },
  {
    label: ENavigationLinksName.About,
    href: ENavigationLinksHref.About,
  },
  {
    label: ENavigationLinksName.PC,
    href: ENavigationLinksHref.PC,
  },
  {
    label: ENavigationLinksName.Servers,
    href: ENavigationLinksHref.Servers,
  },
  {
    label: ENavigationLinksName.Nets,
    href: ENavigationLinksHref.Nets,
  },
];
