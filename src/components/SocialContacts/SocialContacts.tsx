'use client';

import { useSelector } from 'react-redux';
import Stack, { StackProps } from '@mui/material/Stack';
import Link from '@mui/material/Link';

import { CustomMuiIcon } from '@/mui/muiCustomIcon';
import { selectIsMobileDevice } from '@/redux/slices/mobile-device-slice';
import { LINKS } from '@/shared/linksData/links.data';

type SocialContactsProps = StackProps & {
  iconSize: string;
};

export const SocialContacts = ({ iconSize, ...props }: SocialContactsProps) => {
  const isMobileDevice = useSelector(selectIsMobileDevice);

  return (
    <Stack direction="row" {...props}>
      <Link href={LINKS.telegram} target="_blank" rel="noopener" display="flex">
        <CustomMuiIcon type="icon-telegram" size={iconSize} />
      </Link>
      <Link
        href={isMobileDevice ? LINKS.whatsappMobile : LINKS.whatsappWeb}
        target="_blank"
        rel="noopener"
        display="flex"
      >
        <CustomMuiIcon type="icon-whatsapp" size={iconSize} />
      </Link>
      <Link href={LINKS.vk} target="_blank" rel="noopener" display="flex">
        <CustomMuiIcon type="icon-vk" size={iconSize} />
      </Link>
    </Stack>
  );
};
