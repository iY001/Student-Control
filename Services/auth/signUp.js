"use server";
import { PrismaClient } from "@prisma/client";
import  bcrypt  from 'bcrypt';
import Joi from "joi";


const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  accessRegister : Joi.string().required()
})
export default async function signUp(data) {
  try {
    const prisma = new PrismaClient();  


    // validate data
    const { error, value } = userSchema.validate(data);
    if (error) {
      return { error: error.details[0].message };   
    }

    if(data.accessRegister != process.env.accessRegister){
      return {error:"You Don't Have Access To Create Account"}
    }


    // check if user exists
    const userExists = await prisma.Users.findFirst({ where: { Email: value.email } });
    if (userExists) {
      return { error: "User already exists" };
    }
    
    
    // hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // create user
    const user = await prisma.Users.create({
      data: { 
        Username: data.username,
        Email: data.email,
        Password: hashedPassword,
        Role: "admin"
      },
    });
    return user;  
  } catch (error) {
    console.log(error);
  }
}