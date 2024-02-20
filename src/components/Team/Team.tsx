'use client';

import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { TEAM_MEMBERS, TTeamMember } from './team.data';
import { TeamMemberCard } from './TeamMemberCard';
import { ScrollableTeamStack } from '@/components/ScrollableTeamStack/ScrollableTeamStack';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

export const Team = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <Stack rowGap="20px" position="relative">
      <Typography
        variant="body1"
        color="secondary.main"
        position="absolute"
        top="40px"
        left="0px"
        sx={{
          width: 'calc(96% - 346px * 2)',
          position: 'absolute',
          '@media (max-width:1000px)': {
            position: 'static',
            width: '100%',
          },
        }}
      >
        В своей работе мы используем системный подход. Все заявки от клиентов
        храним в системе HelpDesk. Там же хранятся и решения типовых задач и
        часто возникающих проблем с компьютерами и программами.
      </Typography>
      <Stack
        direction="row"
        columnGap="2%"
        justifyContent="flex-end"
        sx={{
          '@media (max-width:745px)': {
            display: 'none',
          },
        }}
      >
        {TEAM_MEMBERS.slice(0, 2).map((member: TTeamMember, index: number) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </Stack>
      <Stack
        direction="row"
        columnGap="2%"
        justifyContent="flex-start"
        sx={{
          '@media (max-width:745px)': {
            display: 'none',
          },
        }}
      >
        {TEAM_MEMBERS.slice(2).map((member: TTeamMember, index: number) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </Stack>
      {windowInnerWidth > 745 ? null : <ScrollableTeamStack />}
    </Stack>
  );
};
