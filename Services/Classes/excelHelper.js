import { PrismaClient } from "@prisma/client"
import getClassByName from "./getClassByName"
import postClass from "./postClass"

export default async function excelHelper(className,grade) {
  try {
    const prisma = new PrismaClient()
    let newClass = await getClassByName(className)

    if (newClass) {
      return newClass
    }else{
      newClass = await postClass(className,grade)
    }

    return newClass
  } catch (error) {
    console.log(error)
  }  
}