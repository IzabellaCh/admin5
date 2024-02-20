import { ReactNode } from 'react';
import TableCell from '@mui/material/TableCell';

type RoundedBorderTableCellProps = {
  index: number;
  lastIndex: number;
  children: ReactNode;
  borderColor: string;
};

export const RoundedBorderTableCell = ({
  index,
  lastIndex,
  children,
  borderColor,
}: RoundedBorderTableCellProps) => {
  return (
    <TableCell
      sx={{
        '&.MuiTableCell-root': {
          height: '0px',
          '@supports ( -moz-appearance:none )': {
            height: '100%',
          },
        },
        padding:
          index === 0
            ? '14px 14px 7px'
            : index === lastIndex
            ? '7px 14px 14px'
            : '7px 14px 7px',
        borderRadius:
          index === 0
            ? '10px 10px 0 0'
            : index === lastIndex
            ? '0 0 10px 10px'
            : '0',
        border: 'none',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          borderRadius:
            index === 0
              ? '10px 10px 0 0'
              : index === lastIndex
              ? '0 0 10px 10px'
              : 'none',
          borderTop: index === 0 ? '1px solid' : 'none',
          borderRight: '1px solid',
          borderLeft: '1px solid',
          borderBottom: index === lastIndex ? '1px solid' : 'none',
          borderColor: borderColor,
          overflow: 'hidden',
        },
        '&::after': {
          content: "''",
          display: 'block',
          position: 'absolute',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          borderTop: index === 0 ? '1px solid' : 'none',
          borderRight: '1px solid',
          borderLeft: '1px solid',
          borderBottom: index === lastIndex ? '1px solid' : 'none',
          borderColor: borderColor,
        },
        '@media (max-width:700px)': {
          padding: '0 0 6px',
          borderRadius: 'none',
          '&::before': {
            display: 'none',
          },
          '&::after': {
            display: 'none',
          },
        },
      }}
    >
      {children}
    </TableCell>
  );
};
