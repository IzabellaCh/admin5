'use client';
import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

import { CustonMuiIcon } from '@/mui/muiCustomIcon';
import { ComparisonTableItem } from './ComparisonTableItem';
import { TABLE_FULL_DATA } from './comparisonTable.data';
import { RoundedBorderTableCell } from './RoundedBorderTableCell';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

export const ComparisonTable = () => {
  const emptyCellsStyles = {
    padding: '7px 0 0',
    border: 'none',
  };

  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%',
        boxShadow: 'none',
      }}
    >
      <Table width="100%">
        <TableHead sx={{ width: '100%' }}>
          <TableRow sx={{ width: '100%' }}>
            <TableCell
              sx={{
                ...emptyCellsStyles,
                width: '26%',
                '@media (max-width:1000px)': {
                  display: 'none',
                },
              }}
            ></TableCell>
            <TableCell
              sx={{
                width: '36%',
                border: 'none',
                '@media (max-width:900px)': {
                  p: '0 0 16px',
                  width: '49%',
                },
                '@media (max-width:450px)': {
                  width: '48.5%',
                },
              }}
            >
              <Stack
                direction="row"
                overflow="hidden"
                alignItems="center"
                width="100%"
                justifyContent="center"
                alignContent="center"
                sx={{
                  maxHeight: '72px',
                  '@media (max-width:900px)': {
                    maxHeight: '52px',
                  },
                }}
              >
                <CustonMuiIcon
                  type="icon-logo-letter"
                  size={windowInnerWidth > 900 ? '78px' : '52px'}
                />
                <CustonMuiIcon
                  type="icon-logo-name"
                  size={windowInnerWidth > 900 ? '172px' : '121px'}
                />
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                ...emptyCellsStyles,
                width: '2%',
                maxWidth: '20px',
                '@media (max-width:900px)': {
                  width: '15px',
                },
                '@media (max-width:450px)': {
                  width: '12px',
                },
              }}
            ></TableCell>
            <TableCell
              sx={{
                width: '36%',
                border: 'none',
                '@media (max-width:900px)': {
                  p: '0 0 16px',
                  width: '49%',
                },
                '@media (max-width:400px)': {
                  maxWidth: '174px',
                },
                '@media (max-width:450px)': {
                  width: '48.5%',
                },
              }}
            >
              <Typography
                variant="h2"
                color="secondary.main"
                textAlign="center"
                sx={{
                  '@media (max-width:900px)': {
                    fontSize: 18,
                    fontWeight: 300,
                  },
                }}
              >
                Специалист в штат
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TABLE_FULL_DATA.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                verticalAlign: 'baseline',
                height: 0,
                '@supports ( -moz-appearance:none )': {
                  height: '100%',
                },
              }}
            >
              <TableCell
                sx={{
                  ...emptyCellsStyles,
                  display: 'flex',
                  height: 0,
                  '@media (max-width:1000px)': {
                    display: 'none',
                  },
                }}
              >
                <Typography variant="h2" color="secondary.main">
                  {row.point}
                </Typography>
              </TableCell>
              <RoundedBorderTableCell
                index={index}
                lastIndex={TABLE_FULL_DATA.length - 1}
                borderColor="primary.main"
              >
                <ComparisonTableItem
                  icon={
                    <CheckBoxIcon
                      fontSize="small"
                      sx={(theme) => ({
                        color: 'primary.dark',
                        background: `radial-gradient(${theme.palette.primary.main} 50%, transparent 50%)`,
                        overflow: 'hidden',
                      })}
                    />
                  }
                  color="primary.light"
                  info={row.ourCompany}
                />
              </RoundedBorderTableCell>
              <TableCell sx={emptyCellsStyles}></TableCell>
              <RoundedBorderTableCell
                index={index}
                lastIndex={TABLE_FULL_DATA.length - 1}
                borderColor="primary.light"
              >
                <ComparisonTableItem
                  icon={
                    <DisabledByDefaultRoundedIcon
                      fontSize="small"
                      sx={(theme) => ({
                        color: 'warning.main',
                        background: `radial-gradient(${theme.palette.warning.dark} 50%, transparent 50%)`,
                        overflow: 'hidden',
                      })}
                    />
                  }
                  color="warning.light"
                  info={row.youEmployee}
                />
              </RoundedBorderTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
