import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

type UlListProps = {
  text?: string[];
  ulList?: boolean;
};

export const UlList = ({ text, ulList }: UlListProps) => {
  if (text === undefined) return null;
  return (
    <List
      disablePadding={true}
      sx={{
        listStyleType: ulList ? '' : 'decimal',
        pl: ulList ? undefined : 4,
        '& .MuiListItem-root': {
          display: ulList ? undefined : 'list-item',
        },
      }}
    >
      {text.map((item: string, index: number) => (
        <ListItem key={index} sx={{ p: ulList ? '0 0 0 10px' : '0', m: '0' }}>
          <ListItemText sx={{ m: '0' }}>
            <Typography variant="body1" color="secondary.main">
              {ulList ? '\u2022\u2000' : null}
              {item}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
