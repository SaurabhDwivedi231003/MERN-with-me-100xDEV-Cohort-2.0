import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);

}

// createTodo(1, "go to school", "go to school at 9 am");

async function getTodos(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

// getTodos(1);

// RELATIONSHIP : getTodosAndUserDetails (Does/should it use joins?)

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            id: true,
            title: true,
            description: true,
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);


