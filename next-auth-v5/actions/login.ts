'use server'; //this way our server code will never be bundled with the client code. works as a API route.

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

//login server action
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  return { success: 'Email sent!' };
};
