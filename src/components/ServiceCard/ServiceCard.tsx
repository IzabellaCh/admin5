'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CustomMuiIcon } from '@/mui/muiCustomIcon';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';

import { ServiceData } from '@/shared/serviceData/service.data';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type ServiceCardProps = StackProps & {
  width: string;
  service: ServiceData;
  icon: boolean;
  height?: string;
};

export const ServiceCard = ({
  width,
  service,
  icon,
  height,
  sx,
}: ServiceCardProps) => {
  const router = useRouter();
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const textWithIconStyles = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    MozBoxOrient: 'vertical',
    MsBoxOrient: 'vertical',
    boxOrient: 'vertical',
    WebkitLineClamp: '4',
    MozLineClamp: '4',
    MsLineClamp: '4',
    lineClamp: '4',
    overflow: 'hidden',
    '@media (max-width:900px)': {
      WebkitLineClamp: '3',
      MozLineClamp: '3',
      MsLineClamp: '3',
      lineClamp: '3',
    },
  };

  return (
    <Stack
      maxWidth={width}
      height={height}
      sx={{
        ...sx,
        backgroundColor: 'primary.light',
        p: '23px 34px 20px 23px',
        '@media (max-width:900px)': {
          p: '11px 12px 8px',
        },
      }}
      borderRadius="10px"
      justifyContent="space-between"
    >
      <Typography
        variant="h2"
        color="secondary.main"
        sx={{
          pb: '6px',
          '@media (max-width:900px)': {
            fontSize: 22,
            pb: '11px',
          },
        }}
      >
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.main"
        sx={icon ? textWithIconStyles : null}
      >
        {service.shortDescription}
      </Typography>
      {icon && (
        <CustomMuiIcon
          type={service.commonImageType}
          size={
            windowInnerWidth > 900 ? service.imageSizeS : service.imageSizeXS
          }
          style={{ fill: 'transparent' }}
          sx={{
            alignSelf: 'center',
            maxHeight: '166px',
            '@media (max-width:900px)': {
              maxHeight: '141px',
            },
          }}
        ></CustomMuiIcon>
      )}
      <ButtonMore
        text="Узнать больше"
        sx={{
          alignSelf: icon ? 'flex-end' : 'flex-start',
          mt: icon ? '0px' : '35px',
        }}
        onClick={() => router.push(service.route)}
      />
    </Stack>
  );
};
