import asyncHandler from "express-async-handler";

import {prisma} from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req,res) =>{
        console.log("creating a user");

        let {email} = req.body;
       // verifie si l'utilisateur existe dans la base de donnee
        const userExists = await prisma.user.findUnique({where: {email: email}});

        if(!userExists){
            //creer un nouvel utilisateur dans la base de donnee
            const user = await prisma.user.create({data: req.body});
            res.send({
                message: "User registered successfully",
                user: user,
            });
        }else{
            //renvoie une reponse indiquant que l'utilisateur est deja enregistre
            res.status(201).send({message: "user already registered"})
        }

});

export const findAllUsers = asyncHandler(async(req, res) =>{
    console.log("Finding  users");
    try{
        const userExists = await prisma.user.findMany({
        });
        res.send(userExists)
    }
      catch(err){
        res.status(404).send({message: "Users not found!"})
      } 
       
})

export const findUser = asyncHandler(async(req, res) => {
    console.log("Finding a user");
  
    let { name } = req.body;
    try {
      const user = await prisma.user.findFirst({
        where: { name: name },
      });
  
      if (!user) {
        res.status(404).send({ message: "User not found!" });
      } else {
        res.send(user);
      }
    } catch (err) {
      res.status(500).send({ message: "Internal server error!" });
    }
  });

export const deleteUser = asyncHandler(async(req, res)=>{
    console.log("deleting user");

    let{ id } = req.params;
    try{
        const userDelete =  await prisma.user.delete({
            where: {
              id
            },
          })
          res.send("user delete with success")
    }catch(err){
        res.status(400).send({message: "Error while deleting the user"})
    }
   
   
})

export const updateUser = asyncHandler (async(req, res)=>{
    console.log("updating user");

    let{ email } = req.params;

    try{
        const userUpdate = await prisma.user.update({
            where: {
                email: email
              },
              data: req.body
        })
        res.send(userUpdate) 
    }catch(err){
        res.status(400).send({message: "Error while updating the user"})
    }
   
})
