import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { TServiceExplanationData } from './serviceExplanation.data';

type ServiceExplanationProps = {
  serviceInfo: TServiceExplanationData;
};

export const ServiceExplanation = ({
  serviceInfo,
}: ServiceExplanationProps) => {
  return (
    <Stack
      width="100%"
      height="100%"
      borderRadius="10px"
      sx={{
        backgroundColor: 'primary.light',
        p: '35px 42px 45px 49px',
        '@media (max-width:1100px)': {
          p: '35px 20px 45px',
        },
        '@media (max-width:900px)': {
          p: '26px 15px 41px',
        },
      }}
    >
      <Typography
        variant="h2"
        color="primary.main"
        pb="20px"
        sx={{
          '@media (max-width:1000px)': {
            fontSize: 22,
          },
        }}
      >
        {serviceInfo.title}
      </Typography>
      <Typography variant="body2" color="primary.main" pb="7px">
        Что включает:
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '11px',
          p: '0',
        }}
      >
        {serviceInfo.items.map((action) => (
          <ListItem key={action} sx={{ p: '0' }}>
            <ListItemIcon
              sx={{
                alignSelf: 'flex-start',
                pt: '5px',
                minWidth: '30px',
              }}
            >
              <CheckBoxIcon sx={{ color: 'primary.main' }} />
            </ListItemIcon>
            <ListItemText sx={{ p: '0' }}>
              <Typography
                sx={{ lineHeight: 'normal' }}
                variant="body2"
                color="primary.main"
              >
                {action}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
