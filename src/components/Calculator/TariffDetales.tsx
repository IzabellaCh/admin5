'use client';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { TariffType } from './calculator.data';

type TariffDetalesProps = {
  tariff: TariffType;
};

export const TariffDetales = ({ tariff }: TariffDetalesProps) => (
  <Stack
    justifyContent="space-between"
    rowGap="16px"
    pt="12px"
    sx={{
      '@media (max-width:900px)': {
        pt: 0,
      },
    }}
  >
    <Typography variant="body1" color="secondary.main">
      Время реагирования:{' '}
      <span style={{ fontWeight: 700 }}>{tariff.reactionTime}</span>
    </Typography>
    <Typography variant="body1" color="secondary.main">
      Плановые выезды в месяц:{' '}
      <span style={{ fontWeight: 700 }}>{tariff.scheduledDeparture}</span>
    </Typography>
    <Typography variant="body1" color="secondary.main">
      Экстренные выезды:{' '}
      <span style={{ fontWeight: 700 }}>{tariff.emergencyDeparture}</span>
    </Typography>
    <Typography variant="body1" color="secondary.main">
      Консультации по телефону и удаленное подключение:{' '}
      <span style={{ fontWeight: 700 }}>{tariff.consultations}</span>
    </Typography>
  </Stack>
);
