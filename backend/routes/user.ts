import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { z } from 'zod';

import { sign } from 'hono/jwt'
import { SignupInputSchema,SigninInputSchema, type SignupInput, type SigninInput } from "@rvsr/medium-common";
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECERET: string;
    }
}>();

userRouter.post('/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const validateSchema = SignupInputSchema.safeParse(body);
  if(!validateSchema.success){c.status(411);return c.json({message:"invalid inputs"});}
  try{
    const createdUser = await prisma.user.create({
      data:{
        name    :  body.name,
        username:  body.username,
        password:  body.password
      }
    });
    const token = await sign({id:createdUser.id},c.env.JWT_SECERET);
    const tokenString = "Bearer "+token;
    return c.json({token:tokenString});
  }catch(e){c.status(411);return c.text('user already exists');}

})

userRouter.post('/signin', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const validateSchema = SigninInputSchema.safeParse(body);
  if(!validateSchema.success){c.status(411);return c.json({message:"invalid inputs"});}
  const foundUser = await prisma.user.findFirst({
    where:{
      username:body.username,
      password:body.password
    }
  });
  if(!foundUser){c.status(403);return c.text('You may signup first');}
  try{
    const token = await sign({id:foundUser.id},c.env.JWT_SECERET);
    
    const tokenString = "Bearer "+token;
    return c.json({token:tokenString});
  }catch(e){c.status(411);return c.text('user already exists');}

})
