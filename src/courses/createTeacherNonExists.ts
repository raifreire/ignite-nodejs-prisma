import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Marketing do Giraia",
            description: "PHD Marketing & Infernizacao",
            duration: 666,
            fk_teachersId: "7a3f60ea-b9bd-41ff-b82e-260b2bad2275",
        },
    });
    console.log(result);
}

main();