'use client';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type CalculatorResultProps = {
  sum: string;
};

export const CalculatorResult = ({ sum }: CalculatorResultProps) => (
  <Stack
    direction="row"
    p="10px 25px"
    border="1px solid"
    borderColor="primary.main"
    borderRadius="10px"
    width="100%"
    sx={{
      p: '15px 18px',
    }}
  >
    <Typography
      variant="h2"
      color="primary.main"
      sx={{
        display: 'none',
        '@media (max-width:900px)': {
          display: 'flex',
        },
      }}
    >
      итого:
    </Typography>
    <Stack
      sx={{
        '@media (max-width:900px)': {
          pl: '30px',
        },
      }}
    >
      <Typography variant="h1" color="primary.main">{`${sum} ₽`}</Typography>
      <Typography variant="h2" color="primary.main">
        в месяц
      </Typography>
    </Stack>
  </Stack>
);
