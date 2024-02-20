import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Step = {
  stepNumber: string;
  direction: 'right' | 'down' | 'left';
  children: ReactNode;
};

export const Step = ({ stepNumber, direction, children }: Step) => {
  const stylesRight = {
    top: '10px',
    left: '75px',
    rowGap: '21px',
  };
  const stylesDown = {
    top: '75px',
    left: '-35px',
    rowGap: '21px',
  };
  const stylesLeft = {
    top: '10px',
    right: '90px',
    rowGap: '21px',
  };

  return (
    <Stack
      sx={{
        backgroundColor: 'primary.light',
        width: '62px',
        height: '62px',
        '@media (max-width:600px)': {
          width: '44px',
          height: '44px',
        },
      }}
      borderRadius="50%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Typography
        variant="h2"
        color="primary.main"
        sx={{
          '@media (max-width:600px)': {
            fontSize: '22px',
          },
        }}
      >
        {stepNumber}
      </Typography>
      <Stack
        position="absolute"
        sx={
          direction === 'right'
            ? stylesRight
            : direction === 'left'
            ? stylesLeft
            : stylesDown
        }
      >
        {children}
      </Stack>
    </Stack>
  );
};
