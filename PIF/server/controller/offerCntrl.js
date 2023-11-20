import asyncHandler from "express-async-handler";

import {prisma} from "../config/prismaConfig.js";

export const createOffer = asyncHandler( async(req, res)=>{
    console.log("creating an offer");

    const {content, userEmail, authorGround} = req.body;
    try{
        const offer = await prisma.offer.create({
            data:{
              content,
              status: true, //annonce(terrain) disponible
              authorGround,
              owner: {connect: {email: userEmail}},
            },
        });
        res.send({
            message: "Offer registered successfully",
            offer: offer,
        });
    }catch(err){
        res.status(400).send({message: "Something went wrong during the offer's creation!"})
    }
});