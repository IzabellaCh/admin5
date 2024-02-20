'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { ALL_ARTICLES } from '@/shared/articlesData/articles.data';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';

import defaultImage from '../../../public/assets/icons/about-us-page/image_about_us_second.jpg';

export const PopularArticle = () => {
  const router = useRouter();

  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    const num = Math.floor(Math.random() * ALL_ARTICLES.length - 1);
    setRandomNumber(num);
  }, []);

  return (
    <Stack
      width="100%"
      justifyContent="space-between"
      columnGap="10px"
      sx={{
        backgroundColor: 'primary.light',
        flexDirection: 'row',
        p: '32px 31px 36px 25px',
        mt: '50px',
        mb: '50px',
        '@media (max-width:600px)': {
          flexDirection: 'column-reverse',
          p: '12px 12px 15px',
          mt: '20px',
          mb: '70px',
        },
      }}
      borderRadius="10px"
    >
      <Stack justifyContent="space-between">
        <Box
          sx={{
            '@media (max-width:600px)': {
              pb: '50px',
            },
          }}
        >
          <Typography
            variant="body1"
            color="secondary.main"
            sx={{
              p: '7px 0 11px',
              '@media (max-width:600px)': {
                fontStyle: 'italic',
                p: '20px 0 5px',
              },
            }}
          >
            больше всего просмотров
          </Typography>
          <Typography variant="h1" color="secondary.main">
            {ALL_ARTICLES[randomNumber]?.title}
          </Typography>
        </Box>
        <ButtonMore
          text="Читать"
          onClick={() => router.push(`blog/${ALL_ARTICLES[randomNumber]?.id}`)}
        />
      </Stack>
      <Box
        sx={{
          backgroundImage: ALL_ARTICLES[randomNumber]?.imageSrc
            ? `url(${ALL_ARTICLES[randomNumber]?.imageSrc})`
            : `url(${defaultImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '6px',
          width: '375px',
          height: '375px',
          '@media (max-width:1080px)': {
            width: '300px',
            height: '300px',
          },
          '@media (max-width:800px)': {
            width: '250px',
            height: '250px',
          },
          '@media (max-width:600px)': {
            width: '100%',
            height: '200px',
          },
        }}
      ></Box>
    </Stack>
  );
};
