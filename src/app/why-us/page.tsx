'use client';

import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { PairButtonsContainer } from '@/containers/PairButtonsContainer';

import firstImage from '../../../public/assets/icons/why-us-page/image_why_us_first.jpg';
import secondImage from '../../../public/assets/icons/why-us-page/image_why_us_second.jpg';

import { ComparisonTable } from '@/components/ComparisonTable/ComparisonTable';
import { SERVICES } from '@/shared/serviceData/service.data';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import { ScrollableFeedbackStack } from '@/components/ScrollableFeedbackStack/ScrollableFeedbackStack';
import { WhyUsFAQ } from '@/components/WhyUsFAQ/WhyUsFAQ';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

const WhyUs = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <Stack
      sx={{
        padding: '130px 0 0',
        rowGap: '200px',
        '@media (max-width:900px)': {
          rowGap: '100px',
        },
      }}
    >
      <Stack justifyContent="space-between" width="100%">
        <Box
          sx={{
            pb: '115px',
            '@media (max-width:900px)': {
              pb: '80px',
            },
          }}
        >
          <Box
            sx={{
              '@media (max-width:900px)': {
                display: 'none',
              },
            }}
          >
            <Typography variant="h1" color="secondary.main">
              Используйте свое время
            </Typography>
            <Typography variant="h1" color="secondary.main" pb="20px">
              на&nbsp;развитие бизнесса,{' '}
              <Box component="span" color="primary.main">
                а&nbsp;системное администрирование доверьте&nbsp;нам
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="h1"
            color="secondary.main"
            pb="20px"
            sx={{
              display: 'none',
              '@media (max-width:900px)': {
                display: 'block',
              },
            }}
          >
            Используйте свое время на&nbsp;развитие бизнесса,{' '}
            <Box component="span" color="primary.main">
              а&nbsp;системное администрирование доверьте&nbsp;нам
            </Box>
          </Typography>
          <Typography variant="body1" color="secondary.main" maxWidth="420px">
            Наши основные тарифы подойдут большинсту, но мы так же можем
            подобрать для вас индивидуальный план
          </Typography>
        </Box>
        <PairButtonsContainer />
      </Stack>
      <Box>
        <Typography
          variant="h2"
          color="secondary.main"
          pb="21px"
          maxWidth="272px"
          sx={{
            display: 'none',
            fontSize: 22,
            '@media (max-width:900px)': {
              display: 'block',
            },
          }}
        >
          Доверьте свои IT-задачи{' '}
          <Box component="span" color="primary.main">
            профессионалам
          </Box>
        </Typography>
        <Stack
          sx={{
            rowGap: '130px',
            '@media (max-width:900px)': {
              rowGap: '70px',
            },
          }}
        >
          <WhyUsFAQ
            title={
              <Typography
                variant="h2"
                color="secondary.main"
                pb="42px"
                sx={{
                  '@media (max-width:900px)': {
                    display: 'none',
                  },
                }}
              >
                Доверьте свои IT-задачи{' '}
                <Box component="span" color="primary.main">
                  профессионалам
                </Box>
              </Typography>
            }
            imageSrc={firstImage.src}
            flexDirection="row"
            FAQStart={0}
            FAQEnd={3}
          />
          <WhyUsFAQ
            imageSrc={secondImage.src}
            flexDirection="row-reverse"
            FAQStart={3}
          />
        </Stack>
      </Box>
      <Stack width="100%">
        <Typography
          variant="h1"
          color="secondary.main"
          maxWidth="705px"
          sx={{
            pb: '20px',
            '@media (max-width:900px)': {
              pb: '2px',
            },
          }}
        >
          <Box component="span" color="primary.main">
            Дешевле,{' '}
          </Box>
          чем&nbsp;нанимать сис-админа в&nbsp;штат
        </Typography>
        <Typography
          variant="body1"
          color="secondary.main"
          maxWidth="420px"
          sx={{
            pb: '48px',
            '@media (max-width:900px)': {
              pb: '16px',
            },
          }}
        >
          Наши основные тарифы подойдут большинству, но&nbsp;мы также можем
          подобрать для&nbsp;вас индивидуальный план
        </Typography>
        <ComparisonTable />
      </Stack>
      <Stack width="100%" flexWrap="wrap" rowGap="20px" columnGap="20px">
        <Stack
          width="100%"
          flexWrap="wrap"
          rowGap="20px"
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            '@media (max-width:900px)': {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              columnGap: '28px',
              alignItems: 'flex-start',
            },
          }}
        >
          <Stack
            alignSelf="flex-start"
            sx={{
              maxWidth: '562px',
              width: 'calc(100% - 392px)',
              '@media (max-width:900px)': {
                maxWidth: '100%',
                width: '100%',
              },
            }}
          >
            <Typography variant="h1" color="secondary.main">
              <Box component="span" color="primary.main">
                Готовы помочь Вам{' '}
              </Box>
              в&nbsp;любой сфере
            </Typography>
            <Typography
              variant="body1"
              color="secondary.main"
              maxWidth="420px"
              pt="18px"
            >
              Наши основные тарифы подойдут большинсту, но&nbsp;мы также можем
              подобрать для&nbsp;вас индивидуальный план
            </Typography>
          </Stack>
          <ServiceCard
            width={windowInnerWidth > 900 ? '392px' : '360px'}
            height={windowInnerWidth > 900 ? '392px' : '318px'}
            service={SERVICES[0]}
            icon={true}
          />
        </Stack>
        <Stack
          width="100%"
          rowGap="20px"
          columnGap="20px"
          justifyContent="flex-end"
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            '@media (max-width:900px)': {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          {SERVICES.slice(1).map((service, index) => (
            <ServiceCard
              width={windowInnerWidth > 900 ? '392px' : '360px'}
              height={windowInnerWidth > 900 ? '392px' : '318px'}
              key={index}
              service={service}
              icon={true}
              sx={{
                alignSelf: index === 1 ? 'flex-end' : 'center',
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h1" color="primary.main">
          Помогаем клиентам
        </Typography>
        <Typography
          variant="h1"
          color="secondary.main"
          sx={{
            pb: '58px',
            '@media (max-width:1100px)': {
              maxWidth: '600px',
            },
            '@media (max-width:900px)': {
              pb: '40px',
            },
            '@media (max-width:750px)': {
              maxWidth: '400px',
            },
          }}
        >
          найти оптимальное решение
        </Typography>
        <ScrollableFeedbackStack
          buttonsTop={
            windowInnerWidth > 900
              ? '-101px'
              : windowInnerWidth > 600
              ? '-83px'
              : null
          }
          buttonsBottom={windowInnerWidth > 600 ? null : '-68px'}
          buttonsRight="0px"
        />
      </Stack>
    </Stack>
  );
};

export default WhyUs;
