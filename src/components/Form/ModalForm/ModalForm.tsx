'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';

import { TextFieldWrapper } from '@/components/Input/TextFieldWrapper';
import { TelInputWrapper } from '@/components/Input/TelInputWrapper';

import {
  MODAL_FORM_NAMES,
  MODAL_FORM_LABELS,
  MODAL_FORM_PLACEHOLDERS,
} from './modalFormConstants';
import { ModalFormType, ModalFormValidation } from './validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckboxAgreementWrapper } from '../../Input/Checkbox/CheckboxAgreement';
import { Response } from '../../Response/Response';
import { RESPONSE_SUCCESS, RESPONSE_ERROR } from '../../Response/response.data';
import { sendMessage } from '@/utils/api';
import { selectWindowInnerWidth } from '@/redux/slices/window-inner-width-slice';

type ModalFormProps = {
  onClose: () => void;
};

export const ModalForm = ({ onClose }: ModalFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, submitCount },
  } = useForm<ModalFormType>({
    defaultValues: {
      [MODAL_FORM_NAMES.name]: '',
      [MODAL_FORM_NAMES.phoneNumber]: '',
      [MODAL_FORM_NAMES.comment]: '',
    },
    resolver: zodResolver(ModalFormValidation),
  });
  const router = useRouter();
  const windowInnerWidth = useSelector(selectWindowInnerWidth);

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
      onClose();
    } else if (isErrorOpen) {
      setSuccessOpen(false);
      setErrorOpen(false);
      setCommentOpen(true);
    } else if (isCommentOpen) {
      const text = `Отклик с сайта.%0AПользователь: ${data.name}.%0AКомментарий: ${data.comment}.%0AОбратная связь по номеру: ${data.phoneNumber}`;
      sendMessage(text, handleSuccess, handleError);
    }
  });

  return (
    <Stack width="100%">
      <Stack
        sx={{
          '@media (max-width:900px)': {
            display: 'none',
          },
        }}
      >
        <Typography textAlign="center" variant="h2" color="secondary.main">
          Обратная связь
        </Typography>
        <Typography textAlign="center" variant="body2" color="secondary.main">
          оставьте свой номер
        </Typography>
      </Stack>
      <form onSubmit={onSubmit}>
        {isCommentOpen ? (
          <FormGroup
            sx={{
              pt: '50px',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              '@media (max-width:900px)': {
                pt: '30px',
              },
            }}
          >
            <TextFieldWrapper
              name={MODAL_FORM_NAMES.name}
              control={control}
              label={MODAL_FORM_LABELS.name}
              placeholder={MODAL_FORM_PLACEHOLDERS.name}
              errorMessage={errors.name?.message}
            />
            <TelInputWrapper
              name={MODAL_FORM_NAMES.phoneNumber}
              control={control}
              label={MODAL_FORM_LABELS.phoneNumber}
              placeholder={MODAL_FORM_PLACEHOLDERS.phoneNumber}
              errorMessage={errors.phoneNumber?.message}
            />
            <TextFieldWrapper
              name={MODAL_FORM_NAMES.comment}
              control={control}
              label={MODAL_FORM_LABELS.comment}
              placeholder={MODAL_FORM_PLACEHOLDERS.comment}
              errorMessage={errors.comment?.message}
              multiline
              minRows={3}
            />
            <CheckboxAgreementWrapper
              name={MODAL_FORM_NAMES.agreement}
              control={control}
              errorMessage={errors.agreement?.message}
            />
          </FormGroup>
        ) : isSuccessOpen ? (
          <Response
            response={RESPONSE_SUCCESS}
            minHeigth={windowInnerWidth > 900 ? '358px' : '400px'}
          />
        ) : isErrorOpen ? (
          <Response
            response={RESPONSE_ERROR}
            minHeigth={windowInnerWidth > 900 ? '358px' : '400px'}
          />
        ) : null}
        <Button
          type="submit"
          variant="default"
          color="primary"
          sx={{
            width: '100%',
            mt: '20px',
            '@media (max-width:900px)': {
              mt: '47px',
            },
          }}
          disabled={submitCount > 0 && !isValid}
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
