import Stack, { StackProps } from '@mui/material/Stack';
import Box from '@mui/material/Box';

type CompanyContainerProps = StackProps & {
  data?: string;
};

export const CompanyContainer = ({ data, ...props }: CompanyContainerProps) => {
  return (
    <Stack
      {...props}
      borderRadius="6px"
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{
        backgroundColor: data ? 'secondary.light' : 'transparent',
        height: '142px',
        p: '20px',
        '@media (max-width:1000px)': {
          height: '114px',
          p: '10px',
        },
      }}
    >
      <Box
        width="100%"
        height="100%"
        sx={{
          backgroundImage: `url(${data})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(1)',
          transition: 'filter 0.5s linear',
          '&:hover': {
            filter: 'grayscale(0)',
          },
        }}
      ></Box>
    </Stack>
  );
};
