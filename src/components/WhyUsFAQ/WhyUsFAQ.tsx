import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FAQ } from '@/components/FAQ/FAQ';
import { FAQ_WHY_US_DATA } from '@/components/FAQ/faq.data';

type WhyUsFAQProps = {
  title?: ReactNode;
  imageSrc: string;
  flexDirection: 'row' | 'row-reverse';
  FAQStart: number;
  FAQEnd?: number;
};

export const WhyUsFAQ = ({
  title,
  imageSrc,
  flexDirection,
  FAQStart,
  FAQEnd,
}: WhyUsFAQProps) => {
  return (
    <Stack
      sx={{
        flexDirection: { flexDirection },
        justifyContent: 'space-between',
        '@media (max-width:600px)': {
          flexDirection: 'column',
          rowGap: '36px',
          justifyContent: 'flex-start',
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
          height: '488px',
          width: '60%',
          '@media (max-width:900px)': {
            height: '382px',
            width: '47%',
          },
          '@media (max-width:600px)': {
            height: '300px',
            width: '100%',
          },
        }}
      ></Box>
      <Stack
        sx={{
          width: '34%',
          '@media (max-width:900px)': {
            width: '47%',
          },
          '@media (max-width:600px)': {
            width: '100%',
          },
        }}
      >
        {title}
        <FAQ
          faq={FAQ_WHY_US_DATA.slice(FAQStart, FAQEnd)}
          className="why-us"
          sx={{
            borderBottom: '1px solid #DBE5EF',
          }}
        />
      </Stack>
    </Stack>
  );
};
