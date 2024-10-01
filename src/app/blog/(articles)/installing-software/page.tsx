import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Диагностику Технической возможности установки ПО на ваш ПК',
  'Рекомендации для корректной установки ПО',
  '*Установку требуемого софта на ваш ПК',
  'Настройку VM (для старого ПО)',
  'Установку OS на VM (для старого ПО)',
];

const InstallingSoftware = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.installingSoftware,
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
          Часто бывает, что для работы необходим какой-либо специфичный софт.
          Или он не поддерживается на современных OS, Или поддерживается, но
          устанавливается с ошибкой.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Наши специалисты имеют многогранный опыт работы с разносторонним
          Программным обеспечиванием, от стоматологического софта до
          конструкторского.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Будем честны. Не каждую программу возможно установить на каждый ПК. Но
          если это возможно мы справимся и поможем вам в решении данного
          вопроса.
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

export default InstallingSoftware;
