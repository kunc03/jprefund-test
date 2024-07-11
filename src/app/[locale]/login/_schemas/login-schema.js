/* eslint-disable no-unused-vars */
import { z } from 'zod';

const loginSchema = z.object({
  password: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'login.password.required',
      },
    )
    .refine((value) => value.length >= 8, {
      message: 'login.password.min',
    }),
});

export { loginSchema };
