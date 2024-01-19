import asyncHandler from 'express-async-handler'
import { prisma } from '../config/prismaConfig.js'

export const createComment = asyncHandler(async (req, res)=>{
    console.log("creation d'un message");
    const {  commentContent } = req.body;
    try{
        const comment = await prisma.comment.create({
            data: 
            commentContent,
            authorComment: { connect: { email: email } },
        })
        res.send({
            message: "message successfully created",
            comment: comment, 
        })
    }catch(err){
        res.status(400).send({message:"Something went wrong!"})
    }
})

export const deleteMessage = asyncHandler(async(req, res)=>{
    console.log("deleting message");
    let { id } = req.params;
    try{
        const messageDelete = await prisma.comment.delete({
            where:{id},
        })
        res.send("message successfully deleted")
    }catch(err){
        res.status(400).send({message: "An error occur during the operation please restart later"}) 
    }
})

export const findAllComment = asyncHandler(async(req, res)=>{
   
    try{
        const findComment = await prisma.msg.findMany({
            select:{
                commentContent: true,
                include:{
                    User:{
                        select:{
                            name: true,
                            email: true
                        }
                    }
                }
            }
        })
        res.send(findComment);
    }catch(err){
        res.status(404).send({message: "Comments not found!"})
    }
})

export const findComment = asyncHandler(async(req, res)=>{
    let { id } = req.body
    try{
        const findComment = await prisma.msg.find({
            where:{id},
            select:{
                commentContent: true,
                include:{
                    User:{
                        select:{
                            name: true,
                            email: true
                        }
                    }
                }
            }
            
        })
        res.send(findComment);
    }catch(err){
        res.status(404).send({message: "Comment not found!"})
    }
})

export const commentUpdate = asyncHandler(async(res, req)=>{
   console.log("updating comment");
   let { id } = req.params;
   try{
        const commentUpdate = await prisma.comment.update({
           where:{id}, 
        })
        res.send(commentUpdate);
   }
   catch(err){
    res.status(400).send({message: "Bad request"})
   }
})