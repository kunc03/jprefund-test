import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,15}$/;

const emailSchema = z.object({
  email: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'register.email.required',
      },
    )
    .refine((value) => emailRegex.test(value), {
      message: 'register.email.invalid',
    }),
});

const phoneSchema = z.object({
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'register.phone.required',
      },
    )
    .refine((value) => phoneRegex.test(value), {
      message: 'register.phone.invalid',
    }),
});

export { emailSchema, phoneSchema };
