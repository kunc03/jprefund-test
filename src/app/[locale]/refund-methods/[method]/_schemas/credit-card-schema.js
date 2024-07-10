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
        message: 'refundMethod.cardNumber.required',
      },
    )
    .refine(
      (value) => {
        return value.length > 14;
      },
      {
        message: 'refundMethod.cardNumber.format',
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
        message: 'refundMethod.dateOfExpired.required',
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
        message: 'refundMethod.securityCode.required',
      },
    ),
});

export { creditCardSchema };
