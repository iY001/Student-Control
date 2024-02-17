import { PrismaClient } from '@prisma/client';



export default async function getAllClasses() {
  try {
    const prisma = new PrismaClient();
    return await prisma.classes.findMany({
      include: { students: true }
    })    
  } catch (error) {
    console.log(error)    
  }
}