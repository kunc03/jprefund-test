import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;

const loginSchema = z.object({
  email: z
    .string({ message: 'login.email.required' })
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'login.email.required',
      },
    )
    .refine((value) => emailRegex.test(value), {
      message: 'login.email.invalid',
    })
    .refine((value) => phoneRegex.test(value), {
      message: 'login.phone.invalid',
    }),

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
