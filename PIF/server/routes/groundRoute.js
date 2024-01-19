import { createGround, delGround,  updateGround, findAllGround , findGround} from "../controller/groundCntrl.js";
import express from 'express'
const router = express.Router();
router.post("/publish", createGround);
router.delete("/:id",delGround);
router.get("/all", findAllGround);
router.get("/:id", findGround);
router.put("/:id",  updateGround);

export {router as groundRoute};