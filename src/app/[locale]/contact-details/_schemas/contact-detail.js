import { z } from 'zod';

const contactDetails = z.object({
  emailAddress: z
    .string()
    .optional()
    .refine(
      (value) => {
        return value !== undefined && value.trim() !== '';
      },
      {
        message: 'email.required',
      },
    ),
  phoneNumber: z.string().optional(),
  // .refine(
  //   (value) => {
  //     return value !== undefined && value.trim() !== '';
  //   },
  //   {
  //     message: 'phone.required',
  //   },
  // )
  // .refine(
  //   (value) => {
  //     return value.length >= 10;
  //   },
  //   {
  //     message: 'phone.invalid',
  //   },
  // ),
  buildingNameRoomNumber: z.string().optional(),
  addressStreet: z.string().optional(),
  cityCountry: z.string().optional(),
  state: z.string().optional(),
  postCode: z.string().optional(),
  country: z.string().optional(),
});

export { contactDetails };
