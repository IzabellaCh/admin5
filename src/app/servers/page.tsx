'use client';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { ServiceContainer } from '@/containers/ServiceContainer';
import { SERVICES } from '@/shared/serviceData/service.data';
import { SERVERS_TEXT } from './servers.data';
import { TServicePageText } from '@/types/types';
import { UlList } from '@/components/UlList/UlList';

const Servers = () => {
  return (
    <ServiceContainer service={SERVICES[1]} currentIndex={1}>
      <Stack rowGap="32px">
        {SERVERS_TEXT.map((paragraph: TServicePageText, index: number) => {
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

export default Servers;
