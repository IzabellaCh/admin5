import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Надежную стабильную локальную сеть',
  'Безопасное соединение с Интернетом',
  'Защищенную локальную сеть',
  'Пакет новых технологий.',
  'Резервную копию настроек маршрутизаторов на случай выхода их из строя.',
  'Рекомендации для улучшения сети',
];

const MikrotikCiscoSetup = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.mikrotikCiscoSetup,
  );

  if (currentArticle === undefined) return null;
  return (
    <ArticleContainer article={currentArticle} commonWidth={commonWidth}>
      <Stack
        rowGap="25px"
        maxWidth={commonWidth}
        sx={{
          pb: '77px',
          '@media (max-width:600px)': {
            pb: '25px',
          },
        }}
      >
        <Typography
          variant="h2"
          color="secondary.main"
          maxWidth="400px"
          sx={{
            '@media (max-width:600px)': {
              fontSize: 22,
            },
          }}
        >
          Когда это нужно?
        </Typography>
        <Typography variant="body1" color="secondary.main">
          На рынке сетевых устройств как и на любом другом рынке есть устройства
          для пользовательского и домашнего сегмента, а есть для
          профессионального. Разность сегментов заключается в качестве,
          стабильности и огромной разницей и гибкостью дополнительных настроек.
          Так в устройствах Mikrotik из под коробки есть возможность настройки
          мощного и гибкого firewall, есть возможность настройки VPN разных
          технологий. Так же устройства профессионального и
          полупрофессионального сегмента чаще получают патчи безопасности и
          новые обновления. Штат наших специалистов имеет большой опыт работы с
          различным профессиональным оборудованием и с удовольствием поможет вам
          в настройке и построении сети на базе профессионального оборудования.
        </Typography>
      </Stack>
      <ArticleImage src={currentArticle.imageSrc} />
      <Stack
        alignItems="center"
        width="100%"
        pb="77px"
        position="relative"
        sx={{
          rowGap: '77px',
          '@media (max-width:600px)': {
            rowGap: '56px',
          },
        }}
      >
        <Stack rowGap="25px" maxWidth={commonWidth}>
          <Typography
            variant="h2"
            color="secondary.main"
            sx={{
              '@media (max-width:600px)': {
                fontSize: 22,
              },
            }}
          >
            А что я получу?
          </Typography>
          <Typography variant="body1" color="secondary.main">
            При заказе услуги вы получите*(Если возможно, если необходимо):
          </Typography>
          <UlList text={listOne} ulList={true} />
        </Stack>
      </Stack>
    </ArticleContainer>
  );
};

export default MikrotikCiscoSetup;
