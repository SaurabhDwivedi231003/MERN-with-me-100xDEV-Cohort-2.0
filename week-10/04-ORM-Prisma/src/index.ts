import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// insert user
async function insertUser( username : string ,password : string , firstName : string , lastName : string, email : string) {
    const res = await prisma.user.create({
        data: {
          username,
          password,
          firstName,
          lastName,
          email
        }
      })
      console.log(res);
}
// insertUser("saurabh1" , "123321","seenu", "dwivedi" , "saurabh1@gmail.com");

// update user 

interface UpdateParams {
    firstName : string,
    lastName : string
}

async function updateUser( id : number ,{firstName , lastName} : UpdateParams){
    const res = await prisma.user.update({
        where: { id},
        data: {
            firstName,
            lastName
          }
        });
        console.log(res);
}
// updateUser(1, { firstName: "carlos", lastName: "singh"})

// find user
async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username
      }
    })
    console.log(user);
  }
  
  getUser("saurabh");