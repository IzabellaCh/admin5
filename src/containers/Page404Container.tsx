'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

export const Page404Container = () => {
  const router = useRouter();
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <Stack
      columnGap="25px"
      alignItems="center"
      mt="60px"
      sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        '@media (max-width:700px)': {
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
      }}
    >
      <CustonMuiIcon
        type="icon-404-page"
        size={
          windowInnerWidth > 1080
            ? '717px'
            : windowInnerWidth > 800
            ? '500px'
            : '360px'
        }
        style={{ fill: 'transparent', position: 'relative', top: '-40px' }}
        sx={{
          alignSelf: 'center',
          maxHeight: '400px',
          '@media (max-width:800px)': {
            maxHeight: '200px',
          },
        }}
      />
      <Stack
        justifyContent="center"
        sx={{
          rowGap: '110px',
          '@media (max-width:800px)': {
            rowGap: '40px',
          },
        }}
      >
        <Stack
          rowGap="6px"
          sx={{
            maxWidth: '250px',
            '@media (max-width:700px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography variant="h2" color="secondary.main">
            Ой...
          </Typography>
          <Typography variant="body1" color="secondary.main">
            страница не найдена, мы уже спешим все наладить
          </Typography>
        </Stack>
        <Button
          variant="default"
          color="primary"
          onClick={() => router.push('/')}
        >
          на главную
        </Button>
      </Stack>
    </Stack>
  );
};
