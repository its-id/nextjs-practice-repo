import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required', // Custom error message
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required', // Custom error message
  }),
  password: z.string().min(6, {
    message: 'Minium 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});


