'use client';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { TArticleData } from '@/shared/articlesData/articles.data';
import defaultImage from '../../../public/assets/icons/about-us-page/image_about_us_second.jpg';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';
import { useRouter } from 'next/navigation';

type ArticleCardProps = {
  articleData: TArticleData;
  index: number;
};

export const ArticleCardSecondType = ({
  articleData,
  index,
}: ArticleCardProps) => {
  const router = useRouter();

  return (
    <Link
      href={`/blog/${articleData.id}`}
      sx={(theme) => ({
        gridColumn: index === 6 ? '1 / 3' : '2 / 4',
        '@media (max-width:600px)': {
          gridColumn: '1 / 3',
          '&:nth-of-type(5n) .MuiStack-root': {
            backgroundColor: theme.palette.primary.light,
          },
        },
      })}
    >
      <Stack
        direction="row"
        borderRadius="10px"
        width="100%"
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.light,
          minHeight: '383px',
          p: '16px 48px 13px 14px',
          columnGap: '34px',
          '@media (max-width:600px)': {
            backgroundColor: theme.palette.primary.contrastText,
            minHeight: '185px',
            maxHeight: '185px',
            p: '15px',
            columnGap: '14px',
            border: '1px solid',
            borderColor: theme.palette.primary.light,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
          },
        })}
      >
        <Box
          sx={{
            backgroundImage: articleData.imageSrc
              ? `url(${articleData.imageSrc})`
              : `url(${defaultImage.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '6px',
            minWidth: '319px',
            minHeight: '354px',
            '@media (max-width:1160px)': {
              minWidth: '50%',
            },
            '@media (max-width:600px)': {
              minHeight: '155px',
              minWidth: '37.5%',
            },
          }}
        ></Box>
        <Stack justifyContent="space-between">
          <Box
            sx={{
              pt: '21px',
              '@media (max-width:600px)': {
                pt: '0px',
              },
            }}
          >
            <Typography
              variant="caption"
              color="secondary.main"
              borderRadius="4px"
              sx={{
                backgroundColor: 'primary.contrastText',
                p: '2px 4px',
                '@media (max-width:600px)': {
                  backgroundColor: 'transparent',
                  p: '0px',
                },
              }}
            >
              {articleData.date ? articleData.date : '12.02.2023'}
            </Typography>
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
                WebkitLineClamp: '3',
                MozLineClamp: '3',
                MsLineClamp: '3',
                lineClamp: '3',
                pt: '5px',
                '@media (max-width:600px)': {
                  fontSize: 22,
                  pt: '0px',
                },
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
                WebkitLineClamp: '3',
                MozLineClamp: '3',
                MsLineClamp: '3',
                lineClamp: '3',
                pt: '20px',
                '@media (max-width:600px)': {
                  pt: '14px',
                  WebkitLineClamp: '1',
                  MozLineClamp: '1',
                  MsLineClamp: '1',
                  lineClamp: '1',
                },
              }}
              overflow="hidden"
            >
              {articleData.text
                ? articleData.text
                : 'Здесь можно найти статьи по самостоятельной настройке своего сервера VPN. Здесь можно найти статьи по самостоятельной настройке своего сервера VPN.'}
            </Typography>
          </Box>
          <ButtonMore
            text="Читать"
            onClick={() => router.push(articleData.id)}
            sx={{
              mb: '22px',
              '@media (max-width:600px)': {
                display: 'none',
              },
            }}
          />
        </Stack>
      </Stack>
    </Link>
  );
};
