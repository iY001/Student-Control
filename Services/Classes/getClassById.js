
import { PrismaClient } from '@prisma/client';



export default async function getClassById(id) {
  try {
    const prisma = new PrismaClient();
    return await prisma.classes.findFirst({
      where : {
        id : id
      },
      include: { Students: true }
    })
  } catch (error) {
    console.log(error)    
  }
}