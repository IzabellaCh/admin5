import { z } from 'zod';

export const CalculatorFormValidation = z
  .object({
    company: z
      .string()
      .max(30, { message: 'Название не должно быть длиннее 30 символов' }),
    name: z
      .string()
      .nonempty({ message: 'Обязательное поле' })
      .min(2, { message: 'Поле не должно быть короче 2 символов' })
      .max(50, { message: 'Поле не должно быть длиннее 50 символов' }),
    field: z
      .string()
      .max(100, { message: 'Пожалуйста, сократите ваше сообщение' }),
    agreement: z.literal(true, {
      errorMap: () => ({ message: 'Чтобы продолжить, установите флажок' }),
    }),
    email: z
      .string()
      .email({ message: 'Некорректный email адрес' })
      .optional()
      .or(z.literal('')),
    phoneNumber: z
      .string()
      // eslint-disable-next-line no-useless-escape
      .regex(/^\+?[78][-\(\ ]?\d{3}\)?-?\ ?\d{3}-?\ ?\d{2}-?\ ?\d{2}$/, {
        message: 'Вы уверены в правильности номера?',
      })
      .optional()
      .or(z.literal('')),
  })
  .refine((data) => !!data.email || !!data.phoneNumber, {
    path: ['email'],
    message: 'Введите e-mail или телефон',
  })
  .refine((data) => !!data.email || !!data.phoneNumber, {
    path: ['phoneNumber'],
    message: 'Введите e-mail или телефон',
  });
export type CalculatorFormType = z.infer<typeof CalculatorFormValidation>;
