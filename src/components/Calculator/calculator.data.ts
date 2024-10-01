export type TariffType = {
  name: string;
  pc1: number;
  pc5: number;
  pc10: number;
  windowServer: number;
  linuxServer: number;
  accessPoint: number;
  nas: number;
  serverRool: number;
  reactionTime: string;
  scheduledDeparture: number;
  emergencyDeparture: number;
  consultations: string;
};

export type TariffArray = TariffType[];

export const AllTariffs = [
  {
    name: 'Стандартный',
    pc1: 1000,
    pc5: 900,
    pc10: 850,
    windowServer: 2000,
    linuxServer: 2500,
    accessPoint: 900,
    nas: 900,
    serverRool: 1000,
    reactionTime: '1 час',
    scheduledDeparture: 1,
    emergencyDeparture: 2,
    consultations: 'не\u00A0ограничено',
  },
  {
    name: 'Базовый',
    pc1: 1100,
    pc5: 1000,
    pc10: 900,
    windowServer: 2500,
    linuxServer: 3000,
    accessPoint: 700,
    nas: 1200,
    serverRool: 1500,
    reactionTime: '30 минут',
    scheduledDeparture: 2,
    emergencyDeparture: 4,
    consultations: 'не\u00A0ограничено',
  },
];
