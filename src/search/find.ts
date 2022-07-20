import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//     const result = await prisma.courses2.findMany({
//         where: {
//             id: "277beeda-6d7d-4369-b6c0-fc2f3c8f11ad",
//         },
//         include: {
//             ModelCourses: true,
//         },
//     });


//     console.log(JSON.stringify(result))
// }

async function mainAll() {
    const result = await prisma.modulesCourses.findMany({
        include: {
            courses2: true,
            module: true,
        },
    });

    console.log(JSON.stringify(result))
}



//main();
mainAll()
















