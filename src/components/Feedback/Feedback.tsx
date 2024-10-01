'use client';

import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CustomMuiIcon } from '@/mui/muiCustomIcon';

import { TFeedbackData } from '@/shared/feedbackData/feedback.data';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type FeedbackProps = StackProps & {
  feedbackData: TFeedbackData;
  type?: 'left' | 'right';
};

export const Feedback = ({
  feedbackData,
  type = 'left',
  sx,
  ...props
}: FeedbackProps) => {
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

  const horizontalPosition = useMemo(() => {
    if (windowInnerWidth > 900) {
      return '34px';
    } else {
      return '14px';
    }
  }, [windowInnerWidth]);

  return (
    <Stack
      position="relative"
      borderRadius="10px"
      height="fit-content"
      sx={{
        ...sx,
        backgroundColor: 'primary.light',
      }}
      justifyContent="flex-start"
      {...props}
    >
      <Stack direction="row" columnGap="30px">
        {feedbackData?.icon && windowInnerWidth > 900
          ? feedbackData.icon
          : null}
        <Stack>
          <Typography variant="h2" color="secondary.main">
            {feedbackData.name}
          </Typography>
          <Typography variant="body1" color="secondary.main">
            {feedbackData.description}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body1" color="secondary.main">
        {feedbackData.text}
      </Typography>
      <CustomMuiIcon
        type={
          type === 'left'
            ? 'icon-feedback-triangle-left'
            : 'icon-feedback-triangle-right'
        }
        size="114px"
        sx={{
          position: 'absolute',
          bottom: type === 'left' ? '-105px' : '-80px',
          left: type === 'left' ? horizontalPosition : null,
          right: type === 'left' ? null : horizontalPosition,
        }}
      />
    </Stack>
  );
};
