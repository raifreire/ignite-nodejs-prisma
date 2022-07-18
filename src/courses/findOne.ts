import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ###### function to find first data #######

// async function main() {
//     const course = await prisma.courses.findFirst();
//     console.log(course);
// }


// ###### function to find last data #######

async function main() {
    const course = await prisma.courses.findFirst({
        take: -1,
    });
    console.log(course);
}

main();