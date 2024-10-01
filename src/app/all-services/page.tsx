'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SERVICES, ServiceData } from '@/shared/serviceData/service.data';
import { CustomMuiIcon } from '@/mui/muiCustomIcon';
import { CustomLink } from '@/components/Link/CustomLink';

const Services = () => {
  return (
    <Stack
      width="100%"
      pt="70px"
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media (max-width:1000px)': {
          columnGap: '30px',
          rowGap: '30px',
        },
        '@media (max-width:840px)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {SERVICES.map((service: ServiceData, index: number) => (
        <Stack
          key={index}
          sx={{
            width: '30%',
            minWidth: '276px',
            '@media (max-width:1000px)': {
              minWidth: '360px',
              width: 'Calc(50% - 15px)',
            },
          }}
        >
          <Stack
            maxHeight="172px"
            justifyContent="center"
            overflow="hidden"
            sx={{
              alignItems: 'flex-start',
              '@media (max-width:8400px)': {
                alignItems: 'center',
              },
            }}
          >
            <CustomMuiIcon
              type={service.shadowImageType}
              size={service.imageSizeM}
              style={{ fill: 'transparent' }}
            />
          </Stack>
          <CustomLink href={service.route}>
            <Typography variant="h2" color="secondary.main" p="43px 0 23px">
              {service.title}
            </Typography>
          </CustomLink>
          <Stack rowGap="22px">
            {service.articles.map((article, index) => (
              <CustomLink
                key={index}
                variant="articleListItem"
                href={`/blog/${article.id}`}
              >
                {article.title}
              </CustomLink>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Services;
