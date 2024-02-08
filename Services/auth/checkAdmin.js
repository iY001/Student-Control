"use server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken" 


export default async function checkAdmin (token){
    try {
      const prisma = new PrismaClient();

    
    if (!token) {
        return {error: "Please Login First"}      
    }

    // validate data
    const decodedToken =  jwt.verify(token, process.env.JWT_SECRET)

    if(!decodedToken){
        return {error: "Invalid token" }
    }

    const user = await prisma.users.findFirst({
        where : {
            id: decodedToken.id
        }
    })

    if(!user) {
        return {error: "User not found"}
    }
    
    if(user.role != "admin"){
        return {error: "You don't have permission"}
    }
    return {user};
      
    } catch (error) {
      return {error: error.message}
    }
    
}