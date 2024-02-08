import { PrismaClient } from "@prisma/client";

export default async function postGrade(name) {
  try {
    const prisma = new PrismaClient();
    return await prisma.grade.create({
      data: {
        gradeName: name
      }
    })
  } catch (error) {
    console.log(error)
  }
}