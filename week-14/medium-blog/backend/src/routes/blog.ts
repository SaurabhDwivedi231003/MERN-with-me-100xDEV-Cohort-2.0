import { Hono } from "hono";
import { Bindings } from "hono/types";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { updatePostInput , createPostInput } from '@saurabh_dwivedi/validation'

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string,
        JWT_SECRET:string
    },
    Variables :{ 
        userId : string
    }
}>();

// Auth chech before accessing blog for user
    // this middleware will extract userId and pass it down to the routes required.
    blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
   try{
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
        c.set("userId", user.id);
        await next(); // Passes control to the next handler
    } else {
        return c.json({
            message: "You are not logged in!"
        }, 403); // Return 403 if not logged in
    }
   }catch(e){
     return c.json({ message: "You are not logged in!" }); 
   }
});

// to post the blog
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = createPostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

    const authorId = c.get("userId"); // Convert to number
    const prisma = new PrismaClient({
        datasourceUrl: c.env
            ?.DATABASE_URL
    }).$extends(withAccelerate());
    try{
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        });
        return c.json({id: blog.id})
    }
    catch (e) {
        c.status(411);
        return c.json({message:e})
    }
})
  
// to updat the post
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env
            ?.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    
    const { success } = updatePostInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
    const blog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        });
    return c.json({id: blog.id})
})

// For Bulk Posts
// do pagination here : like filter which blog you want ( searching kinfd of thing)
blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs =await prisma.post.findMany();
    return c.json({blogs})

})

// for finding individual post
  blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env
            ?.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.findFirst({
                where: {
                    id: id
                }
            })
        return c.json({blog})
    } catch (e) {
        c.status(411);
        return c.json({message: "error while fetching blog post"})
    }
})
