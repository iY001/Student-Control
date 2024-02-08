import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();
export default async function getStudentsById(id) {
    try {
        const student = await Prisma.students
            .findFirst({
                where: {
                    id: id
                }
            })
        return student
    } catch (error) { console.log(error) };

}
