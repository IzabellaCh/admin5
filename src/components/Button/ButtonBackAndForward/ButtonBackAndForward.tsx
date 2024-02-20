import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import Typography from '@mui/material/Typography';

type ButtonBackAndForwardProps = {
  slideBack: () => void;
  slideForward: () => void;
  scrollEnd: boolean;
  scrollX: number;
  stackPaddingBottom: string;
  iconSize: string;
  iconTypeLeft: string;
  iconTypeRight: string;
  counterVisible?: boolean;
  counter?: {
    currentNumber: number;
    allNumbers: number;
  };
};

export const ButtonBackAndForward = ({
  slideBack,
  slideForward,
  scrollEnd,
  scrollX,
  stackPaddingBottom,
  iconSize,
  iconTypeLeft,
  iconTypeRight,
  counterVisible = false,
  counter,
}: ButtonBackAndForwardProps) => {
  return (
    <Stack
      direction="row"
      alignSelf="flex-end"
      columnGap="30px"
      pb={stackPaddingBottom}
    >
      <IconButton
        disabled={scrollX === 0}
        onClick={() => slideBack()}
        sx={(theme) => ({
          position: 'relative',
          left: '3px',
          transition: 'all 0.3s linear',
          '&:hover': {
            left: '0px',
          },

          '& svg path': {
            transition: 'stroke 0.5s linear',
          },
          '&:hover svg path': {
            stroke: theme.palette.primary.main,
          },
        })}
      >
        <CustonMuiIcon
          type={iconTypeLeft}
          size={iconSize}
          style={{
            fill: 'transparent',
          }}
        />
      </IconButton>
      {counterVisible && counter && (
        <Typography variant="h1" color="secondary.main">
          {`${counter.currentNumber}/${counter.allNumbers}`}
        </Typography>
      )}
      <IconButton
        disabled={scrollEnd}
        onClick={() => slideForward()}
        sx={(theme) => ({
          position: 'relative',
          right: '3px',
          transition: 'all 0.3s linear',
          '&:hover': {
            right: '0px',
          },
          '& svg path': {
            transition: 'stroke 0.5s linear',
          },
          '&:hover svg path': {
            stroke: theme.palette.primary.main,
          },
        })}
      >
        <CustonMuiIcon
          type={iconTypeRight}
          size={iconSize}
          style={{
            fill: 'transparent',
          }}
        />
      </IconButton>
    </Stack>
  );
};
