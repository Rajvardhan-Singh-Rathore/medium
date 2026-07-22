import { z } from 'zod';
export const CreateBlogInputSchema = z.object({
    content:z.string(),
    title: z.string()
})
export const UpdateBlogInputSchema = z.object({
    id:z.number(),
    content:z.string(),
    title: z.string()
})
export const SignupInputSchema = z.object({
  name     : z.string().optional(),
  username : z.email(),
  password : z.string().min(6)
})
export const SigninInputSchema = z.object({
  name     : z.string().optional(),
  username : z.string().email(),
  password : z.string().min(6)
})

export type SignupInput = z.infer<typeof SignupInputSchema>
export type SigninInput = z.infer<typeof SigninInputSchema>
export type CreateBlogInput = z.infer<typeof CreateBlogInputSchema>
export type UpdateBlogInput = z.infer<typeof UpdateBlogInputSchema>