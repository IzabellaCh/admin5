import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Рекомендации по характеристикам рабочей станции для ваших задач',
  'Лучшую совместимость комплектующих.',
  'Сборку отдельных комплектующих в единый компьютер или сервер',
  'Установку операционной системы',
  'Доставку до вашего адреса.',
];

const PcServerAssambly = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.pcServerAssambly,
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
          Часто бывают ситуации, когда необходим компьютер с конкретными
          характеристиками. Будь то работа в очень требовательном новом
          программным обеспечением где нужно максимально новое и мощное
          оборудование. Или работа в очень старом и специфичном ПО, которое уже
          не поддерживается современным оборудованием.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Так же бывают случаи, когда необходим сервер, но его покупка слишком
          накладна, и принимается решение использовать менее надежное, но более
          доступное оборудование из пользовательского сегмента.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          В любом из этих случаев мы можем помочь как с подбором комплектующих,
          так и с их сборкой, и даже с их поиском и покупкой.
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

export default PcServerAssambly;
