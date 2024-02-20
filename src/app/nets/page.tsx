'use client';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { ServiceContainer } from '@/containers/ServiceContainer';
import { SERVICES } from '@/shared/serviceData/service.data';
import { NETS_TEXT } from './nets.data';
import { TServicePageText } from '@/types/types';

const Nets = () => {
  return (
    <ServiceContainer service={SERVICES[2]} currentIndex={2}>
      <Stack rowGap="32px">
        {NETS_TEXT.map((paragraph: TServicePageText, index: number) => (
          <Typography key={index} variant="body1" color="secondary.main">
            {paragraph.text}
          </Typography>
        ))}
      </Stack>
    </ServiceContainer>
  );
};

export default Nets;
