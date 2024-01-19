import asyncHandler from "express-async-handler";
import {  PrismaClient, CategoryName } from '@prisma/client';
const prisma = new PrismaClient();

export const setCategory = asyncHandler(async (req,res)=>{
    console.log("setting category");
    const{  categoryName: CategoryName  , concernedGround } = req.body;
   
    try{
        const result = await prisma.$transaction(async (prisma) => {
            const category = await prisma.category.create({
              data: {
                categoryName: CategoryName,
                concernedGround: {
                  connect: {
                    id: concernedGround,
                  },
                },
              },
            });
        
            res.send({
                message: "category set successfully",
                category: category,
            });
          });
    }catch(err){
        res.status(400).send(err) 
    }
})

export const categoryFind = asyncHandler(async( req, res) => {
    console.log("Finding ground's category");

    let {id} = req.params
    try{
        const findCategory = await prisma.category.find({
            where: { id },
            include:{
                Ground:true,
            }
        })
        res.send(findCategory)
    }catch(err){
        res.status(404).send({message: "Category not found!"}) 
    }
    
} )

export const delCategory = asyncHandler(async(req, res)=>{
    console.log("deleting category");

    let{ id } = req.params;
    try{
        const userDelete =  await prisma.user.delete({
            where: {
              id
            },
          })
          res.send("category deleted with success")
    }catch(err){
        res.status(400).send({message: "Error while deleting the user"})
    }    
})

export const updateCategory = asyncHandler (async(req, res)=>{
    console.log("updating category");

    let{ id } = req.params;

    try{
        const categoryUpdate = await prisma.user.update({
            where: {
                id: id
              },
              data: req.body
        })
        res.send(categoryUpdate) 
    }catch(err){
        res.status(400).send({message: "Error while updating the user"})
    }
   
})
