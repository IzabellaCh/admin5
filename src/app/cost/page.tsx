import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// import { Calculator } from '@/components/Calculator/Calculator';
import { ServiceExplanation } from '@/components/ServiceExplanation/ServiceExplanation';
import { SERVICE_EXPLANATION_DATA } from '@/components/ServiceExplanation/serviceExplanation.data';
import { FAQ } from '@/components/FAQ/FAQ';
import { FAQ_COST_DATA } from '@/components/FAQ/faq.data';

const Cost = () => {
  return (
    <>
      <Typography
        variant="h1"
        color="secondary.main"
        textAlign="center"
        pt="23px"
      >
        Идеальный тариф для каждого
      </Typography>
      <Typography
        variant="body1"
        color="secondary.main"
        textAlign="center"
        p="6px 0 18px"
      >
        Рассчитайте стоимость исходя из своих запросов
      </Typography>
      {/* <Calculator /> */}
      <Stack
        width="100%"
        sx={{
          flexDirection: 'row',
          columnGap: '32px',
          justifyContent: 'space-between',
          p: '28px 0 99px',
          '@media (max-width:900px)': {
            flexDirection: 'column',
            rowGap: '22px',
          },
          '@media (max-width:600px)': {
            p: '114px 0',
          },
        }}
      >
        {SERVICE_EXPLANATION_DATA.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: '48%',
              '@media (max-width:900px)': {
                width: '100%',
              },
            }}
          >
            <ServiceExplanation serviceInfo={service} />
          </Box>
        ))}
      </Stack>
      <Typography variant="h1" color="secondary.main" pb="34px" id="FAQ">
        Остались вопросы?
      </Typography>
      <FAQ faq={FAQ_COST_DATA} className="cost" />
    </>
  );
};

export default Cost;
