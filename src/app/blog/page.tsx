'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, ChangeEvent, useRef } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { PopularArticle } from '@/components/PopularArticle/PopularArticle';
import { ETags, TTag } from '@/shared/tagsData/tags.data';
import {
  ALL_ARTICLES,
  TArticleData,
} from '@/shared/articlesData/articles.data';

import { ArticleCard } from '@/components/ArticleCard/ArticleCard';
import { ButtonGoBack } from '@/components/Button/ButtonGoBack/ButtonGoBack';
import { ButtonGoForward } from '@/components/Button/ButtonGoForward/ButtonGoForward';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';
import { ScrollableContainer } from '@/containers/ScrollableContainer';

const allTags = [
  ETags.All,
  ETags.Services,
  ETags.Clients,
  ETags.Result,
  ETags.DoItYourself,
];

const paginationNumber: number = 19;

const Blog = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const searchParams = useSearchParams();

  const [tag, setTag] = useState<TTag>(ETags.All);
  const [visibleArticles, setVisibleArticles] =
    useState<TArticleData[]>(ALL_ARTICLES);
  const [currentFirstCard, setCurrentFirstCard] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const scrl = useRef<HTMLElement>(null);

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    const newCurrentFirstCard = (value - 1) * paginationNumber;
    setCurrentFirstCard(newCurrentFirstCard);
    setPage(value);
  };

  useEffect(() => {
    if (tag.length) {
      const newVisibleArticles = ALL_ARTICLES.filter(
        (article) => article.tags?.includes(tag),
      );
      if (newVisibleArticles.length) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setVisibleArticles(newVisibleArticles);
      } else {
        setVisibleArticles([]);
      }
    } else {
      setVisibleArticles(ALL_ARTICLES);
    }
    setCurrentFirstCard(0);
    setPage(1);
  }, [tag]);

  useEffect(() => {
    const currentTag = searchParams?.get('tag');

    if (currentTag) {
      setTag(currentTag);
    }
  }, [searchParams]);

  return (
    <>
      <PopularArticle />
      {windowInnerWidth > 1160 ? (
        <Stack
          direction="row"
          columnGap={allTags.length > 7 ? '13px' : '10px'}
          rowGap="7px"
          pb="30px"
          flexWrap="wrap"
        >
          {allTags.map((buttonTag, index) => (
            <Button
              key={index}
              variant="default"
              color="secondary"
              className={`button-filter ${
                tag === buttonTag ? 'button-selected' : ''
              } ${allTags.length > 7 ? 'button-filter-small' : ''}`}
              onClick={() => setTag(buttonTag)}
              disabled={tag === buttonTag}
            >
              {buttonTag.length ? buttonTag : 'все'}
            </Button>
          ))}
        </Stack>
      ) : (
        <ScrollableContainer
          childrenGap={13}
          ref={scrl}
          minHeight={windowInnerWidth > 600 ? '50px' : '65px'}
          paddingBottom="0px"
          mb="30px"
        >
          {allTags.map((buttonTag, index) => (
            <Button
              key={index}
              variant="default"
              color="secondary"
              className={`button-filter ${
                tag === buttonTag ? 'button-selected' : ''
              } ${allTags.length > 7 ? 'button-filter-small' : ''}`}
              onClick={() => setTag(buttonTag)}
              disabled={tag === buttonTag}
            >
              {buttonTag.length ? buttonTag : 'все'}
            </Button>
          ))}
        </ScrollableContainer>
      )}
      <Stack rowGap="47px">
        <Box
          display="grid"
          justifyItems="stretch"
          alignItems="stretch"
          sx={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            rowGap: '20px',
            columnGap: '20px',
            '@media (max-width:900px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}
        >
          {visibleArticles
            .slice(currentFirstCard, currentFirstCard + paginationNumber)
            .map((article: TArticleData, index: number) => (
              <ArticleCard key={index} articleData={article} index={index} />
            ))}
        </Box>
        {visibleArticles.length ? (
          <Pagination
            count={Math.ceil(visibleArticles.length / paginationNumber)}
            shape="rounded"
            sx={{ alignSelf: 'flex-end' }}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: ButtonGoBack,
                  next: ButtonGoForward,
                }}
                {...item}
              />
            )}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            onChange={handleChangePage}
          />
        ) : null}
      </Stack>
    </>
  );
};

export default Blog;
