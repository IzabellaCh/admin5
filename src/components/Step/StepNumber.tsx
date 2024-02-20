import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type StepNumberProps = {
  text: string;
  children?: ReactNode;
};

export const StepNumber = ({ text, children }: StepNumberProps) => {
  return (
    <Stack
      sx={{
        backgroundColor: 'primary.light',
        width: '62px',
        height: '62px',
        left: '10%',
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
        {text}
      </Typography>
      <Stack position="absolute" top="21px" right="152px">
        {children}
      </Stack>
    </Stack>
  );
};
