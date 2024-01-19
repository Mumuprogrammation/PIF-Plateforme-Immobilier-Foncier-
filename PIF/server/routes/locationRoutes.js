import { setLocation, updatingLocation, findLocation} from "../controller/locationCntrl.js";
import express from 'express'
const router = express.Router();
router.post("/set", setLocation);
router.put("/:id",  updatingLocation);
router.get("/:id", findLocation);
export {router as locationRoute};