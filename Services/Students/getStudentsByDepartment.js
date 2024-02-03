import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();
export default async function getStudentsByDepartment(Department) {
    try {
        const Studnet = await Prisma.students
            .findMany({
                where: {
                    Department: Department
                }
            })
    } catch (error) { console.log(error) };

}
