import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { TArticleData } from '@/shared/articlesData/articles.data';

type LinkButtonContainerProps = {
  linkVariantColor: string;
  articles: TArticleData[];
  row: 'first' | 'second';
  width?: string;
};

export const LinkButtonContainer = ({
  linkVariantColor,
  articles,
  row,
  width,
}: LinkButtonContainerProps) => {
  return (
    <Stack
      direction="row"
      columnGap="8px"
      flexWrap="nowrap"
      width={width ? width : '100%'}
    >
      {articles
        .slice(row === 'first' ? 0 : 2, row === 'first' ? 2 : 4)
        .map((article: TArticleData, index: number) => (
          <Link
            key={index}
            variant="linkButton"
            color={linkVariantColor}
            href={article.id}
          >
            {article.title}
          </Link>
        ))}
    </Stack>
  );
};
