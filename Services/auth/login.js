"use server";
import Joi from "joi";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";



const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});



export default async function login({ email, password }) {
  try {
    const prisma = new PrismaClient();


    // validate data
    const { error, value } = userSchema.validate({ email, password });
    if (error) {
      return { error: error.details[0].message };
    }

    // check if user exists
    const user = await prisma.users.findFirst({ where: { email: value.email } })
    if (!user) {
      return { error: "User not found" };
    }

    // check if password is correct
    if ((! await bcrypt.compare(password, user.password))) {
      return { error: "Incorrect password" };
    }

    // return user with token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  } catch (error) {
    console.log(error)

  }
}