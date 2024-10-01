'use client';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { CustomMuiIcon } from '../../../mui/muiCustomIcon';

export type TControlledInputProps<T extends FieldValues> = CheckboxProps &
  UseControllerProps<T> & {
    errorMessage?: string;
  };

export const CheckboxAgreementWrapper = <T extends FieldValues>({
  name,
  control,
  errorMessage,
  ...props
}: TControlledInputProps<T>) => {
  const { field } = useController<T>({ control, name });

  return (
    <Stack direction="row" columnGap="9px" position="relative">
      <Checkbox
        icon={<CustomMuiIcon type="icon-checkbox" size="20px" />}
        checkedIcon={<CustomMuiIcon type="icon-checkbox-checked" size="20px" />}
        {...props}
        {...field}
        sx={{
          zIndex: 3,
        }}
      />
      <Typography variant="caption" color="secondart.main" maxWidth="150px">
        я согласен
        <Link
          variant="agreement"
          // href="#" target="_blank" rel="noopener"
        >
          {' '}
          на обработку персональных данных
        </Link>
      </Typography>
      {errorMessage && (
        <Box
          sx={{
            position: 'absolute',
            top: '30px',
            left: '-111px',
            zIndex: 2,
            '@media (max-width:900px)': {
              left: 'calc(50% - 121px)',
            },
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            position="relative"
            maxHeight="45px"
          >
            <CustomMuiIcon type="icon-checkbox-error" size="242px" />

            <Typography
              variant="caption"
              color="error.main"
              position="absolute"
              bottom="8px"
              left="10px"
              maxWidth="225px"
            >
              {errorMessage}
            </Typography>
          </Stack>
        </Box>
      )}
    </Stack>
  );
};
