'use client';

import { useSelector } from 'react-redux';
import { useRef } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { TLinkedPrice } from '@/shared/articlesData/articles.data';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type LinkedSrevicesProps = {
  services?: TLinkedPrice[];
};

const cardStyles = {
  borderRadius: '10px',
  backgroundColor: 'primary.light',
  p: '15px',
  justifyContent: 'flex-end',
  minHeight: '176px',
  boxSizing: 'border-box',
  rowGap: '8px',
  '@media (max-width:600px)': {
    minHeight: '172px',
  },
};

const lineStyles = {
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  p: '0 7px 4px',
  flexWrap: 'nowrap',
};

const gridContainerStyles = {
  borderRadius: '10px',
  backgroundColor: 'primary.light',
  p: '7px 20px 6px',
};

const gridItemStyles = {
  borderBottom: '1px solid',
  borderColor: 'primary.main',
  '&:last-of-type': {
    borderBottom: 'none',
  },
};

export const LinkedSrevices = ({ services }: LinkedSrevicesProps) => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const ref = useRef(null);

  if (services === undefined) return null;

  return (
    <Grid
      container
      spacing={services.length < 7 ? '4%' : '0px'}
      mb="15px"
      sx={services.length < 7 ? undefined : gridContainerStyles}
    >
      {services.map((service, index) => (
        <Grid
          item
          xs={services.length < 7 ? (windowInnerWidth > 600 ? 4 : 6) : 12}
          key={index}
          sx={services.length < 7 ? undefined : gridItemStyles}
        >
          <Stack
            direction={services.length < 7 ? 'column' : 'row'}
            flexWrap="wrap"
            sx={services.length < 7 ? cardStyles : lineStyles}
            ref={ref}
          >
            <Typography
              variant="body1"
              color="secondary.main"
              pt={services.length < 7 ? undefined : '10px'}
              sx={{
                maxWidth: '320px',
                '@media (max-width:600px)': {
                  maxWidth: 'calc(100% - 90px)',
                },
              }}
            >
              {service.name}
            </Typography>
            <Typography
              variant="h2"
              color="secondary.main"
            >{`${service.price} ₽`}</Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
