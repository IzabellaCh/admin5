import Box, { BoxProps } from '@mui/material/Box';

import { COMPATIES_LOGO } from './companies.data';
import { CompaniesLine } from './CompaniesLine';

export const Companies = ({ ...props }: BoxProps) => {
  return (
    <Box
      display="grid"
      justifyItems="stretch"
      alignItems="stretch"
      {...props}
      sx={{
        gridTemplateColumns: 'repeat(3, 142px)',
        columnGap: '12px',
        rowGap: '12px',
        '@media (max-width:1000px)': {
          gridTemplateColumns: 'repeat(3, 114px)',
          columnGap: '8px',
          rowGap: '8px',
        },
      }}
    >
      {COMPATIES_LOGO.map((line, index) => (
        <CompaniesLine
          key={index}
          lineInfo={line}
          index={index}
          cardSize="24%"
        />
      ))}
    </Box>
  );
};
