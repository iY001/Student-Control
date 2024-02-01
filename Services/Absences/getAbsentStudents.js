import { PrismaClient } from "@prisma/client"

export default async function getAbsentStudents(studentsID) {
    const Prisma = new PrismaClient()
    return await Prisma.Students.findMany({ where: { id: { in: studentsID } } })
}