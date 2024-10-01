import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import {
  ALL_ARTICLES,
  articleFootnotesTemplates,
  commonWidth,
} from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { Table, TTableRowList } from '@/components/Table/Table';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Проверяем остаток свободного места на носителях.',
  'Проверяем работоспособность сервиса',
  'При Аварии восстанавливаем работоспособность сервиса.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Нехватка мощности оборудования',
    secondColumn:
      'WSUS не требователен к техническим характеристикам. Ему требуется больший объём дискового пространства',
  },
  {
    firstColumn: 'Выход из строя жесткого диска или самого сервера',
    secondColumn:
      'Учитывая специфику данного сервера, Потеря данных с жестких дисков не существенна и возможно просто их заменить,',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'При выходе из строя самого сервера, Рабочие станции(компьютеры) еще какое-то время будут ожидать обновлений от него. За это время можно настроить сервис на новом сервере.',
  },
];

const articleFootnotes: string[] = [`\u00B9 ${articleFootnotesTemplates.raid}`];

const UpdateServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.updateServer,
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
          Сервер Обновлений или, другими словами, WSUS (Windows System Update
          Server) сервер — это сервер, с помощью которого можно безболезненно
          поддерживать большое количество компьютеров в актуальном состоянии.
          Если у вас в офисе 20-30 компьютеров и стабильное интернет-соединение,
          то данный сервер вам не нужен.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Но если у вас в офисе большой парк компьютеров, и вы часто обращаете
          внимание что в какой-то момент, Скорость доступа в интернет сильно
          падает, это значит что все ваши компьютеры одновременно решили скачать
          обновления. Именно эту проблему и решает WSUS сервер. Он скачивает
          обновления самостоятельно на себя. И уже в нужное ВАМ время отдает
          пакеты обновлений все нужным компьютерам. Так благодаря тому что из
          интернета (серверов Майкрософт) скачается только один пакет на сервер
          WSUS (который он потом передаст нужным ПК) У вас уменьшается нагрузка
          на сеть, и соответственно интернет работает стабильней. Так же данная
          технология позволяет устанавливать только нужные вам обновления, минуя
          все обновления которые могут повредить вашей системе.
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
            WSUS полезный, но очень капризный сервис. Для его обслуживания нужен
            грамотный технический специалист.
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
        {articleFootnotes && (
          <Stack
            rowGap="10px"
            maxWidth={commonWidth}
            width="100%"
            justifyContent="flex-start"
          >
            {articleFootnotes.map((text, index) => (
              <Typography key={index} variant="body1" color="secondary.main">
                {text}
              </Typography>
            ))}
          </Stack>
        )}
      </Stack>
    </ArticleContainer>
  );
};

export default UpdateServer;
