import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  'Обновляем список SPAM\u00B3 адресов',
  'Обновляем сертификаты безопасности',
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
    firstColumn: 'Отключение Интернета / оператором связи',
    secondColumn:
      'В данном случае, это является уязвимым местом системы. Если оператор связи отключит интернет соединение, или электричество в офисе где храниться сервер, к сожалению, сервис будет недоступен. Поэтому нужно с большой ответственностью подходить к вопросу физического размещения сервера',
  },
  {
    firstColumn: 'Выход из строя жесткого диска',
    secondColumn: 'Использование RAID\u00B9 массивов.',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'Хранение образа готового сервиса. С возможностью быстрого развертывания на другом оборудовании.',
  },
  {
    firstColumn: 'Шифрование / Удаление Вирусным ПО\u00B2',
    secondColumn:
      'Использование Антивирусного ПО\u00B2, Использование резервных копий, Разграничение доступа',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.raid}`,
  `\u00B2 ${articleFootnotesTemplates.software}`,
  `\u00B3 ${articleFootnotesTemplates.spam}`,
];

const MailService = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.mailService,
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
          В современном мире почтовые ящики формата
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              fontStyle: 'italic',
            }}
          >
            {' '}
            должность@названиекомпании.ru{' '}
          </Box>
          стали нормой. Такой Email можно сделать если у вас куплен нужный
          домен. Но сделать это не всегда просто. Многие хостинг провайдеры на
          которых может располагаться ваш сайт берут дополнительную плату за
          создание почтовых ящиков, или хранения писем на них. Но даже у них
          необходимо настроить Почтовый сервис, чтобы все работало безотказно.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Так же, можно настроить свой собственный почтовый сервер, и не
          зависеть от других поставщиков услуг. Огромный плюс подобного решения
          будет то, что все письма хранятся локально на Вашем сервере. Если у
          вас нет физически пространства что бы хранить в офисе еще один сервер,
          не беда, можно арендовать VDS как у нас, так и у других поставщиков.
          Как и в любом другом вопросе, мы можем подобрать разные решения для
          вашей проблемы, от почтового сервера в вашем офисе, до аренды у нас
          самого Почтового сервиса.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Как и в любом другом вопросе, мы можем подобрать разные решения для
          вашей проблемы, от почтового сервера в вашем офисе, до аренды у нас
          самого Почтового сервиса.
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

export default MailService;
