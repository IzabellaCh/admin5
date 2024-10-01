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
  'Обновляем ПО для получения самых свежих патчей безопасности',
  'При Аварии восстанавливаем работоспособность сервиса.',
  'Следим за состоянием счетов, и вовремя передаем их вашей бухгалтерии.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Нехватка мощности оборудования',
    secondColumn:
      'Перед конфигурированием сервера, всегда зараннее рассматривается какой мощности оборудование необходимо. Так же есть возможность увеличения мощности.',
  },
  {
    firstColumn: 'Выход из строя жесткого диска или самого сервера',
    secondColumn: 'Для арендованных VDS это не проблема',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'Обычно операторы делают резервные копии на случай подобных ситуаций.',
  },
  {
    firstColumn: 'Шифрование / Удаление Вирусным ПО\u00B9',
    secondColumn:
      'Так как VDS сервер находится в открытом интернете. Мы защищаем такие сервера мощным файрволом ',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.software}`,
];

const Vds = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.vds,
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
          Облачный сервер или, другими словами, VDS (Virtual Dedicated Server,
          виртуальный выделенный сервер) это полноценный сервер, но находящийся
          не у вас в серверной, а у провайдера. Обычно таким серверам прибегают
          если нужно мощное «железо» на не долгий срок: для проверки технологии,
          для тестирования проекта, для любых не постоянных операций не более
          чем на несколько месяцев. Если вы пользуетесь VDS более года, стоит
          задуматься о приобретении Обычного сервера. С другой стороны VDS не
          шумит и не пылится у вас в Серверной. Как и в любом другом вопросе,
          везде есть свои плюсы и минусы.
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
            Все вопросы с отказоустойчивостью именно железной части сервера
            обычно оператор берет на себя. Но все что касается программной части
            сервера, - обычно оператор не имеет туда доступа. При внедрении
            любого сервиса мы всегда продумываем его отказоустойчивость.
            Возможные аварии и пути их предотвращения. Мы понимаем важность для
            бизнеса и сохранения данных и сохранения доступа к ним.
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

export default Vds;
