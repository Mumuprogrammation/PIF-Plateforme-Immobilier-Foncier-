import asyncHandler from 'express-async-handler'
import {prisma} from '../config/prismaConfig'

export const createGround = asyncHandler (async (req, res) =>{
    console.log('creating a ground');

    const {area, price, image, locationGround} = req.body;
    //verifie si le terrain est deja enregistree (appartient a quelqu'un d'autre)
    const groundExists = await prisma.ground.findUnique({where: {
        longitude: longitude,
        latitude: latitude
    }});
    if(!groundExists){
        const ground = await prisma.ground.create({
            data:{
                area,
                price,
                image,
                locationGround 
            }
        });
    }else{
        res.status(201).send({message: "Somebody else already registered the ground so is considered at it's owner !!"})
    }
        
})