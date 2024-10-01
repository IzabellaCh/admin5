'use client';

import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CustomLink } from '@/components/Link/CustomLink';
import { LINKS, formatPhoneNumber } from '@/shared/linksData/links.data';
import { FOOTER_LINKS_DATA } from './footer.data';
import { SocialContacts } from '@/components/SocialContacts/SocialContacts';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

export const Footer = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const marginStyles = {
    width: '75%',
    maxWidth: '1440px',
    margin: '0 auto',
  };

  const lineStyles = {
    width: '100%',
    borderTop: '2px solid',
    borderColor: 'primary.main',
  };

  const navStyles = {
    rowGap: '10px',
    minWidth: '148px',
  };

  return (
    <footer>
      <Box sx={lineStyles} mt="150px">
        <Stack
          sx={{
            p: '20px 0 27px',
            ...marginStyles,
            flexDirection: 'row',
            '@media (max-width:760px)': {
              width: '100%',
              padding: '43px 15px 39px',
            },
            '@media (max-width:600px)': {
              flexDirection: 'column',
              rowGap: '40px',
            },
          }}
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <SocialContacts
            iconSize="40px"
            columnGap="10px"
            alignItems="flex-start"
            sx={{
              '@media (max-width:900px)': {
                display: 'none',
              },
            }}
          />
          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{
              columnGap: '76px',
              '@media (max-width:1200px)': {
                columnGap: '32px',
              },
              '@media (max-width:1050px)': {
                columnGap: '10px',
              },
              '@media (max-width:900px)': {
                columnGap: '32px',
              },
            }}
          >
            <Stack sx={navStyles}>
              {FOOTER_LINKS_DATA.slice(0, 3).map((service) => (
                <CustomLink
                  key={service.label}
                  variant="navigation"
                  href={service.href}
                >
                  {service.label}
                </CustomLink>
              ))}
            </Stack>
            <Stack sx={navStyles}>
              {FOOTER_LINKS_DATA.slice(3).map((service) => (
                <CustomLink
                  key={service.label}
                  variant="navigation"
                  href={service.href}
                >
                  {service.label}
                </CustomLink>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="body1" color="secondary.main">
              Тел:{' '}
              <Link
                href={`tel:+${LINKS.phoneNumber}`}
                variant="articleListItem"
                fontWeight="400"
              >
                {formatPhoneNumber(LINKS.phoneNumber)}
              </Link>
            </Typography>
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{
                pt: '6px',
                '@media (max-width:600px)': {
                  pt: '16px',
                },
              }}
            >
              E-mail:{' '}
              <Link
                href={`mailto:${LINKS.email}&body=Добрый день!?subject=Вопрос по услуге`}
                variant="articleListItem"
                fontWeight="400"
              >
                {LINKS.email}
              </Link>
            </Typography>
            <SocialContacts
              iconSize={windowInnerWidth > 600 ? '40px' : '58px'}
              alignItems="flex-start"
              sx={{
                display: 'none',
                pt: '10px',
                '@media (max-width:900px)': {
                  display: 'flex',
                  columnGap: '10px',
                },
                '@media (max-width:600px)': {
                  pt: '43px',
                  columnGap: '42px',
                },
              }}
            />
          </Stack>
        </Stack>
      </Box>
      <Box sx={lineStyles}>
        <Stack
          sx={{
            p: '10px 0 45px',
            ...marginStyles,
            '@media (max-width:760px)': {
              width: '100%',
              p: '12px 15px 45px',
            },
          }}
        >
          <Typography
            variant="body1"
            color="secondary.main"
            sx={{
              '@media (max-width:760px)': {
                fontSize: '15px',
              },
            }}
          >
            &#169; ООО &quot;ИСКРА&quot;, г. Санкт-Петербург, 2008 - 2024
          </Typography>
        </Stack>
      </Box>
    </footer>
  );
};
