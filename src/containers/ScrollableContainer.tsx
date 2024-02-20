'use client';
import {
  useState,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useCallback,
} from 'react';

import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';

type ScrollableContainerProps = BoxProps & {
  children: ReactNode;
  scrollCheck?: () => void;
  childrenGap: number;
  width?: string;
  minHeight?: string;
  paddingBottom?: string;
};

export const ScrollableContainer = forwardRef(function ScrollableContainer(
  {
    children,
    scrollCheck,
    childrenGap,
    width,
    minHeight,
    paddingBottom,
    ...props
  }: ScrollableContainerProps,
  ref,
) {
  const boxRef = useRef<HTMLElement>(null);
  const [leftPosition, setLeftPosition] = useState<number>(0);
  const [windowClientWidth, setWindowClientWidth] = useState<number>(0);
  const onUpdateWidth = () => {
    if (boxRef.current === null) return;
    const viewportOffset = boxRef.current.getBoundingClientRect();
    setLeftPosition(viewportOffset.left);
    setWindowClientWidth(document.body.clientWidth);
  };

  const onUpdateWidthTimeout = useCallback(() => {
    setTimeout(() => onUpdateWidth(), 2000);
  }, []);

  useEffect(() => {
    onUpdateWidth();

    window.addEventListener('resize', onUpdateWidthTimeout);

    return () => {
      window.removeEventListener('resize', onUpdateWidthTimeout);
    };
  }, [onUpdateWidthTimeout]);

  return (
    <Box
      ref={boxRef}
      overflow="hidden"
      position="relative"
      width={
        width
          ? width
          : `calc(100vw - ${leftPosition}px - (100vw - ${windowClientWidth}px))`
      }
      minHeight={minHeight}
      {...props}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0px"
        bottom="-20px"
        ref={ref}
        onScroll={scrollCheck}
        width={
          width
            ? width
            : `calc(100vw - ${leftPosition}px) - (100vw - ${windowClientWidth}px))`
        }
        sx={{
          scrollBehavior: 'smooth',
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollbarWidth: 'none' /* Firefox */,
        }}
      >
        <Stack
          direction="row"
          columnGap={`${childrenGap}px`}
          width="max-content"
          paddingBottom={paddingBottom}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  );
});
