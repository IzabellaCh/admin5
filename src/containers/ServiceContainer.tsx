'use client';

import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import { PairButtonsContainer } from './PairButtonsContainer';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import { SERVICES, ServiceData } from '@/shared/serviceData/service.data';
import { ArticlesListItem } from '@/components/ArticlesListItem/ArticlesListItem';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type ServiceContainerProps = {
  service: ServiceData;
  children: ReactNode;
  currentIndex: number;
};

export const ServiceContainer = ({
  service,
  children,
  currentIndex,
}: ServiceContainerProps) => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const middleOfArticles = useMemo(() => {
    return Math.ceil(service.articles.length / 2);
  }, [service.articles]);
  return (
    <Stack
      rowGap="117px"
      sx={{
        pt: '50px',
        '@media (max-width:900px)': {
          pt: '10px',
        },
      }}
    >
      <Stack
        columnGap="53px"
        sx={{
          flexDirection: 'row',
          '@media (max-width:900px)': {
            flexDirection: 'column',
          },
        }}
      >
        <CustonMuiIcon
          type={service.commonImageType}
          size={
            windowInnerWidth > 900 ? service.imageSizeL : service.imageSizeM
          }
          sx={{
            position: 'sticky',
            top: '150px',
            '@media (max-width:900px)': {
              position: 'static',
              alignSelf: 'center',
            },
          }}
          style={{ fill: 'transparent' }}
        />
        <Stack>
          <Typography
            variant="h1"
            color="secondary.main"
            pb="30px"
            sx={{
              pb: '30px',
              '@media (max-width:900px)': {
                alignSelf: 'center',
                pb: '20px',
              },
            }}
          >
            {service.title}
          </Typography>
          {children}
          <PairButtonsContainer
            sx={{
              pt: '50px',
              '@media (max-width:900px)': {
                alignSelf: 'center',
              },
            }}
          />
        </Stack>
      </Stack>
      <Stack
        width="100%"
        columnGap="4%"
        rowGap="3px"
        flexWrap="wrap"
        alignItems="flex-start"
        sx={{
          flexDirection: 'row',
          '@media (max-width:800px)': {
            flexDirection: 'column',
            columnGap: '3px',
          },
        }}
      >
        <Stack
          sx={{
            width: '48%',
            rowGap: '3px',
            '@media (max-width:800px)': {
              width: '100%',
              columnGap: '3px',
            },
          }}
        >
          {service.articles.slice(0, middleOfArticles).map((article, index) => (
            <ArticlesListItem key={index} article={article} />
          ))}
        </Stack>
        <Stack
          sx={{
            width: '48%',
            rowGap: '3px',
            '@media (max-width:800px)': {
              width: '100%',
              columnGap: '3px',
            },
          }}
        >
          {service.articles.slice(middleOfArticles).map((article, index) => (
            <ArticlesListItem key={index} article={article} />
          ))}
        </Stack>
      </Stack>
      <Stack rowGap="47px">
        <Typography variant="h1" color="secondary.main">
          Мы также работаем
        </Typography>
        <Stack
          sx={{
            columnGap: '20px',
            flexDirection: 'row',
            '@media (max-width:900px)': {
              columnGap: '10px',
            },
            '@media (max-width:800px)': {
              flexDirection: 'column',
              rowGap: '18px',
            },
          }}
        >
          {SERVICES.filter((service, index) => index !== currentIndex).map(
            (service: ServiceData, index: number) => (
              <ServiceCard
                key={index}
                width={windowInnerWidth > 900 ? '50%' : '355px'}
                height={windowInnerWidth > 900 ? undefined : '318px'}
                service={service}
                icon={windowInnerWidth > 900 ? false : true}
                sx={{
                  '@media (max-width:800px)': {
                    alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  },
                }}
              />
            ),
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
