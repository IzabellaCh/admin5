'use client';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

import Box from '@mui/material/Box';

import { TEAM_MEMBERS, TTeamMember } from '@/components/Team/team.data';
import { TeamMemberCard } from '@/components/Team/TeamMemberCard';
import { ScrollableContainer } from '@/containers/ScrollableContainer';
import { ButtonBackAndForward } from '@/components/Button/ButtonBackAndForward/ButtonBackAndForward';
import { findCurrentNumber } from '@/utils/function';

type TTeamCardSize = {
  gap: number;
  padding: number;
  height: number;
};

export const ScrollableTeamStack = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const scrl = useRef<HTMLElement>(null);

  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const [teamCardSize, setTeamCardSizes] = useState<TTeamCardSize>({
    gap: 20,
    padding: 80,
    height: 462,
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
      if (teamCardSize.padding !== 80) {
        setTeamCardSizes((prev) => ({
          ...prev,
          padding: 80,
        }));
      }
    } else {
      if (teamCardSize.padding !== 30) {
        setTeamCardSizes((prev) => ({
          ...prev,
          padding: 30,
        }));
      }
    }
  }, [teamCardSize, windowInnerWidth]);

  useEffect(() => {
    if (scrl.current === null) return;

    const newCurrentNum = findCurrentNumber(
      scrl.current?.scrollWidth,
      TEAM_MEMBERS.length,
      scrollX,
    );
    setCurrentCounterNumber(newCurrentNum);
  }, [scrollX]);

  if (windowInnerWidth > 745) return null;

  return (
    <>
      <ScrollableContainer
        scrollCheck={scrollCheck}
        childrenGap={20}
        ref={scrl}
        width="100%"
        paddingBottom="50px"
        sx={{
          minHeight: `${teamCardSize.height}px`,
        }}
      >
        {TEAM_MEMBERS.map((member: TTeamMember, index: number) => (
          <TeamMemberCard
            key={index}
            member={member}
            width={`${windowInnerWidth - teamCardSize.padding}px`}
            height={`${teamCardSize.height}px`}
          />
        ))}
      </ScrollableContainer>
      <Box
        position="absolute"
        sx={{
          bottom: '-66px',
          right: '0px',
        }}
      >
        <ButtonBackAndForward
          slideBack={() =>
            slide(-windowInnerWidth + teamCardSize.padding - teamCardSize.gap)
          }
          slideForward={() =>
            slide(windowInnerWidth - teamCardSize.padding + teamCardSize.gap)
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
            allNumbers: TEAM_MEMBERS.length,
          }}
        />
      </Box>
    </>
  );
};
