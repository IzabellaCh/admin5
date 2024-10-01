import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export type TNestedList = {
  text: string;
  nestedList: string[] | null;
};

type UlListProps = {
  list?: TNestedList[];
  ulList?: boolean;
};

export const NestedUlList = ({ list, ulList }: UlListProps) => {
  if (list === undefined) return null;
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
      {list.map((item: TNestedList, index: number) => (
        <ListItem key={index} sx={{ p: ulList ? '0 0 0 10px' : '0', m: '0' }}>
          <ListItemText sx={{ m: '0' }}>
            <Typography variant="body1" color="secondary.main">
              {ulList ? '\u2022\u2000' : null}
              {item.text}
            </Typography>
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
              {item.nestedList && (
                <Box p="10px 0">
                  {item.nestedList.map((item: string, index: number) => (
                    <ListItem
                      key={index}
                      sx={{ p: ulList ? '0 0 0 40px' : '0', m: '0' }}
                    >
                      <ListItemText sx={{ m: '0' }}>
                        <Typography variant="body1" color="secondary.main">
                          {ulList ? '\u25E6\u2000' : null}
                          {item}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </Box>
              )}
            </List>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
