'use client';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

import Box from '@mui/material/Box';

import { SERVICES, ServiceData } from '@/shared/serviceData/service.data';
import { ServiceTabContent } from '@/components/ServiceTabContent/ServiceTabContent';
import { ScrollableContainer } from '@/containers/ScrollableContainer';
import { ButtonBackAndForward } from '@/components/Button/ButtonBackAndForward/ButtonBackAndForward';
import { findCurrentNumber } from '@/utils/function';

type TServiceSize = {
  gap: number;
  padding: number;
};

export const ScrollableServicesStack = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);
  const scrl = useRef<HTMLElement>(null);

  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const [serviceSizes, setServiceSizes] = useState<TServiceSize>({
    gap: 20,
    padding: 80,
  });

  const [currentCounterNumber, setCurrentCounterNumber] = useState<number>(1);

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
    if (windowInnerWidth > 600) {
      if (serviceSizes.padding !== 80) {
        setServiceSizes({
          gap: 20,
          padding: 80,
        });
      }
    } else {
      if (serviceSizes.padding !== 30) {
        setServiceSizes({
          gap: 20,
          padding: 30,
        });
      }
    }
  }, [serviceSizes, windowInnerWidth]);

  useEffect(() => {
    if (scrl.current === null) return;

    const newCurrentNum = findCurrentNumber(
      scrl.current?.scrollWidth,
      SERVICES.length,
      scrollX,
    );
    setCurrentCounterNumber(newCurrentNum);
  }, [scrollX]);

  return (
    <>
      <ScrollableContainer
        scrollCheck={scrollCheck}
        childrenGap={serviceSizes.gap}
        ref={scrl}
        width="100%"
        paddingBottom="50px"
        sx={{
          minHeight: '400px',
          '@media (max-width:740px)': {
            minHeight: '500px',
          },
          '@media (max-width:510px)': {
            minHeight: '582px',
          },
          '@media (max-width:400px)': {
            minHeight: '650px',
          },
        }}
      >
        {SERVICES.map((service: ServiceData, index: number) => (
          <Box
            key={index}
            sx={{
              width: `${windowInnerWidth - serviceSizes.padding}px`,
            }}
          >
            <ServiceTabContent service={service}></ServiceTabContent>
          </Box>
        ))}
      </ScrollableContainer>
      <Box
        position="absolute"
        sx={{
          top: '-88px',
          right: '0px',
        }}
      >
        <ButtonBackAndForward
          slideBack={() =>
            slide(-windowInnerWidth + serviceSizes.padding - serviceSizes.gap)
          }
          slideForward={() =>
            slide(windowInnerWidth - serviceSizes.padding + serviceSizes.gap)
          }
          scrollEnd={scrollEnd}
          scrollX={scrollX}
          stackPaddingBottom="0px"
          iconSize="33px"
          iconTypeLeft="icon-arrow-left-bold"
          iconTypeRight="icon-arrow-right-bold"
          counterVisible={true}
          counter={{
            currentNumber: currentCounterNumber,
            allNumbers: SERVICES.length,
          }}
        />
      </Box>
    </>
  );
};
