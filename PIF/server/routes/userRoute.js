import {createUser, findAllUsers, findUser, deleteUser, updateUser} from "../controller/userCntrl.js";

//creer un routeur express
import express from 'express'
const router = express.Router();

router.post("/register", createUser);
router.get("/findUser", findAllUsers);
router.get("/User",findUser);
router.delete("/:id",deleteUser);
router.put("/:email", updateUser);
//exporte le routeur
export {router as userRoute};