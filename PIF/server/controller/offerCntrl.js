import asyncHandler from "express-async-handler";

import {prisma} from "../config/prismaConfig.js";

export const createOffer = asyncHandler(async(req, res)=>{
    console.log("creating an offer");

    const {content,status, owner,authorGround} = req.body;
    try{
        const offer = await prisma.offer.create({
            data:{
             content,
              status, //annonce(terrain) disponible
              owner: {connect: {email:  owner}},
              authorGround: {connect: { id: authorGround}}
            }
        });
        res.send({
            message: "Offer registered successfully",
            offer: offer,
        });
    }catch(err){
        res.status(400).send(err)
    }
});

export const findAllOffers = asyncHandler(async(req, res)=>{
    console.log("Finding Post");
    try{
        const postExists = await prisma.offer.findMany({
                 
        });
        res.send(postExists)
    }catch(err){
        res.status(404).send({message: "No post found!"})
    }
})

export const findOffer = asyncHandler(async(req, res)=>{
    console.log("finding a post");
    let {id} = req.params;
    try{
        const offerExist = await prisma.offer.findUnique({
            where:{ id },
        })
        res.send(offerExist)
    }catch(err){
        res.status(404).send({message: "Post no found"})
    }
})

export const updatePost = asyncHandler (async(req, res)=>{
    console.log("Updating the post")
    let { id } = req.params;

    try{
        const offerUpdate = await prisma.offer.update({
            where:{
                id: id
            },
            data: req.body
        })
        res.send(offerUpdate);
    }catch(err){
        res.status(400).send({message: "Error while updating the post"})
    }
})

export const deletePost = asyncHandler(async(req, res)=>{
    console.log("deleting post");

    let{id} = req.params;
    try{
        const postDelete = await prisma.postDelete.delete({
            where: {id},
        })
        res.send("Post deleted successfully")
    }catch(err){
        res.status(400).send({message: "Error while deleting the post check the id"})
    }
})