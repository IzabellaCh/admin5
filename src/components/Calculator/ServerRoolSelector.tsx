'use client';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

type ServerRoolSelectorProps = {
  windowCounter: number;
  linuxCounter: number;
  serverRoolCounter: number;
  serverRoolMax: number;
  setServerRoolCounter: (arg: number) => void;
};

export const ServerRoolSelector = ({
  windowCounter,
  linuxCounter,
  serverRoolCounter,
  serverRoolMax,
  setServerRoolCounter,
}: ServerRoolSelectorProps) => (
  <Select
    sx={{
      mt: '30px',
      maxHeight: '34px',
      maxWidth: '172px',
      '@media (max-width:900px)': {
        maxWidth: '100%',
      },
      borderRadius: '6px',
      '& .MuiSelect-select': {
        pl: '10px',
        pr: '10px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor:
          windowCounter === 0 && linuxCounter === 0
            ? undefined
            : (theme) => theme.palette.primary.main,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
      },
      '& svg path': {
        fill:
          windowCounter === 0 && linuxCounter === 0
            ? undefined
            : (theme) => theme.palette.primary.main,
      },
    }}
    onChange={(event) => setServerRoolCounter(Number(event?.target?.value))}
    disabled={windowCounter === 0 && linuxCounter === 0}
    value={serverRoolCounter}
    variant="outlined"
    MenuProps={{
      sx: {
        '& .MuiPaper-root': {
          '& .MuiList-root': {
            padding: 0,
            '& li': {
              paddingLeft: '10px',
            },
          },
        },
      },
    }}
  >
    <MenuItem value="0">
      <Typography variant="body1" color="secondary.main">
        Роль сервера
      </Typography>
    </MenuItem>
    {[...new Array(serverRoolMax).fill(0)].map((el, index) => (
      <MenuItem key={index} value={index + 1}>
        {`Роль ${index + 1}`}
      </MenuItem>
    ))}
  </Select>
);
