import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArticleContainer } from '@/containers/ArticleContainer';
import { ALL_ARTICLES } from '@/shared/articlesData/articles.data';
import { UlList } from '@/components/UlList/UlList';
import { LinkedSrevices } from '@/components/LinkedServices/LinkedServices';

const listOne: string[] = [
  'Универсальный VPN-сервер, позволяющий работать с различными устройствами;',
  'Полную конфиденциальность передаваемых данных с помощью защищенного шифрованного соединения;',
  'Возможность входа вы систему по логину и паролю;',
  'При необходимости, обеспечение прохождения всего сетевого трафика через туннель VPN.',
];

const listTwo: string[] = [
  'Windows, Linux, Mac OS X.',
  'Android, iPhone iOS.',
  'Роутеры.',
];

const listThree: string[] = [
  'Объединить несколько офисов/филиалов компании.',
  'Подключить разные филиалы к центральному офису.',
  'Осуществлять удаленное подключение к сети компании для сотрудников, работающих из дома или другого офиса.',
  'Обезопасить работы в сети Интернет.',
];

const commonWidth = '581px';

const VpnSetup = () => {
  const currentArticle = ALL_ARTICLES.find((item) => item.id === 'vpn-setup');

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
        <Typography variant="body1" color="secondary.main">
          Что такое VPN? VPN – Virtual Private Network – виртуальная частная
          сеть. VPN сервер может объединить несколько рабочих мест/филиалов
          компании в единую локальную сеть и/или позволяет работнику удаленно
          подключиться к сети компании.
        </Typography>
        <Typography variant="body1" color="secondary.main">
          С помощью шифрования трафика передаваемая информация будет защищена от
          доступа несанкционированных пользователей, чтобы никто не смог
          перехватить данные.
        </Typography>
      </Stack>
      <Box
        id="article-image"
        width="100%"
        sx={{
          backgroundImage: `url(${currentArticle.imageSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
          height: '637px',
          mb: '77px',
          '@media (max-width:1080px)': {
            height: '500px',
          },
          '@media (max-width:900px)': {
            height: '400px',
          },
          '@media (max-width:600px)': {
            mb: '56px',
            height: '293px',
          },
        }}
      ></Box>
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
            maxWidth="400px"
            sx={{
              '@media (max-width:600px)': {
                fontSize: 22,
              },
            }}
          >
            В результате оказания услуги Вы получаете:
          </Typography>
          <UlList text={listOne} ulList={true} />
          <LinkedSrevices services={currentArticle.linkedPrices} />
          <Typography variant="body1" color="secondary.main">
            Мы имеем большой опыт настройки и обслуживания VPN-серверов на
            различных роутерах. Можем предложить выбор оптимального программного
            обеспечения: xl2tpd, pptpd (Linux); OpenVPN (Linux, Windows,
            MikroTik); SSTP, L2TP, PPTP на Windows Server (2008, 2012, 2016,
            2019).
          </Typography>
          <Typography variant="body1" color="secondary.main">
            В качестве Linux часто используется Ubuntu и CentOS, Windows — 7, 8,
            10. Для VPN подойдут различные серверы — физический сервер или
            обычный компьютер, аренда VPS.
          </Typography>
          <Box>
            <Typography variant="body1" color="secondary.main">
              Мы осуществляем поддержку своих клиентов и предлагаем широкий
              выбор систем для подключения к серверу VPN
            </Typography>
            <UlList text={listTwo} ulList={true} />
          </Box>
        </Stack>
        <Stack
          sx={{
            maxWidth: commonWidth,
            '@media (max-width:661px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            variant="h2"
            color="secondary.main"
            pb="26px"
            sx={{
              '@media (max-width:600px)': {
                fontSize: 22,
              },
            }}
          >
            Применение VPN-сервера позволяет:
          </Typography>
          <UlList text={listThree} />
          <Typography
            variant="body1"
            color="secondary.main"
            mt="10px"
            sx={{
              p: '7px 25px',
              width: '108%',
              left: '-4%',
              position: 'relative',
              borderRadius: '10px',
              backgroundColor: 'primary.light',
              '@media (max-width:600px)': {
                width: '100vw',
                borderRadius: '0px',
                p: '12px 15px',
                left: '-15px',
              },
            }}
          >
            Мы также готовы помочь с настройкой на основе облака (открытые VPN),
            решением возникающих проблем при подключении к имеющемуся серверу, а
            также обучить настройке сервера.
          </Typography>
        </Stack>
        <Stack maxWidth={commonWidth}>
          <Typography
            variant="h2"
            color="secondary.main"
            pb="26px"
            sx={{
              '@media (max-width:600px)': {
                fontSize: 22,
              },
            }}
          >
            Самостоятельная настройка
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Здесь можно найти статьи по самостоятельной настройке своего сервера
            VPN.
          </Typography>
        </Stack>
      </Stack>
    </ArticleContainer>
  );
};

export default VpnSetup;
