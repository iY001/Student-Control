import { PrismaClient } from '@prisma/client';



export default async function getAllClasses() {
  try {
    const prisma = new PrismaClient();
    return prisma.classes.findMany({
      include: { Students: true }
    })    
  } catch (error) {
    console.log(error)    
  }
}