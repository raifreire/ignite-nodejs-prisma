import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso WebDevloper",
            description: "Curso com html,css,javascript",
            duration: 245,
            teacher: {
                connect: {
                    id: "2c44234e-d03d-48f8-ad81-027ac8f0ae36"
                }
            }
        }
    })
    console.log(result)
}