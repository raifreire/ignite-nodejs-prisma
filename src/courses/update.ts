import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "a2176e41-afcb-4e5e-999e-ba3ae3682461"
        },
        data: {
            name: "Curso NodeJs",
            description: "Aprendendo Node com Prisma ORM",
            duration: 150
        }
    })
    console.log(result)
}

main();

