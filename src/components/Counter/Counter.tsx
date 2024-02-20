'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CustonMuiIcon } from '../../mui/muiCustomIcon';

type CounterProps = {
  counter: number;
  setCounter: (num: number) => void;
  title: string;
  subtitle?: string;
};

export const Counter = ({
  counter,
  setCounter,
  title,
  subtitle,
}: CounterProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      columnGap="14px"
      maxWidth="max-content"
    >
      <Stack
        direction="row"
        border="1px solid"
        borderColor="primary.main"
        borderRadius="6px"
        p="4px 10px"
        alignItems="center"
        justifyContent="space-between"
        columnGap="8px"
        minWidth="91px"
      >
        <IconButton
          onClick={() => setCounter(counter - 1)}
          disabled={counter === 0}
        >
          <CustonMuiIcon
            type="icon-remove"
            size="16px"
            sx={{
              '& path': {
                stroke: counter > 0 ? '#4A7FB0' : '#DBE5EF',
              },
            }}
          />
        </IconButton>
        <Typography variant="body1" color="secondary.main">
          {counter}
        </Typography>
        <IconButton
          onClick={() => setCounter(counter + 1)}
          disabled={counter === 10}
        >
          <CustonMuiIcon
            type="icon-add"
            size="16px"
            sx={{
              '& path': {
                stroke: counter < 10 ? '#4A7FB0' : '#DBE5EF',
              },
            }}
          />
        </IconButton>
      </Stack>
      <Stack>
        <Typography variant="body1" color="secondary.main">
          {title}
        </Typography>
        <Typography variant="caption" color="primary.main" whiteSpace="nowrap">
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
};
