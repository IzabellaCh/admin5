import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export type TTableRowList = {
  firstColumn: string;
  secondColumn: string;
};

type TableProps = {
  tableInfo: TTableRowList[];
  border?: boolean;
};

type TableRowProps = {
  item: TTableRowList;
};

const TableRow = ({ item }: TableRowProps) => (
  <>
    <Grid item xs={4}>
      <Typography variant="body1" color="secondary.main">
        {item.firstColumn}
      </Typography>
    </Grid>
    <Grid item xs={8}>
      <Typography variant="body1" color="secondary.main">
        {item.secondColumn}
      </Typography>
    </Grid>
  </>
);

export const Table = ({ tableInfo }: TableProps) => (
  <Box>
    <Grid container spacing={3}>
      {tableInfo.map((item: TTableRowList, index: number) => (
        <TableRow key={index} item={item} />
      ))}
    </Grid>
  </Box>
);
