export enum ETags {
  All = '',
  Services = 'услуги',
  Clients = 'клиенты',
  Result = 'результат',
  DoItYourself = 'сделай сам',
}

export type TTag =
  | ETags.All
  | ETags.Services
  | ETags.Clients
  | ETags.Result
  | ETags.DoItYourself
  | string;
