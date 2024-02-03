import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();
export default async function getStudentsByGrade(Grade) {
    try {
        const students = await Prisma.students.findMany({
            where: {
                Grade: Grade,
            },
        });
        return students;
    } catch (error) {
        console.log('Error fetching students:', error);
    }
}
