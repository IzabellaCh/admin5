'use client';
import Image from 'next/image';

import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TTeamMember } from './team.data';

type TeamMemberCardProps = StackProps & {
  member: TTeamMember;
};

export const TeamMemberCard = ({
  member,
  width,
  height,
}: TeamMemberCardProps) => {
  return (
    <Stack
      borderRadius="10px"
      sx={{
        backgroundColor: 'primary.light',
        height: height ? height : '529px',
        width: width ? width : '32%',
        rowGap: '12px',
        justifyContent: 'space-between',
        p: '26px 25px 21px',
        minWidth: '326px',
      }}
    >
      <Stack rowGap="12px">
        <Stack direction="row" columnGap="16px">
          <Image
            src={member.avatar.src}
            width={114}
            height={157}
            alt={member.avatar.alt}
            style={{ borderRadius: '8px' }}
          />
          <Stack
            rowGap="8px"
            sx={{
              display: 'none',
              '@media (max-width:740px)': {
                display: 'flex',
              },
            }}
          >
            <Typography
              variant="h2"
              color="secondary.main"
              pt="20px"
              fontSize={22}
            >
              {member.name}
            </Typography>
            <Typography variant="body1" color="secondary.main">
              {member.position}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body1" color="secondary.main">
          {member.text}
        </Typography>
      </Stack>
      <Stack
        rowGap="4px"
        sx={{
          '@media (max-width:740px)': {
            display: 'none',
          },
        }}
      >
        <Typography variant="h2" color="secondary.main">
          {member.name}
        </Typography>
        <Typography variant="body1" color="secondary.main">
          {member.position}
        </Typography>
      </Stack>
    </Stack>
  );
};
