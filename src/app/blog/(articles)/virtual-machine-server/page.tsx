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
  'HyperV – Технология от Microsoft',
  'Proxmox VE – Свободное решение от сообщества',
  'VMware – технология от Dell',
];

const listTwo: string[] = [
  'Проверяем остаток свободного места на носителях.',
  'Обновляем ПО для получения самых свежих патчей безопасности',
  'При Аварии восстанавливаем работоспособность сервиса.',
];

const tableInfo: TTableRowList[] = [
  {
    firstColumn: 'Нехватка мощности оборудования',
    secondColumn:
      'Перед приобретением подобного сервера, всегда зараннее рассматривается сколько и какой мощность Виртуальных машин на нем будет задействовано.',
  },
  {
    firstColumn: 'Выход из строя жесткого диска или самого сервера',
    secondColumn:
      'Обычно на подобных серверах используются Raid Массивы что позволяет избежать больших неприятностей.',
  },
  {
    firstColumn: 'Выход из строя самого сервера',
    secondColumn:
      'Если из строя выходит сам сервер, то и виртуальные машины на нем будут не доступны. На практике такое встречается довольно редко. Так же можно внедрить резервирование и развернуть данные машины на других серверах в случае поломки.',
  },
  {
    firstColumn: 'Шифрование / Удаление Вирусным ПО\u00B9',
    secondColumn:
      'Обычно мы стараемся запретить доступ в интернет Серверам виртуализации.',
  },
];

const articleFootnotes: string[] = [
  `\u00B9 ${articleFootnotesTemplates.software}`,
];

const VirtualMachineServer = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.virtualMachineServer,
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
          Если у вас есть много разных сервисов которые находятся на разных
          физических серверах, это может быть не всегда удобно. Иногда лучше
          иметь один мощный сервер и развернуть (установить) на нем несколько
          виртуальных машин. Каждая виртуальная машина будет полноценной и
          самодостаточной. Можно будет пользоваться ей вне зависимости от
          состояния других виртуальных машин.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          На данный момент есть 3 основных поставщика технологии виртуализации
          для бизнеса:
        </Typography>
        <UlList text={listOne} ulList={true} />
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

export default VirtualMachineServer;
