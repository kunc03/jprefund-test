import { z } from 'zod';

const bankTransferSchema = z.object({
  branchName: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'refundMethod.branchName.required',
      },
    ),
  accountNumber: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'refundMethod.accountNumber.required',
      },
    ),
  accountType: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'refundMethod.accountType.required',
      },
    ),
  firstName: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'refundMethod.firstName.required',
      },
    ),
  lastName: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'refundMethod.lastName.required',
      },
    ),
});

export { bankTransferSchema };
