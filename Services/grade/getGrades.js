import { PrismaClient } from "@prisma/client";

export default async function getGrades() {
  try {
    const prisma = new PrismaClient();
    return await prisma.grade.findMany({})
    
  } catch (error) {
    console.log(error)
  }
}