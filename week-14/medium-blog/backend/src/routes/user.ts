import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput , signinInput } from '@saurabh_dwivedi/validation'

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	}
}>();

// signup
userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
	
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });

	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})

//SignIn  
userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

  const user = await prisma.user.findFirst({
    where: {
      email: body.email
	}   
  });

  if(!user){
    c.status(403);
    return c.json({error : "Invalid redentials"})
  }
  if(user.password !== body.password){ 
	c.status(403);
	return c.json({error : "password is incorrect"})
  }

  const jwt =  await sign({id : user.id} , c.env.JWT_SECRET);
  return c.json({jwt : jwt , message:"Login Successful !"});
  
})