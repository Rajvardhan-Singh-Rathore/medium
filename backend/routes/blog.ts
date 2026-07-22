import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { verify } from 'hono/jwt'
import { CreateBlogInputSchema,type CreateBlogInput, UpdateBlogInputSchema, type UpdateBlogInput } from "@rvsr/medium-common";
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECERET:string
    },
    Variables:{
        userId:String
    }
}>();

blogRouter.use("/*",async (c,next)=>{
    const tokenString = c.req.header('Authorization');
    if(!tokenString){c.status(403);return c.json({message:"login required"});}
    const token = tokenString.split(" ")[1];
    if(!token){c.status(403);return c.json({message:"token not found"});}
    try{
        const decoded = await verify(token,c.env.JWT_SECERET,'HS256');
        if(!decoded.id){c.status(403);return c.json({message:"malformed token found"});}
        c.set('userId',decoded.id.toString())
    }catch(e:any){return c.json({message:'malformed token found'});}
    await next();
});
blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();

    const validateCreateBlogInput = CreateBlogInputSchema.safeParse(body);
    if(!validateCreateBlogInput.success){c.status(411);return c.json({message:'invalid inputs, check if they are not string'});}

    try{
      const createdBlog = await prisma.blog.create({
        data:{
            authorId  : Number(c.get('userId')),
            content   : body.content,
            title     : body.title
        }
      });
      return c.json({nayaBlog:createdBlog});
    }catch(e:any){return c.json({message:e.message});}
})
blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();

    const validateUpdateBlogInput = UpdateBlogInputSchema.safeParse(body);
    if(!validateUpdateBlogInput.success){c.status(411);return c.json({message:'invalid inputs, check if they are not string'});}
    
    try{
      const updatedBlog = await prisma.blog.update({
        where:{
            id  : body.id
        },
        data:{
            title     : body.title,
            content   : body.content,
        }
      });
      return c.json({modifiedBlog:updatedBlog});
    }catch(e:any){return c.json({message:e.message});}
})
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
      const allBlogs = await prisma.blog.findMany();
      return c.json({Blogs:allBlogs});
    }catch(e:any){return c.json({message:e.message});}
})
blogRouter.get('/:id', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
  
    try{
      const searchedBlog = await prisma.blog.findFirst({
        where:{
            id  : parseInt(c.req.param('id'))
        },
      });
      return c.json({searchedBlog});
    }catch(e:any){c.status(411);return c.json({message:"error while getting blog post"});}
});