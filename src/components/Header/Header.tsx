'use client';

import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import { HEADER_LINKS_DATA, HeaderLinkData } from './header.data';
import { ButtonWithPopover } from '@/components/Button/ButtonWithPopover/ButtonWithPopover';
import { ServicesPopoverContent } from '@/components/ServicesPopoverContent/ServicesPopoverContent';
import {
  changeModalCondition,
} from '@/redux/slices/modal-condition-slice';
import {
  setWindowInnerWidth,
  selectWindowInnerWidth,
} from '@/redux/slices/window-inner-width-slice';
import { LINKS, formatPhoneNumber } from '@/shared/linksData/links.data';
import { ELiterals } from '@/types/types';

import { selectIsMobileDevice } from '@/redux/slices/mobile-device-slice';
import { setDevise } from '@/redux/slices/mobile-device-slice';

import { ModalMobileMenu } from '@/components/Modal/ModalMobileMenu/ModalMobileMenu';

export const Header = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isMobileDevice = useSelector(selectIsMobileDevice);
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(950);

  const [isModalMobileMenuOpen, setModalMobileMenuOpen] =
    useState<boolean>(false);

  const handleScroll = () => {
    setTimeout(() => setScrollTop(window.scrollY), 2000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop > windowHeight && windowHeight !== 850) {
      setWindowHeight(850);
    } else if (scrollTop < windowHeight && windowHeight !== 950) {
      setWindowHeight(950);
    }
  }, [scrollTop, windowHeight]);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      // true for mobile device
      dispatch(setDevise(true));
    } else {
      // false for not mobile device
      dispatch(setDevise(false));
    }
  }, [dispatch]);

  // TODO: добаить ссылку на телеграм, когда будут статьи, убрать header

  const onUpdateWidth = useCallback(() => {
    setTimeout(() => dispatch(setWindowInnerWidth(window.innerWidth)), 2000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(setWindowInnerWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onUpdateWidth);

    return () => {
      window.removeEventListener('resize', onUpdateWidth);
    };
  }, [onUpdateWidth]);

  if (
    pathname?.includes('/blog/') &&
    scrollTop > windowHeight &&
    windowInnerWidth > 950
  )
    return null;

  return (
    <header
      style={{
        position: 'sticky',
        width: '100%',
        top: 0,
        zIndex: 10,
      }}
    >
      <Box
        sx={(theme) => ({
          width: '100%',
          boxShadow: `0px 4px 13px ${theme.palette.info.dark}`,
          borderRadius: '0 0 20px 20px',
          backgroundColor: 'primary.contrastText',
        })}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            maxWidth: '1440px',
            width: '90%',
            padding: scrollTop > windowHeight ? '19px 0 14px' : '19px 0 37px',
            margin: '0 auto',
            '@media (max-width:1200px)': {
              padding: '19px 0 14px',
            },
            '@media (max-width:900px)': {
              width: '100%',
              padding: '18px 15px 18px',
            },
          }}
        >
          <Link href="/">
            <Stack
              direction="row"
              maxHeight="65px"
              overflow="hidden"
              alignItems="center"
              sx={{
                '@media (max-width:900px)': {
                  maxHeight: '50px',
                },
              }}
            >
              {scrollTop > windowHeight ? null : (
                <CustonMuiIcon
                  type="icon-logo-letter"
                  size={windowInnerWidth > 900 ? '78px' : '52px'}
                />
              )}
              <CustonMuiIcon
                type="icon-logo-name"
                size={windowInnerWidth > 900 ? '172px' : '121px'}
              />
            </Stack>
          </Link>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="46%"
            sx={{
              '@media (max-width:1300px)': {
                width: 'max-content',
                columnGap: '20px',
              },
              '@media (max-width:900px)': {
                display: 'none',
              },
            }}
          >
            {HEADER_LINKS_DATA.map((linkData: HeaderLinkData) => {
              if (linkData.type === ELiterals.Link) {
                return (
                  <Link
                    href={linkData.href}
                    key={linkData.label}
                    variant="navigation"
                    sx={{
                      fontWeight: pathname?.includes(linkData.href)
                        ? 600
                        : null,
                    }}
                  >
                    {linkData.label}
                  </Link>
                );
              } else {
                return (
                  <ButtonWithPopover
                    key={linkData.label}
                    label={linkData.label}
                    thisPage={
                      (pathname !== null &&
                        linkData.includesPages?.includes(pathname)) ||
                      linkData.href === pathname
                    }
                  >
                    <ServicesPopoverContent />
                  </ButtonWithPopover>
                );
              }
            })}
          </Stack>
          <Stack
            direction="row"
            columnGap="17px"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              '@media (max-width:900px)': {
                display: 'none',
              },
            }}
          >
            <Link
              href={isMobileDevice ? LINKS.whatsappMobile : LINKS.whatsappWeb}
              target="_blank"
              rel="noopener"
              display="flex"
            >
              <CustonMuiIcon type="icon-whatsapp" size="33px" />
            </Link>
            <Link
              href={LINKS.telegram}
              target="_blank"
              rel="noopener"
              display="flex"
            >
              <CustonMuiIcon type="icon-telegram" size="33px" />
            </Link>
            <IconButton
              sx={(theme) => ({
                '& svg path:first-of-type': {
                  fill: theme.palette.primary.main,
                },
                display: scrollTop > windowHeight ? 'inline-flex' : 'none',
                '@media (max-width:1200px)': {
                  display: 'inline-flex',
                },
              })}
              onClick={() => dispatch(changeModalCondition(true))}
            >
              <CustonMuiIcon type="icon-phone" size="33px" />
            </IconButton>
            <Box
              position="relative"
              sx={{
                display: scrollTop < windowHeight ? 'block' : 'none',
                '@media (max-width:1200px)': {
                  display: 'none',
                },
              }}
            >
              <Button
                variant="default"
                color="primary"
                onClick={() => dispatch(changeModalCondition(true))}
              >
                связаться с нами
              </Button>
              <Typography
                position="absolute"
                left="8px"
                variant="body1"
                color="secondary.main"
                pt="6px"
              >
                Тел:{' '}
                <Link
                  href={`tel:+${LINKS.phoneNumber}`}
                  variant="articleListItem"
                  fontWeight="400"
                >
                  {formatPhoneNumber(LINKS.phoneNumber)}
                </Link>
              </Typography>
            </Box>
          </Stack>
          <IconButton
            sx={{
              display: 'none',
              '@media (max-width:900px)': {
                display: 'inline-flex',
              },
            }}
            onClick={() => setModalMobileMenuOpen(true)}
          >
            <CustonMuiIcon type="icon-header-burger" size="40px" />
          </IconButton>
        </Stack>
      </Box>
      {isModalMobileMenuOpen && (
        <ModalMobileMenu handleClose={() => setModalMobileMenuOpen(false)} />
      )}
    </header>
  );
};
