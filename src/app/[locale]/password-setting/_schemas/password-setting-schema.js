import { z } from 'zod';

const passwordSettingSchema = z
  .object({
    password: z
      .string()
      .optional()
      .refine(
        (value) => {
          return value !== undefined && value.trim() !== '';
        },
        {
          message: 'settingPassword.password.required',
        },
      )
      .refine(
        (value) => {
          return value.length === 8;
        },
        {
          message: 'settingPassword.password.min',
        },
      ),
    confirmPassword: z
      .string()
      .optional()
      .refine(
        (value) => {
          return value !== undefined && value.trim() !== '';
        },
        {
          message: 'settingPassword.confPassword.required',
        },
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'settingPassword.password.mismatch',
    path: ['confirmPassword'],
  });

export { passwordSettingSchema };
