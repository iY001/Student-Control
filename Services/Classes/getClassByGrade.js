
import { PrismaClient } from '@prisma/client';



export default async function getClassByGrade(grade) {
  try {
    const prisma = new PrismaClient();
    return await prisma.classes.findFirst({
      where : {
        Grade : grade,
      },
      include: { Students: true }
    })
  } catch (error) {
    console.log(error)    
  }
}