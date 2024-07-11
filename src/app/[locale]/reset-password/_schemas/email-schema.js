import { z } from 'zod';

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    // .refine((value) => emailRegex.test(value), {
    //   message: 'register.email.invalid',
    // })

    .refine((value) => {
      if (value === 'unregister@mail.com') {
        // Redirect langsung ke OTP
        window.location.href = '/register/email';
        return true; // Validasi berhasil untuk email ini
      }
      // Redirect registered emails to /login
      window.location.href = '/reset-password/email/verification';
      return true; // Validation passes for registered emails
    }),
});

export { emailSchema };
