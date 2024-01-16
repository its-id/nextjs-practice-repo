'use server'; //this way our server code will never be bundled with the client code. works as a API route.

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';

//login server action
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};
