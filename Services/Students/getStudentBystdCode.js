import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export default async function getStudentBystdCode(stdCode) {
    try {
        const student = await Prisma.students.findFirst({
            where: {
                stdCode: stdCode
            }
        })
    }catch(err) {
        console.log("Fetch Error",err)
    }
}