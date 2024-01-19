import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const setLocation = asyncHandler(async (req,res)=>{
    console.log("registering a location");
    const{longitude, latitude} = req.body;

    try{
        const location = await prisma.location.create({
           data: {
            longitude,
            latitude
           },
        })
        res.json({
           // message: "location set successfully",
            location: location,
        });
    }catch(err){
        res.status(404).send({message:"location not found"}) 
    }
})

export const updatingLocation = asyncHandler(async(req, res)=>{
    console.log("Updating location")
    let{ id } = req.params

    try{
        const locationUpdate = await prisma.location.update({
            where:{id: id},
            data: req.body
        })
        res.send({
            message: "location up to date",
            location: locationUpdate,
        });
    }catch(err){
        res.status(400).send({message: "Error while updating the location"})
    }
})

export const findLocation = asyncHandler(async(req, res)=>{
    console.log("finding location");
    
    const {id} = req.params;
    try{
        const findLocation = await prisma.location.findUniqueOrThrow({
            where:{id},
        })
        res.send(findLocation)
    }catch(err){
        res.status(400).send({message: "Error when searching for the location"})
    }
})