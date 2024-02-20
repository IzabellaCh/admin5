import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import firstImage from '../../../public/assets/icons/about-us-page/image_about_us_first.jpg';
import secondImage from '../../../public/assets/icons/about-us-page/image_about_us_second.jpg';
import { Team } from '@/components/Team/Team';
import { ScoreTitle } from '@/components/Score/ScoreTitle';
import { Companies } from '@/components/Companies/Companies';
import { AboutUsImageStack } from '@/components/AboutUsImageStack/AboutUsImageStack';

const AboutUs = () => {
  return (
    <Stack
      sx={{
        rowGap: '170px',
        pt: '125px',
        '@media (max-width:900px)': {
          rowGap: '115px',
          pt: '50px',
        },
      }}
    >
      <Box>
        <Typography variant="h1" color="secondary.main" maxWidth="760px">
          Мы всегда рады&nbsp;помогать нашим клиентам
        </Typography>
        <Typography
          variant="h1"
          color="primary.main"
          maxWidth="760px"
          sx={{
            pb: '20px',
            '@media (max-width:900px)': {
              pb: '10px',
            },
          }}
        >
          по любым IT&#8209;вопросам
        </Typography>
        <Typography variant="body1" color="secondary.main" maxWidth="535px">
          Мы знаем, как обслуживать стоматологию, и чем отличается обслуживание
          банка. Мы знаем, что важно для крупных компаний, например, завода по
          изготовлению гофротары Рэмос, и гос. предприятия ГБУ МДН
        </Typography>
      </Box>
      <Stack
        width="100%"
        sx={{
          rowGap: '104px',
          '@media (max-width:600px)': {
            rowGap: '50px',
          },
        }}
      >
        <AboutUsImageStack
          title="Работаем с&nbsp;2008&nbsp;года&nbsp;&nbsp;"
          text="Мы занимаемся обслуживанием компьютеров с самого начала
              существования компании - с 2008 года. За это время мы на
              собственном опыте и опыте наших клиентов научились делать свою
              работу качественно."
          imageSrc={firstImage.src}
          flexDirection="row"
        />
        <AboutUsImageStack
          title="Используем системный подход"
          text="В своей работе мы используем системный подход. Все заявки от
              клиентов храним в системе HelpDesk. Тамже хранятся и решения
              типовых задач и часто возникающих проблем с компьютерами и
              программами."
          imageSrc={secondImage.src}
          flexDirection="row-reverse"
        />
      </Stack>
      <Box>
        <Typography
          variant="h1"
          color="secondary.main"
          maxWidth="540px"
          pb="55px"
        >
          Познакомьтесь с нашей командой
        </Typography>
        <Team />
      </Box>
      <Stack rowGap="34px" width="100%">
        <Typography variant="h1" color="secondary.main">
          Нам доверяют
        </Typography>
        <Stack direction="row" width="100%" columnGap="6%">
          <Stack
            justifyContent="space-between"
            rowGap="30px"
            width="56%"
            minWidth="395px"
            maxWidth="500px"
            sx={{
              rowGap: '30px',
              width: '56%',
              minWidth: '395px',
              maxWidth: '500px',
              '@media (max-width:900px)': {
                width: '40%',
                minWidth: '320px',
                maxWidth: '400px',
              },
              '@media (max-width:800px)': {
                width: '100%',
                maxWidth: '100%',
              },
            }}
          >
            <Typography variant="body1" color="secondary.main">
              Какой-то текст про большие кейсы
            </Typography>
            <Box
              sx={{
                display: 'none',
                '@media (max-width:800px)': {
                  display: 'block',
                  alignSelf: 'center',
                },
              }}
            >
              <Companies />
            </Box>
            <Typography variant="body1" color="secondary.main">
              По каждому клиенту ведем документацию, в которой описываем все
              имеющееся оборудование, специфику работы, программное обеспечение,
              которое используется в компании. Держим актуальную схему
              расположения компьютеров.
            </Typography>
            <ScoreTitle />
          </Stack>
          <Box
            sx={{
              '@media (max-width:800px)': {
                display: 'none',
              },
            }}
          >
            <Companies />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
