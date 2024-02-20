import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type AboutUsImageStackProps = {
  title: string;
  text: string;
  imageSrc: string;
  flexDirection: 'row' | 'row-reverse';
};

export const AboutUsImageStack = ({
  title,
  text,
  imageSrc,
  flexDirection,
}: AboutUsImageStackProps) => {
  return (
    <Stack
      width="100%"
      sx={{
        flexDirection: flexDirection,
        justifyContent: 'space-between',
        '@media (max-width:600px)': {
          flexDirection: 'column-reverse',
          rowGap: '24px',
          justifyContent: 'flex-start',
        },
      }}
    >
      <Stack
        sx={{
          width: '34%',
          rowGap: '27px',
          '@media (max-width:900px)': {
            width: '47%',
          },
          '@media (max-width:600px)': {
            width: '100%',
            rowGap: '12px',
          },
        }}
      >
        <Typography
          variant="h1"
          color="primary.main"
          sx={{
            '@media (max-width:1080px)': {
              fontSize: 35.45,
              lineHeight: '39.973px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="secondary.main">
          {text}
        </Typography>
      </Stack>
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
    </Stack>
  );
};
