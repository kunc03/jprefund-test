import { z } from 'zod';

const passwordSchema = z
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
          return value.length > 8;
        },
        {
          message: 'password.min',
        },
      ),
    confPassword: z
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
  })
  .refine((data) => data.password === data.confPassword, {
    message: 'password.mismatch',
    path: ['confirmPassword'],
  });

export { passwordSchema };
