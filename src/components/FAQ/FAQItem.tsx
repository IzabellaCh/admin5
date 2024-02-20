import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

type FAQItemProps = {
  className: string;
  question: string;
  answer: string;
  index: number;
  expanded: number | false;
  handleChange: (
    panel: number,
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

export const FAQItem = ({
  className,
  question,
  answer,
  index,
  expanded,
  handleChange,
}: FAQItemProps) => {
  return (
    <Box>
      <Accordion
        className={className}
        expanded={expanded === index}
        onChange={handleChange(index)}
        square
        disableGutters
      >
        <AccordionSummary
          className={className}
          aria-controls={`${index}-content`}
          id={`${index}-header`}
        >
          <Stack direction="row" columnGap="19px">
            <Stack
              className="faq_container-plus"
              width="30px"
              height="30px"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Box
                height="2px"
                width="30px"
                sx={{ backgroundColor: 'primary.main' }}
              ></Box>
              <Box
                className="faq_plus"
                width="2px"
                height="30px"
                sx={{
                  backgroundColor: 'primary.main',
                }}
                position="absolute"
                top="0"
                left="14px"
              ></Box>
            </Stack>
            <Typography color="secondary.main">{question}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails className={className}>
          <Typography color="secondary.main">{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
