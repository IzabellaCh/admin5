import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import { TArticleData } from '@/shared/articlesData/articles.data';
import { ServiceData } from '@/shared/serviceData/service.data';
import { LinkMore } from '@/components/Link/LinkMore';

type ServiceArticlesMenuProps = {
  handleNavigate: () => void;
  serviceData: ServiceData;
};

export const ServiceArticlesMenu = ({
  handleNavigate,
  serviceData,
}: ServiceArticlesMenuProps) => {
  {
    return (
      <Stack rowGap="50px" pt="45px" sx={{ overflowY: 'scroll' }}>
        <IconButton
          onClick={handleNavigate}
          sx={(theme) => ({
            position: 'absolute',
            top: 18,
            left: 15,
            fontSize: '30px',
            '& svg path': {
              stroke: theme.palette.primary.main,
            },
          })}
        >
          <CustonMuiIcon
            type="icon-arrow-left"
            size="30px"
            style={{ fill: 'transparent' }}
          />
        </IconButton>
        {serviceData.articles
          .slice(0, 7)
          .map((article: TArticleData, index: number) => (
            <Link key={index} href={`/blog/${article.id}`}>
              <Typography
                variant="h1"
                color="secondary.main"
                sx={{
                  transition: 'all 0.5s linear',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {article.title}
              </Typography>
            </Link>
          ))}
        {serviceData.articles.length - 7 > 0 ? (
          <LinkMore
            number={serviceData.articles.length - 7}
            href={serviceData.route}
            sx={{
              fontSize: '35px',
            }}
          />
        ) : null}
      </Stack>
    );
  }
};
