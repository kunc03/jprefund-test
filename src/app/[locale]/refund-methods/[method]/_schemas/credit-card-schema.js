import { z } from 'zod';

const creditCardSchema = z.object({
  cardNumber: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'cardNumber.required',
      },
    )
    .refine(
      (value) => {
        return value.length > 14;
      },
      {
        message: 'cardNumber.format',
      },
    ),
  dateOfExpired: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'dateOfExpired.required',
      },
    ),
  securityCode: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'securityCode.required',
      },
    ),
});

export { creditCardSchema };
