import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { Table, TTableRowList } from '@/components/Table/Table';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Проверяем работоспособность принтеров подключенных к системе.',
  'Обновляем ПО для получения самых свежих патчей безопасности',
  'При Аварии восстанавливаем работоспособность сервиса.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Нехватка мощности оборудования',
    secondColumn:
      'Обычно данный тип серверов разворачивается внутри виртуальной машины. Что позволяет при желании увеличить ее мощность.',
  },
  {
    firstColumn: 'Выход из строя жесткого диска или самого сервера',
    secondColumn:
      'Дисковое пространство для данного сервера не является необходимым',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'На случай выхода из строя данного сервера можно проработать вопрос резервирования.',
  },
];

const PrintServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.printServer,
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
          Что это такое?
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Сервер Печати – Это сервер позволяющий централизовано управлять
          принтерами, и службами печати.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Если у вас в парке не так много компьютеров и принтеров, и вы не часто
          их меняете местами, то вам не нужен отдельный сервер печати. Но если у
          вас много сотрудников и принтеры часто изнашиваются и ломаются, часто
          происходят замены компьютеров или рабочих мест. Представьте сколько
          времени уходит на то что бы по у конечного пользователя наконец начал
          печататься документ если что то не так и опять сломалось.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Сервер Печати позволяет решить эту проблему. После его внедрения. Вся
          печать что происходит в офисе проходит через данный сервер. Он хранит
          у себя Драйвера для всех принтеров в сети. И выдает их по требованию
          нужному компьютеру. Данным методом решается проблема, когда на одном
          ПК принтер печатает а на другом нет, и все из-за того что на каком то
          из ПК установлены неправильные драйвера.
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
            А что с отказоустойчивостью?
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Ниже представлены возможные уязвимости и пути их минимизации:
          </Typography>
          <Table tableInfo={tableInfo} />
        </Stack>
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
            А зачем обслуживать?
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Для уменьшения вероятности сбоев и аварий, мы на ежемесячной основе:
          </Typography>
          <UlList text={listOne} ulList={true} />
          <Typography variant="body1" color="secondary.main">
            А при обнаружении каких-либо негативных результатов, которые могут
            привести к аварийной ситуации, мы незамедлительно сообщаем их
            клиенту, с возможными способами решения проблемы, до того, как она
            превратилась в Аварию, и нанесла бизнесу какие-либо убытки.
          </Typography>
        </Stack>
      </Stack>
    </ArticleContainer>
  );
};

export default PrintServer;
