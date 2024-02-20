'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import {
  ALL_ARTICLES,
  TArticleData,
  TServiceSection,
} from '@/shared/articlesData/articles.data';
import { TTag } from '@/shared/tagsData/tags.data';
import { ArticleCardFirstType } from '@/components/ArticleCard/ArticleCardFirstType';
import { ArticleCardSecondType } from '@/components/ArticleCard//ArticleCardSecondType';
import { ButtonBackAndForward } from '@/components/Button/ButtonBackAndForward/ButtonBackAndForward';
import { ScrollableContainer } from '@/containers/ScrollableContainer';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type TArticleCardSize = {
  width: number;
  gap: number;
};

type ScrollableCardStackProps = {
  articleData: TArticleData;
};

export const ScrollableCardStack = ({
  articleData,
}: ScrollableCardStackProps) => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const [scrolledArticles, setScrolledArticles] = useState<TArticleData[]>([]);

  const filterArticles = useCallback(
    (pointArr: (TServiceSection | TTag)[], articlesArr: TArticleData[]) => {
      const set = new Set();

      for (const article of articlesArr) {
        if (article.id === articleData.id) continue;
        for (const point of pointArr) {
          if (set.has(article.id)) break;
          if (
            article.tags?.includes(point) ||
            article.sections?.includes(point as TServiceSection)
          ) {
            set.add(article.id);
          }
        }
      }
      return articlesArr.filter((article) => set.has(article.id));
    },
    [articleData.id],
  );

  useEffect(() => {
    let currentTagsAndSections: (TServiceSection | TTag)[];
    if (articleData.tags?.length && articleData.sections?.length) {
      currentTagsAndSections = articleData.tags.concat(articleData.sections);
    } else if (articleData.tags?.length) {
      currentTagsAndSections = articleData.tags;
    } else if (articleData.sections?.length) {
      currentTagsAndSections = articleData.sections;
    } else {
      currentTagsAndSections = [];
    }

    if (currentTagsAndSections.length) {
      const newVisibleArticles: TArticleData[] = filterArticles(
        currentTagsAndSections,
        ALL_ARTICLES,
      );
      setScrolledArticles(newVisibleArticles.slice(0, 6));
    } else {
      setScrolledArticles(
        ALL_ARTICLES.filter((article) => article.id !== articleData.id).slice(
          0,
          6,
        ),
      );
    }
  }, [articleData, filterArticles]);

  const [articleSizes, setArticleSizes] = useState<TArticleCardSize>({
    width: 347,
    gap: 20,
  });

  useEffect(() => {
    if (window.innerWidth > 1080) {
      if (articleSizes.width !== 347 || articleSizes.gap !== 20) {
        setArticleSizes({
          width: 347,
          gap: 20,
        });
      }
    }
  }, [articleSizes]);

  const scrl = useRef<HTMLElement>(null);

  const [scrollX, setscrollX] = useState<number>(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift: number) => {
    if (scrl.current === null) return;
    scrl.current.scrollLeft += shift;
    setscrollX((prev) => prev + shift);
  };

  const scrollCheck = () => {
    if (scrl.current === null) return;

    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <Stack position="relative" width="100%" rowGap="10px">
      {windowInnerWidth > 600 ? (
        <>
          <Box
            position="absolute"
            sx={{
              top: '-73px',
              right: '0px',
              '@media (max-width:700px)': {
                top: '-50px',
              },
            }}
          >
            <ButtonBackAndForward
              slideBack={() => slide(-articleSizes.width - articleSizes.gap)}
              slideForward={() => slide(articleSizes.width + articleSizes.gap)}
              scrollEnd={scrollEnd}
              scrollX={scrollX}
              stackPaddingBottom="3px"
              iconSize="29px"
              iconTypeLeft="icon-arrow-left"
              iconTypeRight="icon-arrow-right"
            />
          </Box>
          <ScrollableContainer
            scrollCheck={scrollCheck}
            childrenGap={articleSizes.gap}
            ref={scrl}
            width="100%"
            minHeight="383px"
          >
            {scrolledArticles.map((article: TArticleData, index: number) => (
              <Box key={index} width={articleSizes.width}>
                <ArticleCardFirstType articleData={article} />
              </Box>
            ))}
          </ScrollableContainer>
        </>
      ) : (
        <>
          {scrolledArticles
            .slice(0, 3)
            .map((article: TArticleData, index: number) => (
              <Box key={index} width="100%">
                <ArticleCardSecondType articleData={article} index={index} />
              </Box>
            ))}
        </>
      )}
    </Stack>
  );
};
