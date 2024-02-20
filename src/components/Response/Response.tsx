import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { ResponseType } from './response.data';

type ResponseProps = {
  response: ResponseType;
  minHeigth: string;
};

export const Response = ({ response, minHeigth }: ResponseProps) => {
  return (
    <Stack minHeight={minHeigth} alignItems="center" justifyContent="center">
      {response.icon}
      <Typography
        variant="h2"
        color="secondary.main"
        textAlign="center"
        sx={{
          pt: '30px',
          '@media (max-width:900px)': {
            pt: '16px',
          },
        }}
      >
        {response.title}
      </Typography>
      <Typography
        variant="body2"
        color="secondary.main"
        textAlign="center"
        maxWidth="272px"
      >
        {response.subtitle}
      </Typography>
    </Stack>
  );
};
