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
        message: 'password.required',
      },
    )
    .refine((value) => value.length >= 8, {
      message: 'password.min',
    }),
});

export { loginSchema };
