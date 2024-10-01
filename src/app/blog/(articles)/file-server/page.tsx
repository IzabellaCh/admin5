import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import {
  ALL_ARTICLES,
  articleFootnotesTemplates,
  commonWidth,
} from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { NestedUlList, TNestedList } from '@/components/UlList/NestedUlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { Table, TTableRowList } from '@/components/Table/Table';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: TNestedList[] = [
  {
    text: 'Когда у разных сотрудников, должен быть прямой, сиюминутный доступ к файлам. Например:',
    nestedList: [
      'Для согласования с руководством итоговой версии документа.',
      'Для отслеживания различных табелей учета, форм, отчетов.',
      'Для поочередного редактирования документа.',
      'И т.д.',
    ],
  },
  {
    text: 'Когда необходим доступ к какой-либо директории (папке) из вне офиса.',
    nestedList: null,
  },
  {
    text: 'Когда есть маловажные файлы, но они могут пригодиться в будущем.',
    nestedList: null,
  },
  {
    text: 'Резервирование данных.',
    nestedList: null,
  },
  {
    text: 'И т.д.',
    nestedList: null,
  },
];

const listTwo: string[] = [
  'Проверяем остаток свободного места на носителях.',
  'Следим за динамикой прироста файлов',
  'Обновляем Антивирусные базы',
  'Проверяем оборудование стресс-тестом',
  'Проверяем состояние Жестких дисков',
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
    firstColumn: 'Шифрование / Удаление Вирусным ПО\u00B2',
    secondColumn:
      'Использование Антивирусного ПО, Использование резервных копий, Разграничение доступа',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.raid}`,
  `\u00B2 ${articleFootnotesTemplates.software}`,
];

const FileServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.fileServer,
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
          В бизнесе часто бывают ситуации, когда становиться необходим
          выделенный файловый сервер. Он может оказаться полезным в самых
          различных случаях:
        </Typography>
        <NestedUlList list={listOne} ulList={true} />
        <Typography variant="body1" color="secondary.main">
          Все вышеперечисленные ситуации довольно уникальны, и каждая требует
          своего подхода. Так, например, для маловажных файлов, дешевле и
          выгоднее использовать обычный Жесткий диск или отдельный ПК. В случае
          же сиюминутного доступа выгодней использовать отдельное NAS хранилище.
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
          <UlList text={listTwo} ulList={true} />
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

export default FileServer;
