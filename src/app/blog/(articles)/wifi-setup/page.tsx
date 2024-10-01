import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Диагностику текущей сети',
  'Карту текущей сети',
  'Рекомендации по обновлению Оборудования',
  'Дополнительную точку доступа WiFi в нужном вам месте.',
  'Бесшовную Wi-Fi Сеть*',
];

const WifiSetup = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.wifiSetup,
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
          У вас уже есть настроенный роутер или модем (Уже есть интернет в
          офисе), но не хватает зоны покрытия WiFi.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Или у Вас маленькое пространство где еще нет сети, и большая сеть вам
          не нужна, но нужен доступ в интернет.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          В зависимости от вашего оборудования можно предложить либо настройку
          бесшовной сети wifi, либо новую точку доступа. С подключением или без
          подключения дополнительных устройств по проводному соединению.
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
          <UlList text={listOne} ulList={true} />
        </Stack>
      </Stack>
    </ArticleContainer>
  );
};

export default WifiSetup;
