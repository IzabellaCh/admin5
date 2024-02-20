import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

type ComparisonInfo = {
  title: string;
  paragraph: string;
};

type ComparisonTableItemProps = {
  icon: ReactNode;
  info: ComparisonInfo;
  color: string;
};

export const ComparisonTableItem = ({
  icon,
  info,
  color,
}: ComparisonTableItemProps) => {
  return (
    <Stack
      borderRadius="6px"
      height="100%"
      rowGap="3px"
      sx={{
        backgroundColor: color,
        p: '8px 10px 11px 10px',
        '@media (max-width:700px)': {
          p: '5px',
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          columnGap: '5px',
          '@media (max-width:700px)': {
            columnGap: '1px',
          },
        }}
      >
        {icon}
        <Typography
          variant="h3"
          color="secondary.main"
          sx={{
            '@media (max-width:700px)': {
              fontSize: 14,
            },
          }}
        >
          {info.title}
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        color="secondary.main"
        sx={{
          pl: '25px',
          '@media (max-width:700px)': {
            fontSize: 12,
            pl: '0px',
          },
        }}
      >
        {info.paragraph}
      </Typography>
    </Stack>
  );
};
