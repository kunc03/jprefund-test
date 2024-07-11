import { z } from 'zod';

const phoneRegex = /^\d{10,15}$/;

const phoneSchema = z.object({
  email: z
    .string({ message: 'email.required' })
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'email.required',
      },
    )
    .refine((value) => phoneRegex.test(value), {
      message: 'phone.invalid',
    })
    .refine((value) => {
      if (value === 'unregister@mail.com') {
        return true; // Validasi berhasil jika email terdaftar
      }
      throw new Error('Email not registered'); // Melempar error jika email tidak terdaftar
    }),
});

export { phoneSchema };
