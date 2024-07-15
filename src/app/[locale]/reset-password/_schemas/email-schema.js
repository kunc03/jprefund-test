import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailSchema = z.object({
  email: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.trim() !== '', {
      message: 'email.required',
    })
    .refine((value) => emailRegex.test(value), { message: 'email.invalid' }),
});

export { emailSchema };
