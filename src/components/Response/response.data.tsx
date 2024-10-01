import { ReactNode } from 'react';
import { CustomMuiIcon } from '../../mui/muiCustomIcon';

export type ResponseType = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
};

export const RESPONSE_SUCCESS: ResponseType = {
  icon: (
    <CustomMuiIcon
      type="icon-response-success"
      size="109px"
      style={{ fill: 'transparent' }}
    />
  ),
  title: 'Спасибо',
  subtitle: 'Ваша заявка принята, мы свяжемся с вами в ближайшее время',
  buttonText: 'на главную',
};

export const RESPONSE_ERROR: ResponseType = {
  icon: (
    <CustomMuiIcon
      type="icon-response-error"
      size="109px"
      style={{ fill: 'transparent' }}
    />
  ),
  title: 'Ошибка',
  subtitle: 'Что-то пошло не так, пожалуйста, заполните форму повторно',
  buttonText: 'заполнить форму',
};
