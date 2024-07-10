import { z } from 'zod';

const cashLessSchema = z.object({
  type: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'refundMethod.cashless.required',
      },
    ),
});

export { cashLessSchema };
