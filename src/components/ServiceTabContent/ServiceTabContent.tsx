'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { ServiceData } from '@/shared/serviceData/service.data';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';
import { LinkMore } from '@/components/Link/LinkMore';
import { LinkButtonContainer } from '@/containers/LinkButtonContainer';

interface TabContentContainerProps {
  service: ServiceData;
}

export const ServiceTabContent = ({ service }: TabContentContainerProps) => {
  const router = useRouter();
  return (
    <Stack
      width="100%"
      borderRadius="10px"
      sx={{
        backgroundColor: 'primary.light',
        minHeight: '599px',
        p: '30px 37px 24px 26px',
        '@media (max-width:1080px)': {
          minHeight: '460px',
          p: '30px 15px',
        },
        '@media (max-width:900px)': {
          minHeight: '400px',
        },
        '@media (max-width:740px)': {
          minHeight: '500px',
        },
        '@media (max-width:510px)': {
          minHeight: '582px',
        },
        '@media (max-width:400px)': {
          minHeight: '650px',
        },
      }}
      justifyContent="space-between"
    >
      <Stack
        position="relative"
        rowGap="8px"
        width="90%"
        sx={{
          '@media (max-width:900px)': {
            display: 'none',
          },
        }}
      >
        <LinkButtonContainer
          linkVariantColor="secondary"
          articles={service.articles}
          row="first"
        />
        <Stack direction="row" columnGap="13px" alignItems="center">
          <LinkButtonContainer
            linkVariantColor="secondary"
            articles={service.articles}
            row="second"
            width="90%"
          />
          {service.articles.length - 4 > 0 ? (
            <LinkMore
              number={service.articles.length - 4}
              href={service.route}
              whiteSpace="nowrap"
            />
          ) : null}
        </Stack>
      </Stack>
      <Stack
        rowGap="35px"
        sx={{
          rowGap: '35px',
          '@media (max-width:1080px)': {
            rowGap: '15px',
          },
          '@media (max-width:900px)': {
            rowGap: '20px',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: 'none',
            '@media (max-width:900px)': {
              display: 'inline',
            },
          }}
        >
          {service.title}
        </Typography>
        {service.fullDescription.map((paragraph, index) => (
          <Typography
            key={index}
            variant="body1"
            color="secondary.main"
            sx={{
              maxWidth: '420px',
              '@media (max-width:1080px)': {
                maxWidth: '100%',
              },
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>
      <ButtonMore
        text="Узнать больше"
        sx={{
          alignSelf: 'flex-end',
          '@media (max-width:900px)': {
            alignSelf: 'flex-start',
            mt: '25px',
          },
        }}
        onClick={() => router.push(service.route)}
      />
    </Stack>
  );
};
