import * as z from 'zod'

export type Inputs = z.infer<typeof schema>

export const schema = z
  .object({
    email: z.email(),
    password: z
      .string()
      .min(6)
      .max(64)
      .regex(/^(?=.*[A-Z]).*$/, { error: 'Password must contain at least one uppercase letter' })
      .regex(/^(?=.*[a-z]).*$/, { error: 'Password must contain at least one lowercase letter' })
      .regex(/^(?=.*[0-9]).*$/, { error: 'Password must contain at least one digit' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Password do not match',
    path: ['confirmPassword'],
  })
