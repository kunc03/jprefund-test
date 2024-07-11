import { z } from 'zod';

const passwordSettingSchema = z
  .object({
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
      .refine(
        (value) => {
          return value.length > 8;
        },
        {
          message: 'password.min',
        },
      ),
    confirmPassword: z
      .string()
      .optional()
      .refine(
        (value) => {
          return value !== undefined && value.trim() !== '';
        },
        {
          message: 'confPass.required',
        },
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'password.mismatch',
    path: ['confirmPassword'],
  });

export { passwordSettingSchema };
