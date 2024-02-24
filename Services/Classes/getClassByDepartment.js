
import { PrismaClient } from '@prisma/client';



export default async function getClassByDepartment(department) {
  try {
    const prisma = new PrismaClient();
    return await prisma.classes.findFirst({
      where : {
        Department : department
      },
      include: { Students: true }
    })
  } catch (error) {
    console.log(error)    
  }
}