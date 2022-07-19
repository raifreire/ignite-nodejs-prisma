import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function mainConnect() {
    const result = await prisma.books.create({
        data: {
            name: "Harry Potter e as Reliquias de Morte",
            author: {
                connect: {
                    id: "27569b8e-748a-41e8-9c9d-acf64f2cfb30",
                },
            },
        },
    });

    console.log(result);
}

mainConnect();