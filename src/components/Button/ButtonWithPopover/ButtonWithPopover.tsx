import { useState, MouseEvent, ReactNode } from 'react';
import Button, { buttonClasses, ButtonProps } from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';

type ButtonWithPopoverProps = ButtonProps & {
  label: string;
  children: ReactNode;
  thisPage?: boolean;
};

export const ButtonWithPopover = ({
  label,
  children,
  thisPage,
  ...props
}: ButtonWithPopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        variant="navigation"
        endIcon={
          <CustonMuiIcon
            type={open ? 'icon-arrow-up' : 'icon-arrow-down'}
            size="10px"
            style={{ fill: 'transparent' }}
          />
        }
        sx={(theme) => ({
          fontWeight: thisPage ? 600 : null,
          p: '0px',
          [`& .${buttonClasses.endIcon} > *:nth-of-type(1)`]: {
            fontSize: '10px',
          },
          '& .MuiButton-endIcon svg path': {
            stroke: open ? theme.palette.primary.main : null,
            transition: 'stroke 0.5s linear',
          },
          '&:hover .MuiButton-endIcon svg path': {
            stroke: theme.palette.primary.main,
          },
          color: open
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
        })}
        disableRipple
        {...props}
      >
        {label}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={(theme) => ({
          '& .MuiPaper-root': {
            backgroundColor: 'primary.light',
            borderRadius: '10px',
            p: '18px 28px 24px',
            width: '724px',
            boxShadow: `0px 0px 20px 0px ${theme.palette.info.contrastText}`,
            mt: '20px',
          },
        })}
      >
        {children}
      </Popover>
    </>
  );
};
