import { z } from 'zod';

export const ModalFormValidation = z.object({
  name: z
    .string()
    .nonempty({ message: 'Обязательное поле' })
    .min(2, { message: 'Поле не должно быть короче 2 символов' })
    .max(50, { message: 'Поле не должно быть длиннее 50 символов' }),
  phoneNumber: z
    .string()
    .nonempty({ message: 'Обязательное поле' })
    // eslint-disable-next-line no-useless-escape
    .regex(/^\+?[78][-\(\ ]?\d{3}\)?-?\ ?\d{3}-?\ ?\d{2}-?\ ?\d{2}$/, {
      message: 'Вы уверены в правильности номера?',
    }),
  comment: z
    .string()
    .max(250, { message: 'Пожалуйста, сократите ваш комментарий' }),
  agreement: z.literal(true, {
    errorMap: () => ({ message: 'Чтобы продолжить, установите флажок' }),
  }),
});

export type ModalFormType = z.infer<typeof ModalFormValidation>;
