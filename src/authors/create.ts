import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//     const result = await prisma.authors.create({
//         data: {
//             name: "George Lucas",
//             Books: {
//                 create: {
//                     name: "Star Wars Uma Nova Esperança"
//                 }
//             }
//         },
//     });

//     console.log(result);
// }

// async function mainConnect() {
//     const result = await prisma.authors.create({
//         data: {
//             name: "J.K. Rowling",
//         },
//     });

//     console.log(result);
// }


async function mainManys() {
    const result = await prisma.authors.create({
        data: {
            name: "Stan Lee",
            Books: {
                createMany: {
                    data: [
                        { name: "Dr. strange" },
                        { name: "Iron Man 1" },
                        { name: "Origins OF Marvel Comics" },
                    ]
                },
            },
        },
    });
    console.log(result);
}

async function mainCreateOrConnect() {

}


//main();
// mainConnect();
mainManys();