import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { ELiterals } from '@/types/types';
import { HomeTitleData } from '@/app/home.data';

type HomeTitleProps = {
  titleData: HomeTitleData;
  mb?: string;
};

export const HomeTitle = ({ titleData, mb }: HomeTitleProps) => {

  if (titleData.type === ELiterals.Link) {
    return (
      <Link
        href={titleData.href}
        sx={{
          m: `100px 0 ${mb ? mb : '80px'}`,
          '@media (max-width:900px)': {
            m: `120px 0 ${mb ? mb : '44px'}`,
          },
        }}
      >
        <Typography
          variant="h1"
          color="secondary.main"
          sx={{
            transition: 'all 0.5s linear',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {titleData.title}
        </Typography>
      </Link>
    );
  } else if (titleData.type === ELiterals.Text) {
    return (
      <Typography
        variant="h1"
        color="secondary.main"
        sx={{
          m: `100px 0 ${mb ? mb : '80px'}`,
          '@media (max-width:900px)': {
            m: `120px 0 ${mb ? mb : '44px'}`,
          },
        }}
      >
        {titleData.title}
      </Typography>
    );
  }
};
