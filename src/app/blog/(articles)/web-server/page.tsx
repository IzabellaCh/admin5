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
  'Следим за динамикой прироста файлов',
  'Обновляем Антивирусные базы',
  'Проверяем оборудование стресс-тестом',
  'Проверяем состояние Жестких дисков',
  '•	При необходимости обновляем сертификаты безопасности',
  'При Аварии восстанавливаем работоспособность сервиса.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Выход из строя жесткого диска',
    secondColumn: 'Использование RAID\u00B9 массивов.',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'Хранение информации на отдельном носителе для безопасности данных, резервирование / документирование настроек для быстрого запуска сервиса на новом оборудовании.',
  },
  {
    firstColumn: 'Шифрование / Удаление Вирусным ПО\u00B2\u0085Сбой сети',
    secondColumn:
      'Использование Антивирусного ПО\u00B2, Использование резервных копий, Разграничение доступа.\u0085В зависимости от вашего сетевого оборудования можно использовать скрипты которые автоматически будут открывать нужные порты для сервера',
  },
  {
    firstColumn: 'Отсутствие сертификатов\u00B3',
    secondColumn:
      'Если ваш сервис имеет выход в интернет то ему критически необходимы регулярные обновления сертификатов безопасности',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.raid}`,
  `\u00B2 ${articleFootnotesTemplates.software}`,
  `\u00B3 ${articleFootnotesTemplates.safetyCertificate}`,
];

const WebServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.webServer,
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
          WEB Сервер – это сервер на котором хранятся различные сайты. Если у
          вас есть свой сайт, то он однозначно храниться на каком-нибудь WEB
          сервере. Часто бывает необходимо развернуть сайт только для своих
          сотрудников (различные CRM) или с доступом только по локальной сети.
          Обычно для таких случаев и используется WEB сервер. Для WEB сервера
          необходима специальная настройка сети, довольно часто для нужд такого
          сервера используется операционная система Linux.
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
            При внедрении любого сервиса мы всегда продумываем его
            отказоустойчивость. Возможные аварии и пути их предотвращения. Мы
            понимаем важность для бизнеса и сохранения данных и сохранения
            доступа к ним.
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Ниже представлены возможные уязвимости и пути их минимизации:{' '}
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
            Для уменьшения вероятности сбоев и аварий, мы на ежемесячной основе:{' '}
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

export default WebServer;
