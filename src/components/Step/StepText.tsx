import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { THowWeWork } from './step.data';

type StepTextProps = {
  data: THowWeWork;
  maxWidth?: string;
};

export const StepText = ({ data, maxWidth }: StepTextProps) => {
  return (
    <Stack width="max-content" maxWidth={maxWidth ? maxWidth : undefined}>
      <Typography
        variant="h2"
        color="primary.main"
        sx={{
          '@media (max-width:600px)': {
            fontSize: '22px',
            maxWidth: '270px',
          },
        }}
      >
        {data.title}
      </Typography>
      <Typography
        variant="body2"
        color="secondary.main"
        pt="15px"
        sx={{
          '@media (max-width:600px)': {
            maxWidth: '270px',
          },
        }}
      >
        {data.text}
      </Typography>
    </Stack>
  );
};
