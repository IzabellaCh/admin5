'use client';
import { useSelector } from 'react-redux';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

import Stack from '@mui/material/Stack';

import { ServicesTabs } from '@/components/ServicesTabs/ServicesTabs';
import { ScrollableServicesStack } from '@/components/ScrollableServicesStack/ScrollableServicesStack';

export const ServicesHomePageComponent = () => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="space-between"
      position="relative"
    >
      {windowInnerWidth > 900 ? <ServicesTabs /> : <ScrollableServicesStack />}
    </Stack>
  );
};
