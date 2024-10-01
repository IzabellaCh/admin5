'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';

import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { TelInputWrapper } from '@/components/Input/TelInputWrapper';
import {
  CALCULATOR_FORM_NAMES,
  CALCULATOR_FORM_LABELS,
  CALCULATOR_FORM_PLACEHOLDERS,
} from './calculatorFormConstants';
import {
  CalculatorFormValidation,
  CalculatorFormType,
} from './validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckboxAgreementWrapper } from '../../Input/Checkbox/CheckboxAgreement';
import { Response } from '../../Response/Response';
import { RESPONSE_SUCCESS, RESPONSE_ERROR } from '../../Response/response.data';
import { sendMessage } from '@/utils/api';

export const CalculatorForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, submitCount },
  } = useForm<CalculatorFormType>({
    defaultValues: {
      [CALCULATOR_FORM_NAMES.company]: '',
      [CALCULATOR_FORM_NAMES.name]: '',
      [CALCULATOR_FORM_NAMES.email]: '',
      [CALCULATOR_FORM_NAMES.phoneNumber]: '',
      [CALCULATOR_FORM_NAMES.field]: '',
    },
    resolver: zodResolver(CalculatorFormValidation),
  });
  const router = useRouter();

  const [isCommentOpen, setCommentOpen] = useState<boolean>(true);
  const [isSuccessOpen, setSuccessOpen] = useState<boolean>(false);
  const [isErrorOpen, setErrorOpen] = useState<boolean>(false);

  const handleSuccess = () => {
    setCommentOpen(false);
    setSuccessOpen(true);
  };

  const handleError = () => {
    setCommentOpen(false);
    setErrorOpen(true);
  };

  const onSubmit = handleSubmit((data) => {
    if (isSuccessOpen) {
      router.push('/');
    } else if (isErrorOpen) {
      setSuccessOpen(false);
      setErrorOpen(false);
      setCommentOpen(true);
    } else if (isCommentOpen) {
      const text = `Отклик с сайта.%0AПользователь: ${data.name}.%0AКомпания: ${data.company}.%0AСфера: ${data.field}.%0AОбратная связь по номеру: ${data.phoneNumber}.%0AОбратная связь по email: ${data.email}.`;
      sendMessage(text, handleSuccess, handleError);
    }
  });

  return (
    <Stack width="100%" position="relative">
      <Stack>
        <Typography
          variant="h2"
          color="secondary.main"
          sx={{
            textAlign: 'center',
            '@media (max-width:1160px)': {
              textAlign: 'left',
            },
            '@media (max-width:900px)': {
              fontSize: '22px',
            },
          }}
        >
          Ваши контакты
        </Typography>
        <Typography
          textAlign="center"
          variant="caption"
          color="primary.main"
          maxWidth="274px"
          sx={{
            '@media (max-width:1160px)': {
              display: 'none',
            },
          }}
        >
          Если вас все подходит, оставьте контакты для дальнейшего
          сотрудничества
        </Typography>
      </Stack>
      <form onSubmit={onSubmit}>
        {isCommentOpen ? (
          <FormGroup
            sx={{
              pt: '30px',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              '@media (max-width:900px)': {
                pt: '20px',
              },
            }}
          >
            <TextFieldWrapper
              name={CALCULATOR_FORM_NAMES.company}
              control={control}
              label={CALCULATOR_FORM_LABELS.company}
              placeholder={CALCULATOR_FORM_PLACEHOLDERS.company}
              errorMessage={errors.company?.message}
            />
            <TextFieldWrapper
              name={CALCULATOR_FORM_NAMES.name}
              control={control}
              label={CALCULATOR_FORM_LABELS.name}
              placeholder={CALCULATOR_FORM_PLACEHOLDERS.name}
              errorMessage={errors.name?.message}
            />
            <TextFieldWrapper
              name={CALCULATOR_FORM_NAMES.email}
              control={control}
              label={CALCULATOR_FORM_LABELS.email}
              placeholder={CALCULATOR_FORM_PLACEHOLDERS.email}
              errorMessage={errors.email?.message}
            />
            <TelInputWrapper
              name={CALCULATOR_FORM_NAMES.phoneNumber}
              control={control}
              label={CALCULATOR_FORM_LABELS.phoneNumber}
              placeholder={CALCULATOR_FORM_PLACEHOLDERS.phoneNumber}
              errorMessage={errors.phoneNumber?.message}
            />
            <TextFieldWrapper
              className="field"
              name={CALCULATOR_FORM_NAMES.field}
              control={control}
              label={CALCULATOR_FORM_LABELS.field}
              placeholder={CALCULATOR_FORM_PLACEHOLDERS.field}
              errorMessage={errors.field?.message}
              multiline
              minRows={3}
              sx={{
                position: 'absolute',
                bottom: '-70px',
                left: '-360px',
                '@media (max-width:1180px)': {
                  position: 'static',
                  bottom: 0,
                  left: 0,
                },
              }}
            />
            <CheckboxAgreementWrapper
              name={CALCULATOR_FORM_NAMES.agreement}
              control={control}
              errorMessage={errors.agreement?.message}
            />
          </FormGroup>
        ) : isSuccessOpen ? (
          <Response response={RESPONSE_SUCCESS} minHeigth="370px" />
        ) : isErrorOpen ? (
          <Response response={RESPONSE_ERROR} minHeigth="370px" />
        ) : null}
        <Button
          type="submit"
          variant="default"
          color="primary"
          sx={{
            width: '100%',
            mt: '11px',
            '@media (max-width:900px)': {
              mt: '30px',
            },
          }}
          disabled={submitCount > 1 && !isValid}
        >
          {isSuccessOpen
            ? RESPONSE_SUCCESS.buttonText
            : isErrorOpen
            ? RESPONSE_ERROR.buttonText
            : 'отправить'}
        </Button>
      </form>
    </Stack>
  );
};
