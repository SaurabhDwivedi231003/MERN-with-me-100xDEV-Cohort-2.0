import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, name: string) {
    try {
        const res = await prisma.user.create({
            data: {
                email: username,
                password,
                name,
                firstName,
                lastName
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error inserting user:", error);
    } finally {
        await prisma.$disconnect();
    }
}

// insertUser("saurabh6@gmail.com", "1256846", "saurabh6", "dwivedi6", "seenu6");

interface UpdateParams {
    firstName?: string;
    lastName?: string;
}

async function updateUser(username: string, updateParams: UpdateParams) {
    try {
        const res = await prisma.user.update({
            where: {
                email: username
            },
            data: {
                ...updateParams, // This will only update fields that are provided
                // firstName: updateParams.firstName,
                // lastName: updateParams.lastName
            }
        });
        console.log(res);
    } catch (error) {
        console.error("Error updating user:", error);
    } finally {
        await prisma.$disconnect();
    }
}

updateUser('saurabh6@gmail.com', {
    firstName: "seenuuu",
    lastName: "dwivediiii"
});
