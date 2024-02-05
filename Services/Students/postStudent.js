const { PrismaClient } = require('@prisma/client');

async function postStudent(data) {
  try {
    const prisma = new PrismaClient();
    const newStudent = await prisma.students.create({
      data: {
        name: data.name,
        stdCode: data.stdCode,
        className: data.className,
        email: data.email,
        phoneNumber: data.phoneNumber,
        department: data.department,
        grade: data.grade,
        class: {
          connect: {
            id: data.classId
          }
        }
      }
    });
    return newStudent;
  } catch (error) {
    console.log(error)
  }
}

export default postStudent