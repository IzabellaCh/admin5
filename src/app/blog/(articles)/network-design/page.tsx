import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Видеть файловый сервер. (Если у вас он Есть)',
  'Печатали с сетевого принтера.',
  'Пользовались Wi-Fi',
  'И все это без перегрузок и на полной мощности вашего оборудования.',
];

const listTwo: string[] = [
  'Диагностику текущей сети',
  'Карту текущей сети',
  'Рекомендации по обновлению Оборудования',
  'Карту новой сети',
  'Выделенную сеть (Отдельную сеть которую не видят обычные сотрудники) (Если необходимо)',
  'Бесшовную сеть (Все ПК в сети и/или в офисе смогут видеть друг друга) (Если необходимо)',
  'Расчетную стоимость внедрения новой сети.',
];

const NetworkDesign = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.networkDesign,
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
          Данная услуга необходима в том случае если у вас новый офис. Или
          Апгрейд старого офиса. И необходимо что бы все ПК просто работали, а
          пользователи могли:
        </Typography>
        <UlList text={listOne} ulList={true} />
        <Typography variant="body1" color="secondary.main">
          Правильно спроектированная сеть, будь то маленького офиса или большого
          завода, это один из кирпичиков залога бесперебойной работы
          предприятия.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          У нас есть опыт настройки сети как для маленького офиса, где всего три
          ПК и Принтер, Так и большого завода с отдельным парком не только ПК но
          и ТСД и Специализированных Станков.
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
          <UlList text={listTwo} ulList={true} />
        </Stack>
      </Stack>
    </ArticleContainer>
  );
};

export default NetworkDesign;
