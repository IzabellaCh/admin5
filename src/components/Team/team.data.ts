import AvatarAnton from '../../../public/assets/icons/team-members/avatar_Anton.jpg';
import AvatarAnna from '../../../public/assets/icons/team-members/avatar_Anna.jpg';
import AvatarBogdan from '../../../public/assets/icons/team-members/avatar_Bogdan.jpg';
import AvatarGeorgii from '../../../public/assets/icons/team-members/avatar_Georgii.jpg';

export type TTeamMember = {
  name: string;
  position: string;
  avatar: {
    src: string;
    alt: string;
  };
  text: string;
};

export const TEAM_MEMBERS: TTeamMember[] = [
  {
    name: 'Антон Сергеевич Базуленков',
    position: 'Директор компании',
    avatar: {
      src: AvatarAnton.src,
      alt: 'Фото Антона.',
    },
    text: 'Для меня it структура клиентов — это единый организм, в котором все должно работать точно и слаженно, в этом успех.',
  },
  {
    name: 'Анна',
    position: 'Менеджер по качеству',
    avatar: {
      src: AvatarAnna.src,
      alt: 'Фото Анны.',
    },
    text: 'Я смотрю на нашу работу, как покупатель. Уверена, если клиент имеет возможность не вдаваться в детали процессов, значит мы делаем нашу работу хорошо, именно поэтому я веду переговоры с подрядчиками и выступаю менеджером по внедрению проектов.',
  },
  {
    name: 'Богдан',
    position: 'Системный администратор',
    avatar: {
      src: AvatarBogdan.src,
      alt: 'Фото Богдана.',
    },
    text: 'Мир технологий меняется со скоростью света! Считаю, что для успешной работы нужно идти в ногу с технологиями, процессами автоматизации.',
  },
  {
    name: 'Георгий',
    position: 'Системный администратор',
    avatar: {
      src: AvatarGeorgii.src,
      alt: 'Фото Георгия.',
    },
    text: 'Я уверен в том, что упорядоченность и системность снижает вероятность зависаний и уменьшит время в простоях.',
  },
];
