import { PrismaClient } from "@prisma/client";


const Prisma = new PrismaClient();
export default async function getStudentsByName(Name) {
    try {
        const Studnet = await Prisma.students
            .findFirst({
                where: {
                    Name: Name
                }
            })
    } catch (error) { console.log(error) };

}
