import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Консультацию по выбранному вами вопросу от специалиста широкого и/или узкого профиля.',
];

const Consultation = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.consultation,
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
          Может случится так что ваш запрос настолько уникален что не подходит
          ни под одну из наших категорий. На данный случай мы предусмотрели
          возможность консультаций с нашими специалистами.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          У нас работают профессионалы своего дела и каждый специалист
          компетентен в своей отрасли. Вы всегда можете задать свой вопрос в
          форме обратной связи и мы обязательно свяжемся с вами.
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

export default Consultation;
