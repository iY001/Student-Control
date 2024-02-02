import { PrismaClient } from '@prisma/client';



export default async function getClassByName(name) {
  try {
    const prisma = new PrismaClient();
    return prisma.classes.findFirst({
      where : {
        className : name
      },
      include: { Students: true }
    })  
  } catch (error) {
    console.log(error)    
  }
}