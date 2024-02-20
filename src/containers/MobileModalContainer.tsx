'use client';

import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';

type MobileModalContainerProps = {
  handleClose: () => void;
  children: ReactNode;
};

export const MobileModalContainer = ({
  handleClose,
  children,
}: MobileModalContainerProps) => {
  return (
    <Box position="fixed" top="0" right="0" bottom="0" left="0">
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          padding: '48px 15px',
          boxSizing: 'border-box',
          backgroundColor: 'primary.light',
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 18,
            right: 18,
            fontSize: '30px',
          }}
        >
          <CustonMuiIcon type="icon-close-rounded" size="30px" />
        </IconButton>
        {children}
      </Stack>
    </Box>
  );
};
