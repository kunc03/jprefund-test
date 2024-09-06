import { z } from 'zod';

const passwordSchema = (currentPasswordCheck) =>
  z
    .object({
      password: z
        .string()
        .min(1, { message: 'password.required' })
        .min(8, { message: 'password.min' }),
      newPassword: z
        .string()
        .min(1, { message: 'password.required' })
        .min(8, { message: 'password.min' }),
      confPassword: z
        .string()
        .min(1, { message: 'password.required' })
        .min(8, { message: 'password.min' }),
    })
    .refine((data) => currentPasswordCheck(data.password), {
      message: 'password.incorrect',
      path: ['password'],
    })
    .refine((data) => data.newPassword !== data.password, {
      message: 'password.sameAsCurrent',
      path: ['newPassword'],
    })
    .refine((data) => data.newPassword === data.confPassword, {
      message: 'password.mismatch',
      path: ['confPassword'],
    });

export { passwordSchema };
