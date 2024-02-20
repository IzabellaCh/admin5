'use client';

import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { getNoun } from '@/utils/function';

type ScoreProps = {
  names: string[];
  number: number;
  width: string;
  lateralBorder?: string;
  minHeight?: string;
};

export const Score = ({
  names,
  number,
  width,
  lateralBorder,
  minHeight,
}: ScoreProps) => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const word = getNoun(number, names[0], names[1], names[2]);
    setName(word);
  }, [number, names]);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      rowGap="3px"
      width={width}
      borderLeft={lateralBorder}
      borderRight={lateralBorder}
      sx={{
        minHeight: minHeight ? minHeight : '151px',
        borderColor: 'primary.main',
        '@media (max-width:900px)': {
          minHeight: minHeight ? minHeight : '92px',
        },
      }}
    >
      <Typography variant="h1" color="secondary.main" lineHeight={1}>
        {number}
      </Typography>
      <Typography
        variant="h2"
        color="secondary.main"
        lineHeight={1}
        sx={{
          '@media (max-width:900px)': {
            fontSize: 18,
            fontWeight: 300,
          },
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
};
