import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses2.create({
        data: {
            name: "Programação Avançada",
            description: "Curso de Programação da Rocket",
            duration: 800,
        }
    });

    console.log(result);
}

main();