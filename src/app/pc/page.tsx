'use client';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { ServiceContainer } from '@/containers/ServiceContainer';
import { SERVICES } from '@/shared/serviceData/service.data';
import { PC_TEXT } from './pc.data';
import { TServicePageText } from '@/types/types';
import { UlList } from '@/components/UlList/UlList';

const PC = () => {
  return (
    <ServiceContainer service={SERVICES[0]} currentIndex={0}>
      <Stack rowGap="32px">
        {PC_TEXT.map((paragraph: TServicePageText, index: number) => {
          if (paragraph.type === 'text') {
            return (
              <Typography key={index} variant="body1" color="secondary.main">
                {paragraph.text}
              </Typography>
            );
          } else {
            return (
              <Stack key={index}>
                <Typography variant="body1" color="secondary.main">
                  {paragraph.text}
                </Typography>
                <UlList text={paragraph.list} ulList={true} />
              </Stack>
            );
          }
        })}
      </Stack>
    </ServiceContainer>
  );
};

export default PC;
