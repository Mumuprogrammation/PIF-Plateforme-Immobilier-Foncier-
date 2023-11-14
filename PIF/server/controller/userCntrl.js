import asynchHandler from "express-async-handler";

import {prisma} from "../config/prismaConfig.js";


export const createUser = asynchHandler(async (req,res) =>{
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