'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import IconButton from '@mui/material/IconButton';
import { ModalForm } from '../Form/ModalForm/ModalForm';
import counsellor from '../../../public/assets/icons/modal/counsellor.png';
import { CustomMuiIcon } from '../../mui/muiCustomIcon';
import { selectIsMobileDevice } from '@/redux/slices/mobile-device-slice';
import { LINKS } from '@/shared/linksData/links.data';

import {
  changeOpenModal,
  selectOpenModal,
  EModals,
} from '@/redux/slices/modal-condition-slice';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

// TODO TO добавить ссылку на телеграм

export const ModalСommunication = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectOpenModal);
  const isMobileDevice = useSelector(selectIsMobileDevice);
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const handleClose = () => {
    dispatch(changeOpenModal(null));
  };

  return (
    <Modal
      onClose={handleClose}
      open={openModal === EModals.Communication}
      closeAfterTransition
    >
      <Stack
        sx={{
          maxWidth: '785px',
          position: 'relative',
          padding: '42px 51px 25px 22px',
          boxSizing: 'border-box',
          backgroundColor: 'primary.contrastText',
          borderRadius: '15px',
          '@media (max-width:900px)': {
            maxWidth: '100%',
            width: '100%',
            height: '100%',
            borderRadius: '0px',
            backgroundColor: 'primary.light',
            padding: '93px 15px 50px',
            alignItems: 'center',
            overflowY: 'scroll',
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 18,
            right: 18,
            fontSize: '23px',
            transition: 'all 0.5s linear',
            '&:hover': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          {windowInnerWidth > 900 ? (
            <CustomMuiIcon type="icon-close" size="27px" />
          ) : (
            <CustomMuiIcon type="icon-close-rounded" size="30px" />
          )}
        </IconButton>
        <Stack
          columnGap="20px"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexDirection: 'row',
            width: 'calc(785px - 22px - 51px)',
            '@media (max-width:900px)': {
              flexDirection: 'column',
              width: '100%',
              maxWidth: '360px',
            },
          }}
        >
          <Box
            position="relative"
            alignSelf="flex-start"
            sx={{
              background: `url(${counsellor.src}) center / cover`,
              mt: '65px',
              width: '360px',
              height: '380px',
              '@media (max-width:900px)': {
                mt: '0px',
                width: '266px',
                height: '281px',
                left: '-15px',
              },
            }}
          >
            <Box
              position="absolute"
              sx={{
                bottom: '-30px',
                left: '0px',
                '@media (max-width:900px)': {
                  bottom: null,
                  left: '195px',
                  top: '30px',
                },
              }}
            >
              <Stack
                position="relative"
                justifyContent="center"
                alignItems="center"
                maxHeight="93px"
              >
                {windowInnerWidth > 900 ? (
                  <CustomMuiIcon type="icon-advice-bottom" size="187px" />
                ) : (
                  <CustomMuiIcon type="icon-advice-top" size="187px" />
                )}
                <Typography
                  variant="body2"
                  color="secondary.main"
                  position="absolute"
                  maxWidth="155px"
                  sx={{
                    bottom: '15px',
                    left: '16px',
                    top: null,
                    '@media (max-width:900px)': {
                      top: '13px',
                      bottom: null,
                    },
                  }}
                >
                  Быстрое решение для вашего бизнеса
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Stack
            alignItems="center"
            sx={{
              width: '342px',
              '@media (max-width:900px)': {
                width: '100%',
              },
            }}
          >
            <ModalForm onClose={handleClose} />
            <Stack
              direction="row"
              columnGap="15px"
              justifyContent="space-between"
              alignItems="center"
              pt="23px"
              width="100%"
              sx={{
                pt: '23px',
                '@media (max-width:900px)': {
                  pt: '30px',
                },
              }}
            >
              <Box
                width="40%"
                height="1px"
                sx={{ backgroundColor: 'secondary.main' }}
              />
              <Typography
                variant="h2"
                color="secondary.main"
                sx={{
                  fontSize: '20px',
                  '@media (max-width:900px)': {
                    fontSize: '22px',
                  },
                }}
              >
                или
              </Typography>
              <Box
                width="40%"
                height="1px"
                sx={{ backgroundColor: 'secondary.main' }}
              />
            </Stack>
            <Typography
              variant={windowInnerWidth > 900 ? 'body2' : 'body1'}
              color="secondary.main"
              sx={{
                pb: '17px',
                '@media (max-width:900px)': {
                  pb: '22px',
                },
              }}
            >
              напишите нам в мессенджере
            </Typography>
            <Stack
              direction="row"
              columnGap="26px"
              sx={{
                columnGap: '26px',
                '@media (max-width:900px)': {
                  columnGap: '34px',
                },
              }}
            >
              <Link
                href={isMobileDevice ? LINKS.whatsappMobile : LINKS.whatsappWeb}
                target="_blank"
                rel="noopener"
              >
                <CustomMuiIcon type="icon-whatsapp" size="53px" />
              </Link>
              <Link href={LINKS.telegram} target="_blank" rel="noopener">
                <CustomMuiIcon type="icon-telegram" size="53px" />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
