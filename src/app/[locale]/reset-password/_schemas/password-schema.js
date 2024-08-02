import { z } from 'zod';

const passwordSchema = z
  .object({
    newPassword: z
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
          return value.length >= 8;
        },
        {
          message: 'password.min',
        },
      ),
    passwordConfirmation: z
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
          return value.length >= 8;
        },
        {
          message: 'password.min',
        },
      ),
  })
  .refine(
    (data) => {
      return data.newPassword === data.passwordConfirmation;
    },
    {
      message: 'password.mismatch',
      path: ['passwordConfirmation'],
    },
  );

export { passwordSchema };
