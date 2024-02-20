import React from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

import { MuiTelInput, MuiTelInputProps } from 'mui-tel-input';

export type TControlledInputProps<T extends FieldValues> = MuiTelInputProps &
  UseControllerProps<T> & {
    errorMessage?: string;
    label?: string;
  };

export const TelInputWrapper = <T extends FieldValues>({
  name,
  label,
  control,
  errorMessage,
  ...props
}: TControlledInputProps<T>) => {
  const { field } = useController<T>({ control, name });

  return (
    <MuiTelInput
      {...field}
      {...props}
      defaultCountry="RU"
      onlyCountries={['RU']}
      label={errorMessage ? errorMessage : label}
      fullWidth={true}
      sx={(theme) => ({
        '& .MuiInputBase-root': {
          transition: 'all 0.5s linear',
          borderColor: errorMessage ? 'error.main' : 'primary.main',
        },
        '& .MuiFormLabel-root': {
          transition: 'all 0.5s linear',
          color: errorMessage ? 'error.main' : null,
        },

        borderRadius: '6px',
        boxSizing: 'border-box',
        minHeight: '48px',
        border: `1px solid ${theme.palette.primary.main}`,
        '& fieldset': {
          border: 'none',
        },
        '& .MuiInputBase-input': {
          padding: 0,
          height: '27px',
          color: theme.palette.secondary.main,
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        },
        '@media (max-width:900px)': {
          minHeight: '65px',
          '& .MuiInputBase-input': {
            fontSize: 22,
            lineHeight: '25.6px',
          },
          '& .MuiInputBase-root': {
            p: '19px 13px',
          },
        },
      })}
    />
  );
};
