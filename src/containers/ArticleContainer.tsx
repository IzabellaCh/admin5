'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { changeModalCondition } from '@/redux/slices/modal-condition-slice';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import {
  TArticleData,
  EServiceSections,
} from '@/shared/articlesData/articles.data';
import { ENavigationLinksHref } from '@/shared/navigationData/navigation.data';
import { ScrollableCardStack } from '@/components/ScrollableCardStack/ScrollableCardStack';
import {
  HEADER_LINKS_DATA,
  HeaderLinkData,
} from '@/components/Header/header.data';
type ArticleContainerProps = {
  children: ReactNode;
  article: TArticleData;
  commonWidth: string;
};

export const ArticleContainer = ({
  children,
  article,
  commonWidth,
}: ArticleContainerProps) => {
  const dispatch = useDispatch();

  const [menuStart, setMenuStart] = useState<number>(1500);

  useEffect(() => {
    const articleImage = document.getElementById('article-image');
    if (articleImage) {
      setMenuStart(articleImage.offsetTop + articleImage.offsetHeight + 100);
    }
  }, []);

  return (
    <>
      <Stack
        alignItems="center"
        width="100%"
        position="relative"
        sx={{
          p: '80px 0 134px',
          '@media (max-width:900px)': {
            p: '50px 0 56px',
          },
        }}
      >
        <Stack
          direction="row"
          columnGap="12px"
          rowGap="12px"
          flexWrap="wrap"
          pb="5px"
          justifyContent="flex-start"
          sx={{
            width: commonWidth,
            '@media (max-width:661px)': {
              width: '100%',
              alignSelf: 'flex-start',
            },
          }}
        >
          {article?.sections?.map((section, index) => (
            <Link
              key={index}
              variant="linkButton"
              color="primary"
              href={
                section === EServiceSections.PC
                  ? ENavigationLinksHref.PC
                  : section === EServiceSections.Servers
                  ? ENavigationLinksHref.Servers
                  : ENavigationLinksHref.Nets
              }
            >
              {section}
            </Link>
          ))}
          {article?.tags?.map((tag, index) => (
            <Link
              key={index}
              variant="linkButton"
              color="primary"
              href={`/blog?tag=${tag}`}
            >
              {tag}
            </Link>
          ))}
        </Stack>
        <Typography
          variant="h1"
          color="secondary.main"
          sx={{
            width: commonWidth,
            pb: '53px',
            '@media (max-width:900px)': {
              pb: '15px',
            },
            '@media (max-width:600px)': {
              width: '100%',
              pb: '15px',
            },
          }}
        >
          {article?.title}
        </Typography>
        {children}
        <Stack
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          sx={{
            backgroundColor: 'primary.light',
            width: commonWidth,
            borderRadius: '10px',
            p: '38px 0px 43px',
            '@media (max-width:600px)': {
              width: '100vw',
              borderRadius: '0px',
              p: '34px 0px 22px',
            },
          }}
        >
          <Stack
            justifyContent="space-between"
            alignItems="center"
            rowGap="40px"
          >
            <Typography
              variant="h2"
              color="secondary.main"
              textAlign="center"
              sx={{
                '@media (max-width:600px)': {
                  fontSize: 22,
                  maxWidth: '50%',
                },
              }}
            >
              Закажите услугу прямо сейчас
            </Typography>
            <Button
              variant="default"
              color="primary"
              onClick={() => dispatch(changeModalCondition(true))}
              sx={{
                '@media (max-width:600px)': {
                  width: '360px',
                },
              }}
            >
              связаться с нами
            </Button>
          </Stack>
        </Stack>
        <Box
          position="absolute"
          top={menuStart}
          bottom="150px"
          left="0"
          sx={{
            '@media (max-width:950px)': {
              display: 'none',
            },
          }}
        >
          <Stack rowGap="30px" position="sticky" top="30%">
            {HEADER_LINKS_DATA.map((linkData: HeaderLinkData) => (
              <Link
                href={linkData.href}
                key={linkData.label}
                variant="navigation"
              >
                {linkData.label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          color="secondary.main"
          sx={{
            pb: '41px',
            '@media (max-width:700px)': {
              fontSize: 22,
              pb: '12px',
            },
          }}
        >
          Вам также может понравиться&nbsp;это
        </Typography>
        <ScrollableCardStack articleData={article} />
      </Stack>
    </>
  );
};
