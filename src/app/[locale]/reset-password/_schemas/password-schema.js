import { z } from 'zod';

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'password.required' })
      .min(8, { message: 'password.min' }),
    confPassword: z
      .string()
      .min(1, { message: 'password.required' })
      .min(8, { message: 'password.min' }),
  })
  .refine((data) => data.password === data.confPassword, {
    message: 'password.mismatch',
    path: ['confPassword'],
  });

export { passwordSchema };
