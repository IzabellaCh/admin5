import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES, commonWidth } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { ArticlesRoutes } from '@/shared/routesData/routes.data';
import { ArticleImage } from '@/components/ArticleImage/ArticleImage';

const listOne: string[] = [
  'Полную диагностику вашей системы',
  'Проверку ошибок реестра (некоторые вирусы, меняют ключи реестра)',
  'Восстановление системных файлов',
  'Отключение всплывающих окон',
  'Удаление обнаруженных угроз',
  'Восстановление доступа к зашифрованным данных',
  'Рекомендации для неповторимости данной ситуации',
];

const VirusRemovalDecryptingFiles = () => {
  const currentArticle = ALL_ARTICLES.find(
    (item) => item.id === ArticlesRoutes.virusRemovalDecryptingFiles,
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
          Когда это нужно?
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Одним из основных признаком заражения вредоносным ПО является
          медленная работа ПК. Вирусы часто нагружают ресурсы вашего компьютера
          и пользуются им в своих целях. Так же частым явлением заражения
          вредоносным ПО является самопроизвольное открытие вкладок и
          уведомлений в браузере.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Потеря личных данных, паролей данных карт и т.д. тоже свидетельствует
          о возможном заражении вирусом. Всплывающие баннеры, Зашифрованные
          удаленные файлы, - все это тоже признаки заражения вашего компьютера
          вирусами.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Мы готовы помочь вам с удалением вредоносных программ, вирусов, и
          восстановлением зашифрованных файлов. Мы проведем комплексную проверку
          вашей системы на наличие вредоносных программ, троянов, шпионских
          программ и других угроз. При необходимости восстановим системные
          файлы. Если ваши данные уже зашифрованы (известными вирусами) мы можем
          помочь восстановить к ним доступ.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          Важно действовать быстро, чтобы минимизировать потерю данных.
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
            А что я получу?
          </Typography>
          <Typography variant="body1" color="secondary.main">
            При заказе услуги вы получите*(Если возможно, если необходимо):
          </Typography>
          <UlList text={listOne} ulList={true} />
        </Stack>
      </Stack>
    </ArticleContainer>
  );
};

export default VirusRemovalDecryptingFiles;
