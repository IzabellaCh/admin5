'use client';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TArticleData } from '@/shared/articlesData/articles.data';

import defaultImage from '../../../public/assets/icons/about-us-page/image_about_us_second.jpg';

type ArticleCardFirstTypeProps = {
  articleData: TArticleData;
};

export const ArticleCardFirstType = ({
  articleData,
}: ArticleCardFirstTypeProps) => {
  return (
    <Link href={`blog/${articleData.id}`}>
      <Stack
        p="16px 14px 30px"
        sx={(theme) => ({
          borderColor: theme.palette.primary.light,
          transition: 'background 1s linear',
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
        })}
        border="1px solid"
        borderRadius="10px"
        width="100%"
        minHeight="383px"
      >
        <Box
          position="relative"
          width="100%"
          minHeight="183px"
          sx={{
            backgroundImage: articleData.imageSrc
              ? `url(${articleData.imageSrc})`
              : `url(${defaultImage.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '5px',
          }}
        >
          <Typography
            variant="caption"
            color="secondary.main"
            borderRadius="4px"
            sx={{ backgroundColor: 'primary.contrastText' }}
            position="absolute"
            bottom="-10px"
            left="-3px"
            p="2px 4px"
          >
            {articleData.date ? articleData.date : '12.02.2023'}
          </Typography>
        </Box>
        <Box width="100%" pt="12px">
          <Typography
            variant="h2"
            color="secondary.main"
            sx={{
              whiteSpace: 'wrap',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              MozBoxOrient: 'vertical',
              MsBoxOrient: 'vertical',
              boxOrient: 'vertical',
              WebkitLineClamp: '2',
              MozLineClamp: '2',
              MsLineClamp: '2',
              lineClamp: '2',
            }}
            overflow="hidden"
          >
            {articleData.title}
          </Typography>
          <Typography
            variant="body1"
            color="secondary.main"
            sx={{
              whiteSpace: 'wrap',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              MozBoxOrient: 'vertical',
              MsBoxOrient: 'vertical',
              boxOrient: 'vertical',
              WebkitLineClamp: '2',
              MozLineClamp: '2',
              MsLineClamp: '2',
              lineClamp: '2',
            }}
            overflow="hidden"
            pt="15px"
          >
            {articleData.text
              ? articleData.text
              : 'Здесь можно найти статьи по самостоятельной настройке своего сервера VPN. Здесь можно найти статьи по самостоятельной настройке своего сервера VPN.'}
          </Typography>
        </Box>
      </Stack>
    </Link>
  );
};
