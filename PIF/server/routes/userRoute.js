import {createUser} from "../controller/userCntrl.js";

//creer un routeur express
import express from 'express'
const router = express.Router();

router.post("/register", createUser);
//exporte le routeur
export {router as userRoute};