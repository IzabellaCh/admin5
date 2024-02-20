'use client';

import { useSelector } from 'react-redux';

import { useRef, useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';

import { Feedback } from '@/components/Feedback/Feedback';
import {
  FEEDBACK_DATA,
  TFeedbackData,
} from '@/shared/feedbackData/feedback.data';
import { ButtonBackAndForward } from '@/components/Button/ButtonBackAndForward/ButtonBackAndForward';
import { ScrollableContainer } from '@/containers/ScrollableContainer';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';
import { findCurrentNumber } from '@/utils/function';

type TFeedbackSize = {
  width: number;
  gap: number;
  height: number;
  pb: number;
  paddingLateral: number;
};

type ScrollableFeedbackStackProps = StackProps & {
  buttonsTop?: string | null;
  buttonsBottom?: string | null;
  buttonsRight?: string | null;
};

export const ScrollableFeedbackStack = ({
  buttonsTop,
  buttonsBottom,
  buttonsRight,
}: ScrollableFeedbackStackProps) => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);
  const scrl = useRef<HTMLElement>(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const [feedbackSizes, setFeedbackSizes] = useState<TFeedbackSize>({
    width: 587,
    gap: 30,
    height: 380,
    pb: 50,
    paddingLateral: 30,
  });

  const [currentCounterNumber, setCurrentCounterNumber] = useState<number>(1);

  const onUpdateWidth = useCallback(() => {
    if (windowInnerWidth > 900) {
      if (feedbackSizes.width !== 587) {
        setFeedbackSizes({
          width: 587,
          gap: 30,
          height: 380,
          pb: 50,
          paddingLateral: 30,
        });
      }
    } else if (windowInnerWidth > 600) {
      if (feedbackSizes.width !== 360) {
        setFeedbackSizes({
          width: 360,
          gap: 30,
          height: 460,
          pb: 50,
          paddingLateral: 30,
        });
      }
    } else {
      if (feedbackSizes.width !== windowInnerWidth) {
        setFeedbackSizes({
          width: windowInnerWidth,
          gap: 30,
          height: 460,
          pb: 50,
          paddingLateral: 30,
        });
      }
    }
  }, [feedbackSizes, windowInnerWidth]);

  const onUpdateWidthTimeout = useCallback(() => {
    setTimeout(() => onUpdateWidth(), 2000);
  }, [onUpdateWidth]);

  const slide = (shift: number) => {
    if (scrl.current === null) return;
    scrl.current.scrollLeft += shift;
    setscrollX((prev) => prev + shift);
  };

  const scrollCheck = () => {
    if (scrl.current === null) return;

    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    onUpdateWidth();

    window.addEventListener('resize', onUpdateWidthTimeout);

    return () => {
      window.removeEventListener('resize', onUpdateWidthTimeout);
    };
  }, [onUpdateWidthTimeout, onUpdateWidth]);

  useEffect(() => {
    if (scrl.current === null) return;

    const newCurrentNum = findCurrentNumber(
      scrl.current?.scrollWidth,
      FEEDBACK_DATA.length,
      scrollX,
    );
    setCurrentCounterNumber(newCurrentNum);
  }, [scrollX]);

  return (
    <Stack position="relative">
      <ScrollableContainer
        scrollCheck={scrollCheck}
        childrenGap={feedbackSizes.gap}
        ref={scrl}
        minHeight={`${feedbackSizes.height + feedbackSizes.pb}px`}
        paddingBottom={`${feedbackSizes.pb}px`}
        width={windowInnerWidth > 600 ? undefined : '100%'}
      >
        {FEEDBACK_DATA.map((feedback: TFeedbackData, index: number) => (
          <Feedback
            key={index}
            feedbackData={feedback}
            width={
              windowInnerWidth > 600
                ? `${feedbackSizes.width}px`
                : feedbackSizes.width - feedbackSizes.paddingLateral
            }
            minHeight="fit-content"
            height={`${feedbackSizes.height}px`}
            sx={{
              p: '20px 58px 42px',
              rowGap: '25px',
              '@media (max-width:900px)': {
                p: '15px',
                rowGap: '21px',
              },
            }}
          />
        ))}
      </ScrollableContainer>
      <Box
        position="absolute"
        sx={{
          top: buttonsTop,
          right: buttonsRight,
          bottom: buttonsBottom,
        }}
      >
        <ButtonBackAndForward
          slideBack={() =>
            slide(
              windowInnerWidth > 600
                ? -feedbackSizes.width - feedbackSizes.gap
                : -feedbackSizes.width +
                    feedbackSizes.paddingLateral -
                    feedbackSizes.gap,
            )
          }
          slideForward={() =>
            slide(
              windowInnerWidth > 600
                ? feedbackSizes.width + feedbackSizes.gap
                : feedbackSizes.width -
                    feedbackSizes.paddingLateral +
                    feedbackSizes.gap,
            )
          }
          scrollEnd={scrollEnd}
          scrollX={scrollX}
          stackPaddingBottom={windowInnerWidth > 900 ? '10px' : '0px'}
          iconSize="33px"
          iconTypeLeft={
            windowInnerWidth > 600 ? 'icon-arrow-left' : 'icon-arrow-left-bold'
          }
          iconTypeRight={
            windowInnerWidth > 600
              ? 'icon-arrow-right'
              : 'icon-arrow-right-bold'
          }
          counterVisible={windowInnerWidth > 600 ? false : true}
          counter={{
            currentNumber: currentCounterNumber,
            allNumbers: FEEDBACK_DATA.length,
          }}
        />
      </Box>
    </Stack>
  );
};
