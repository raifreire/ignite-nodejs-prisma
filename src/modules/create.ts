import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Many to Many => Conectar curso ja criado.


// async function mainConnectForFk() {
//     const result = await prisma.modulesCourses.create({
//         data: {
//             fk_id_courses2: "Foreign Key",
//             fk_id_module: "Foreign Key",
//         },

//     });

//     console.log(result);
// }


async function mainConnect() {
    const result = await prisma.modules.create({
        data: {
            name: "Sql no postgres",
            description: "Usando SQL no Postgres",
            ModelCourses: {
                create: {
                    courses2: {
                        connect: {
                            id: "5f5d94f5-16ec-4d41-a1c6-b182adfa02f8",
                        }
                    }
                }
            },
        },

    });

    console.log(result);
}

//mainConnectForFk()
mainConnect();
