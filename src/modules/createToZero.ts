import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Many to Many => Conectar curso ja criado.


async function mainToZero() {
    const result = await prisma.modulesCourses.create({
        data: {
            courses2: {
                create: {
                    name: "Discover",
                    description: "Curso de Programação da Rocket",
                    duration: 1200,
                }
            },
            module: {
                create: {
                    name: "Modulo de React",
                    description: "ReactJS, React Native, Completo",
                }
            },
        },

    });

    console.log(result);
}

mainToZero();