'use client';
import { useSelector } from 'react-redux';

import { TArticleData } from '@/shared/articlesData/articles.data';
import { ArticleCardFirstType } from './ArticleCardFirstType';
import { ArticleCardSecondType } from './ArticleCardSecondType';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type ArticleCardProps = {
  articleData: TArticleData;
  index: number;
};

export const ArticleCard = ({ articleData, index }: ArticleCardProps) => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <>
      {windowInnerWidth > 600 ? (
        index === 6 || index === 15 ? (
          <ArticleCardSecondType articleData={articleData} index={index} />
        ) : (
          <ArticleCardFirstType articleData={articleData} />
        )
      ) : (
        <ArticleCardSecondType articleData={articleData} index={index} />
      )}
    </>
  );
};
