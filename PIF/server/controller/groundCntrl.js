import asyncHandler from 'express-async-handler'
import {prisma} from '../config/prismaConfig.js'

export const createGround = asyncHandler (async (req, res) =>{
    console.log('creating a ground');

    const {area, price, image, locationGround} = req.body;

    try{
        const ground = await prisma.ground.create({
            data:{
                area,
                price,
                image,
                locationGround: {
                    connect: {
                        id: locationGround,
                    },
                },
            },
        });
        res.json({
             ground: ground,
         });
    }catch(err){
        res.status(201).send(err)
    }
        
})

export const delGround = asyncHandler(async(req, res)=>{
    console.log("deleting ground");

    let { id } = req.params;
    try{
        const delGround = await prisma.ground.delete({
            where:{id},
        });
        res.send("Ground deleted successfully")
    }catch(err){
        res.status(400).send({message: "Error while deleting the ground"})
    }
})

export const updateGround = asyncHandler(async(req, res)=>{
    console.log("updating ground");

    let{ id } = req.params;
    try{
        const groundUpdate = await prisma.ground.update({
            where:{id},
            data: req.body,
        });
        res.send({
            groundUpdate: groundUpdate
        });
    } catch(err){
        res.status(400).send(err)
    }
})

export const findGround = asyncHandler(async(req, res)=>{
    console.log("Finding a ground");

    let { id } = req.params;

    try{
        const findGround = await prisma.ground.findUnique({
            where:{id}
        });
        res.send(findGround)
    }catch(err){
        res.status(404).send({message: "Ground not found!"})
    }
})

export const findAllGround = asyncHandler(async(req, res)=>{
    console.log("Finding  grounds");

    try{
        const findGrounds = await prisma.ground.findMany({ 

        });
        res.send(findGrounds)
    }catch(err){
        res.status(404).send({message: "No ground found!"})
    }
})