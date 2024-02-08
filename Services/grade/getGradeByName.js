import { PrismaClient } from "@prisma/client";

export default async function getGradeByName(name) {
  try {
    const prisma = new PrismaClient();
    return await prisma.grade.findFirst({
      where: {
        gradeName: name
      }
    })
  } catch (error) {
    console.log(error)
  }
}