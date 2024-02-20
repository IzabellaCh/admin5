'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import Stack, { StackProps } from '@mui/material/Stack';

import { changeModalCondition } from '@/redux/slices/modal-condition-slice';

export const PairButtonsContainer = ({ sx, ...props }: StackProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Stack
      columnGap="10px"
      {...props}
      sx={{
        ...sx,
        flexDirection: 'row',
        '@media (max-width:600px)': {
          flexDirection: 'column',
          rowGap: '20px',
          maxWidth: '360px',
          width: '100%',
        },
      }}
    >
      <Button
        variant="default"
        color="primary"
        onClick={() => dispatch(changeModalCondition(true))}
      >
        связаться с нами
      </Button>
      <Button
        variant="default"
        color="secondary"
        onClick={() => router.push('/#calculator')}
      >
        калькулятор цен
      </Button>
    </Stack>
  );
};
