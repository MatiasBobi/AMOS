import { z } from 'zod'

export const createCustomerValidator = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long.' })
      .max(50, { message: 'Name must have a maximum of 50 characters.' }),
    company_id: z.number(),
    country_id: z.number(),
    client_address: z
      .string()
      .min(2, { message: 'Address name must be at least 2 characters long.' })
      .max(50, { message: 'Address must have a maximum of 50 characters.' }),
    phone: z
      .string()
      .min(2, { message: 'Phone name must be at least 2 characters long.' })
      .max(30, { message: 'Phone must have a maximum of 50 characters.' }),
    social_media: z
      .string()
      .min(2, { message: 'Address name must be at least 2 characters long.' })
      .max(50, { message: 'Address must have a maximum of 50 characters.' }),
    phone_contact: z
      .string()
      .min(2, { message: 'Address name must be at least 2 characters long.' })
      .max(30, { message: 'Address must have a maximum of 50 characters.' }),
    customer_image: z
      .string()
      .min(2, { message: 'Address name must be at least 2 characters long.' })
      .max(100, { message: 'Address must have a maximum of 50 characters.' })
  })
  .partial()
