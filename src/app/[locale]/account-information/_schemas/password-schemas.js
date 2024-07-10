import { z } from 'zod';

const passwordSchema = z.object({
  phone: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'password.required',
      },
    ),
});

export { passwordSchema };
