import { z } from 'zod';

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const contactDetails = z
  .object({
    emailAddress: z
      .string()
      .optional()
      .refine((value) => !value || regexEmail.test(value), {
        message: 'email.invalid',
      }),
    phoneNumber: z
      .string()
      .optional()
      .refine((value) => value.length === 0 || value.length >= 11, {
        message: 'phone.minLength',
      }),
    buildingNameRoomNumber: z.string().optional(),
    addressStreet: z.string().min(1, { message: '' }),
    cityCountry: z.string().min(1, { message: '' }),
    state: z.string().min(1, { message: '' }),
    postCode: z.string().min(1, { message: '' }),
    country: z.string().min(1, { message: '' }),
  })
  .refine((data) => data.emailAddress || data.phoneNumber, {
    message: '',
    path: ['emailAddress'],
  });

export { contactDetails };
