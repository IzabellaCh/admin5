import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import { SERVICES } from '@/shared/serviceData/service.data';
import { LinkMore } from '@/components/Link/LinkMore';

export const ServicesPopoverContent = () => {
  return (
    <Grid container spacing={5}>
      {SERVICES.map((service, index) => (
        <Grid key={index} item xs={4}>
          <Stack rowGap="14px">
            <Link variant="menuSubheader" href={service.route}>
              {service.title}
            </Link>
            <Box>
              <Stack rowGap="7px">
                {service.articles.slice(0, 7).map((article) => (
                  <Link
                    key={article.id}
                    variant="menuItem"
                    href={`blog/${article.id}`}
                  >
                    {article.title}
                  </Link>
                ))}
              </Stack>
            </Box>
            {service.articles.length - 7 > 0 ? (
              <LinkMore
                number={service.articles.length - 7}
                href={service.route}
              />
            ) : null}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
