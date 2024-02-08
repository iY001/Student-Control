import { PrismaClient } from "@prisma/client";
import getGradeByName from "../grade/getGradeByName";
import postGrade from "../grade/postGrade";

export default async function postClass(name,grade) {
  try {
    const prisma = new PrismaClient();
    let gradeId = (await getGradeByName(grade))?.id
     
    if (!gradeId) {
      gradeId = (await postGrade(grade))?.id
    }

    return prisma.classes.create({
      data: {
        className: name,
        grade: {
          connect: {
            id: gradeId
          }
        }
      }
    })
  } catch (error) {
    console.log(error)    
  }
}