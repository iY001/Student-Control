import { PrismaClient } from "@prisma/client";

export default async function postClass(name) {
  try {
    const prisma = new PrismaClient();
    return prisma.classes.create({
      data: {
        className: name
      }
    })
  } catch (error) {
    console.log(error)    
  }
}