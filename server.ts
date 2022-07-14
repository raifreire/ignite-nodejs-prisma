// ####### Inserting data in table - Courses ##############

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso React ",
            description: " ReactJS no Ignite",
            duration: 130,
        },
    });

    console.log(result);
}

main();

// ####### Command line to run ###########################
// ####### yarn ts-node-dev server.ts ####################
// ####### For serch, open the archive ###################
// ####### findOne.ts in the folder src ##################