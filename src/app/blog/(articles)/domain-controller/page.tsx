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
  'Следим за техническим состоянием самого сервера',
  'Проверяем остаток свободного места на носителях.',
  'Следим за динамикой прироста файлов',
  'Обновляем Антивирусные базы',
  'Проверяем оборудование стресс-тестом',
  'Проверяем состояние Жестких дисков',
  'При Аварии восстанавливаем работоспособность сервиса.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Нехватка мощности оборудования',
    secondColumn:
      'Контроллер домена — это не ресурсоемкий сервис, и в большинстве случаев может быть развернут на обычном пользовательском пк.',
  },
  {
    firstColumn: 'Выход из строя жесткого диска',
    secondColumn: 'Использование RAID\u00B9 массивов.',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'Реплицирование сервиса. Если кол-во компьютеров уже достаточно большое, есть смысл реплицировать сервис. На случай выхода из строя одного сервера, Его место займет другой. В свободное же время они будут равнозначны.',
  },
  {
    firstColumn: 'Шифрование / Удаление Вирусным ПО\u00B2',
    secondColumn:
      'Использование Антивирусного ПО, Использование резервных копий, Разграничение доступа, Реплицирование сервиса',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.raid}`,
  `\u00B2 ${articleFootnotesTemplates.software}`,
];

const DomainController = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.domainController,
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
          Если в вашей компании более 20 ПК то, управлять таким количеством
          компьютеров уже становится сложно. Ваши системные Администраторы будут
          тратить огромное количество времени что бы устанавливать ПО на такой
          парк машин. Более того уже появляются проблемы с безопасностью.
          Централизованный Контроллер домена – Решение данного вопроса. Он
          позволит задавать параметры безопасности, сразу всем пользователям.
          Позволит разграничить доступ к тем или иным ресурсам. А совместно с
          другими решениями позволит Пользователям заходить в свою учетную
          запись без потери данных.
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

export default DomainController;
