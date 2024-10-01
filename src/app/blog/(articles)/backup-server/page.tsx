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
      'В продакшн решениях мы всегда стараемся использовать RAID\u00B9 Учитывая что это сервер Бекапов, сотрудники даже не заметят что что то сломалось.',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'Так же можно развернуть хранение конечных данных на стороннем дешевом файловом сервере. И в данном случае все что будет необходимо это снова развернуть сам сервер. Данные не пострадают.',
  },
];

const articleFootnotes: string[] = [`\u00B9 ${articleFootnotesTemplates.raid}`];

const BackupServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.backupServer,
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
          Сервер резервного копирования — это мощное хранилище данных,
          специально предназначенное для резервного копирования, восстановления
          и сохранения важной информации компании. Обычно именно на мощностях
          этого сервера настроен сбор данных с других серверов. Он может
          находится как у вас на территории (в серверной) так и удаленно (при
          условии высокоскоростного интернета) в случае потери или повреждения
          данных, сервера, или даже сервиса, можно быстро и относительно
          безболезненно восстановить их. Это важное средство для обеспечения
          безопасности данных и бесперебойности работы.
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
            Учитывая, что это сервер бэкапов. За ним мало кто следит. В связи с
            чем особенно важно регулярно снимать показания его жизнедеятельности
            и следить за его работоспособностью. Что бы не возникло ситуации,
            когда в непредвиденных обстоятельствах последняя надежда на бэкап,
            которого нет.
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

export default BackupServer;
