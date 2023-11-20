import { createOffer } from "../controller/offerCntrl";
import express from 'express'
const router = express.Router();
router.post("/publish", createOffer);
export {router as offerRoute};