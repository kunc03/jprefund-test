import { z } from 'zod';

const otpSchema = z.object({
  otp: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'register.otp.required',
      },
    ),
});

export { otpSchema };
