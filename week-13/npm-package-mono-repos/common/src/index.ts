import { z } from 'zod';

export const signUpInput = z.object({
  username: z.string(),
  password: z.string(),
});

export type SignupParams = z.infer<typeof signUpInput>;

