import React from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export type TControlledInputProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T> & {
    errorMessage?: string;
    label?: string;
  };

export const TextFieldWrapper = <T extends FieldValues>({
  name,
  label,
  control,
  errorMessage,
  sx,
  ...props
}: TControlledInputProps<T>) => {
  const { field } = useController<T>({ control, name });

  return (
    <TextField
      {...field}
      {...props}
      label={errorMessage ? errorMessage : label}
      fullWidth={true}
      sx={{
        '& .MuiInputBase-root': {
          transition: 'all 0.5s linear',
          borderColor: errorMessage ? 'error.main' : 'primary.main',
        },
        '& .MuiFormLabel-root': {
          transition: 'all 0.5s linear',
          color: errorMessage ? 'error.main' : null,
        },
        ...sx,
      }}
    />
  );
};
