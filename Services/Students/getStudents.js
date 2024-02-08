import { PrismaClient } from "@prisma/client";

export default async function getStudents() {
  try {
    const Prisma = new PrismaClient();

    const students = await Prisma.students.findMany({})
    return students
  } catch (error) {
    console.log(error)
  }
}
