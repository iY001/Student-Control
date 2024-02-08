import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();
export default async function getStudentsByClass(Class) {
    try {
        const students = await Prisma.students.findMany({
            where: {
                Class: Class,
            },
        });
        return students;
    } catch (error) {
        console.log('Error fetching students:', error);
    }
}
