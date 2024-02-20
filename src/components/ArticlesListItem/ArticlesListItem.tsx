import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { TArticleData } from '@/shared/articlesData/articles.data';

type ArticlesListItemProps = {
  article: TArticleData;
};

export const ArticlesListItem = ({ article }: ArticlesListItemProps) => {
  return (
    <Link
      href={`blog/${article.id}`}
      width="100%"
      borderBottom="1px solid"
      borderColor="primary.light"
      p="3px 5px 5px 9px"
      sx={{
        '&:hover': {
          borderRadius: '6px',
          backgroundColor: 'primary.light',
          flex: '1 auto',
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" columnGap="30px">
        <Typography variant="body1" color="primary.main" fontWeight={400}>
          {article.title}
        </Typography>
        <Typography
          variant="body1"
          color="primary.main"
          fontWeight={600}
          whiteSpace="nowrap"
        >
          {article.price}
          <Box component="span" fontWeight={400}>
            {' '}
            ₽
          </Box>
        </Typography>
      </Stack>
    </Link>
  );
};
