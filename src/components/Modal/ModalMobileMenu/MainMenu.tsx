'use client';

import { useDispatch } from 'react-redux';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { ELiterals } from '@/types/types';
import {
  HEADER_LINKS_DATA,
  HeaderLinkData,
} from '@/components/Header/header.data';
import { ButtonMore } from '@/components/Button/ButtonMore/ButtonMore';
import { changeModalCondition } from '@/redux/slices/modal-condition-slice';
import { LINKS, formatPhoneNumber } from '@/shared/linksData/links.data';
import { SocialContacts } from '@/components/SocialContacts/SocialContacts';

type MainMenuProps = {
  onServicesMenu: () => void;
};

export const MainMenu = ({ onServicesMenu }: MainMenuProps) => {
  const dispatch = useDispatch();

  return (
    <Stack width="100%" height="100%" justifyContent="space-around">
      <Stack justifyContent="space-around" maxHeight="450px" height="53%">
        {HEADER_LINKS_DATA.map((linkData: HeaderLinkData) => {
          if (linkData.type === ELiterals.Link) {
            return (
              <Link key={linkData.label} href={linkData.href}>
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
                  {linkData.label}
                </Typography>
              </Link>
            );
          } else {
            return (
              <ButtonMore
                key={linkData.label}
                text={linkData.label}
                onClick={onServicesMenu}
                className="menu-mobile-button"
              />
            );
          }
        })}
      </Stack>
      <Stack width="100%" alignItems="center">
        <Button
          variant="default"
          color="primary"
          onClick={() => dispatch(changeModalCondition(true))}
          sx={{
            maxWidth: '357px',
            width: '100%',
            height: '65px',
          }}
        >
          связаться с нами
        </Button>
        <SocialContacts iconSize="58px" columnGap="28px" p="30px 0 20px" />
        <Typography
          variant="h2"
          color="secondary.main"
          pt="6px"
          fontSize="22px"
        >
          Тел:{' '}
          <Link href={`tel:+${LINKS.phoneNumber}`} variant="articleListItem">
            {formatPhoneNumber(LINKS.phoneNumber)}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};
