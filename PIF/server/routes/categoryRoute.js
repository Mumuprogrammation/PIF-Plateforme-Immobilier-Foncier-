import {setCategory , delCategory ,  updateCategory, categoryFind} from "../controller/categoryCntrl.js";
import express from 'express'
const router = express.Router();
router.post("/set", setCategory );
router.delete("/:id",delCategory );
router.put("/:id",  updateCategory);
router.get("/:id", categoryFind);
export {router as categoryRoute};