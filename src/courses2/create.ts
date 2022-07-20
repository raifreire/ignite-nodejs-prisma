import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses2.create({
        data: {
            name: "aa",
            description: "aass",
            duration: 144,
        }
    });

    console.log(result);
}

main();