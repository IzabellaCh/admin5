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
  'Обновляем ПО для получения самых свежих патчей безопасности',
  'При Аварии восстанавливаем работоспособность сервиса.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Нехватка мощности оборудования',
    secondColumn:
      'Перед приобретением сервера, всегда зараннее рассматривается какой мощности Оборудование необходимо',
  },
  {
    firstColumn: 'Выход из строя жесткого диска или самого сервера',
    secondColumn:
      'Обычно потеря данных видеонаблюдения не столь болезненна, но все равно можно использовать RAID\u00B9. Или настроить резервирование Данных',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'В зависимости от конфигурации, при выходе из строя самого сервера данные это не затронет, по причине того, что они хранятся на отдельном носителе',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.software}`,
];

const VideoSurveillanceServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.videoSurveillanceServer,
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
          Сервер видеонаблюдения - это сервер, используемый для обработки и
          хранения данных от камер видеонаблюдения. Такой сервер можно
          использовать вместо видеорегистратора. Количество одновременно
          подключенных к нему камер зависит от мощности и характеристик самого
          сервера. На подобном сервере можно настроить анализ видео данных,
          например, обнаружение движения, распознавание автомобильных номеров,
          или в некоторых случаях распознавание лиц.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          При необходимости можно настроить доступ к данным из других устройств
          вне локальной сети.
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

export default VideoSurveillanceServer;
