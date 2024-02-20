'use client';

import { useState } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import { FAQItem } from './FAQItem';
import { TFaqCost } from './faq.data';

type FAQProps = BoxProps & {
  faq: TFaqCost[];
  className: string;
};

export const FAQ = ({ faq, className, ...props }: FAQProps) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box {...props}>
      {faq.map((faqItem: TFaqCost, index: number) => (
        <FAQItem
          key={index}
          className={className}
          question={faqItem.question}
          answer={faqItem.answer}
          index={index}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </Box>
  );
};
