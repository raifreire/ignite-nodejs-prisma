import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de React Native",
      description: "Curso excelente de React",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Rafaela leão",
          },
          create: {
            name: "Rafaela leão"
          }
        }
      }
    },
  });

  console.log(result);
}

main();
