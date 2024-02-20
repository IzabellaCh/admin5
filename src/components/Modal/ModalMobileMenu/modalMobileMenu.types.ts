export enum EMenu {
  MainMenu,
  ServicesMenu,
  PCMenu,
  ServersMenu,
  NetsMenu,
}

export type TVisibleMenu =
  | EMenu.MainMenu
  | EMenu.ServicesMenu
  | EMenu.PCMenu
  | EMenu.ServersMenu
  | EMenu.NetsMenu;
