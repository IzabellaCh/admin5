'use client';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { Score } from '@/components/Score/Score';
import { selectRequisitions } from '@/redux/slices/statistic-data-slice';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

export const ScoreTitle = () => {
  const requisitions = useSelector(selectRequisitions);
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      borderRadius="10px"
      sx={{
        backgroundColor: 'primary.light',
        maxHeight: '132px',
        p: '25px',
        '@media (max-width:900px)': {
          p: '12px',
          maxHeight: '80px',
        },
        '@media (max-width:800px)': {
          width: '360px',
        },
      }}
    >
      <Typography
        variant="h2"
        color="secondary.main"
        maxWidth="62%"
        sx={{
          '@media (max-width:900px)': {
            fontSize: 22,
          },
        }}
      >
        На этой неделе мы обработали
      </Typography>
      <Score
        names={['заявку', 'заявки', 'заявок']}
        number={requisitions}
        width="100px"
        minHeight={windowInnerWidth > 900 ? '78px' : '60px'}
      ></Score>
    </Stack>
  );
};
