const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function postStudent(data,token) {
  try {
    const newPost = await prisma.post.create({
      data: data
    });
    return newPost;
  } catch (error) {
    console.log(error)
  }
}

export default postStudent