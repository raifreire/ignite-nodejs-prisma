import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function mainConnect() {
    const result = await prisma.books.create({
        data: {
            name: "Harry Potter e as Reliquias de Morte",
            author: {
                connect: {
                    id: "8ec5e243-1f44-4b81-90a0-7001b9ac32f1",
                },
            },
        },
    });

    console.log(result);
}

mainConnect();