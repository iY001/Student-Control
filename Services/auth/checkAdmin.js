import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken" 


export default function checkAdmin (token){
    const prisma = new PrismaClient();

    // validate data
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    if(!decodedToken){
        return "Invalid token"
    }

    const user = prisma.users.findFirst({
        where : {
            id: decodedToken.id
        }
    })

    if(!user) {
        return "User not found"
    }
    
    if(user.role != "Admin"){
        return "Not authorized"
    }
    return user;
    
}