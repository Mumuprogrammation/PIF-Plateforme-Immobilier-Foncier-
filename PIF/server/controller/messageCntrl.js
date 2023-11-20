import asyncHandler from 'express-async-handler'
import { prisma } from '../config/prismaConfig'

export const createMessage = asyncHandler(async (req, res)=>{
    console.log("creation d'un message");
    try{
        const message = await prisma.message.create({data: req.body})
    }catch(err){
        res.status(400).send({message:"Something went wrong!"})
    }
   
})