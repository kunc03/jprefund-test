import { z } from 'zod';

const phoneRegex = /^\d{10,15}$/;

const phoneSchema = z
  .object({
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
  })
  .refine(async ({ phone }) => {
    if (phone && phone.length >= 10) {
      // Redirect ke halaman verifikasi
      window.location.href = '/reset-password/phone/verification';

      return true; // Validasi berhasil
    }
    return false;
  });

export { phoneSchema };
