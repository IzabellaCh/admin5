'use client';

import { keyframes } from '@emotion/react';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type TAnimatedTextData = {
  text: string;
  width: string;
};

export const AnimatedText = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);
  const [renderNumber, setRenderNumber] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  const textArray: TAnimatedTextData[] = [
    {
      text: 'удаленно',
      width:
        windowInnerWidth > 900
          ? '230px'
          : windowInnerWidth > 600
          ? '180px'
          : '120px',
    },
    {
      text: 'с выездом',
      width:
        windowInnerWidth > 900
          ? '250px'
          : windowInnerWidth > 600
          ? '200px'
          : '150px',
    },
    {
      text: '24/7',
      width:
        windowInnerWidth > 900
          ? '170px'
          : windowInnerWidth > 600
          ? '120px'
          : '90px',
    },
  ];

  const typing = keyframes`
    from {
      width: 0
    }
    to {
      width: 100%
    }
  `;

  const blinkCaret = keyframes`
    from,
    to {
      border-color: transparent
    }

    50% {
      border-color: #4A7FB0;
    }
  `;

  const replaceText = useCallback(() => {
    if (renderNumber < 1) return;
    if (currentTextIndex === textArray.length - 1) {
      setCurrentTextIndex(0);
    } else {
      setCurrentTextIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentTextIndex, renderNumber, textArray.length]);

  useEffect(() => {
    setTimeout(replaceText, 5000);
  }, [currentTextIndex, replaceText]);

  useEffect(() => {
    setRenderNumber((prev) => prev + 1);
  }, []);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
      border="2px solid"
      borderColor="primary.main"
      width={textArray[currentTextIndex]?.width}
      boxSizing="border-box"
      sx={{
        p: '10px 40px',
        transition: 'width 3s linear',
        '@media (max-width:900px)': {
          p: '5px 10px',
        },
      }}
    >
      {textArray.map((textItem, index) => (
        <Typography
          key={index}
          variant="h2"
          color="primary.main"
          whiteSpace="nowrap"
          className="anim-typewriter"
          overflow="hidden"
          m="0 auto"
          display={index === currentTextIndex ? 'flex' : 'none'}
          letterSpacing="1px"
          sx={(theme) => ({
            whiteSpace: 'nowrap',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            animation: `${typing} 3s steps(30, end), ${blinkCaret} .75s step-end infinite`,
            '@media (max-width:900px)': {
              fontSize: '18px',
            },
          })}
        >
          {textItem.text}
        </Typography>
      ))}
    </Stack>
  );
};
