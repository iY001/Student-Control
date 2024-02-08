import { PrismaClient } from '@prisma/client';



export default async function getClassByName(name) {
  try {
    const prisma = new PrismaClient();
    return await prisma.classes.findFirst({
      where : {
        className : name
      }
    })  

  } catch (error) {
    console.log(error)    
  }
}