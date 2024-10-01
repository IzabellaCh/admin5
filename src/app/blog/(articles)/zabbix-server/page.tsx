import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Подбор характеристик сервера для мониторинга с учетом уникальности вашей сети и парка ПК.',
  'Установленную последнюю версию OS для сервера',
  'Установку Агентов Zabbix на Хосты',
  'Развернутую и настроенную на стандартные Alert`ы систему мониторинга Zabbix',
  'При необходимости Настроенные под лично ваши нужды Alert`ы',
];

const ZabbixServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.zabbixServer,
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
          Если в вашей компании много Компьютеров и / или серверов, то уследить
          за всем невозможно. То место на диске у кого-то закончится то, у
          какого-нибудь важного сервера появится критическая ошибка.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Внедрение сервера Мониторинга Zabbix поможет решить эту и многие
          другие проблемы. Данный сервис можно настроить на уведомления
          практически на любое действие в вашей сети. Будь то зависшая сессия в
          1с или Несанкционированный доступ в сеть.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Данный сервис нужен далеко не всем. К примеру, если у вас до 20
          компьютеров, то чаще всего он будет избыточен. Верно и обратное, если
          у вас уже большой парк компьютеров и серверов, то отдельный сервер
          мониторинга событий просто жизненно необходим.
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

export default ZabbixServer;
