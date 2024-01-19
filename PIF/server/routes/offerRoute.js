import { createOffer,findAllOffers,findOffer, updatePost, deletePost } from "../controller/offerCntrl.js";
import express from 'express'
const router = express.Router();
router.post("/publish", createOffer);
router.get("/findAll", findAllOffers);
router.get("/:id", findOffer);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
export {router as offerRoute};