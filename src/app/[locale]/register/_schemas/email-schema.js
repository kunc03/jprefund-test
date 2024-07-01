import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export { emailSchema };
