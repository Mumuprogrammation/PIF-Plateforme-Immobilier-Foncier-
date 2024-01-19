import { createComment, deleteMessage,  commentUpdate, findComment, findAllComment} from "../controller/messageCntrl.js";
import express from 'express'
const router = express.Router();
router.post("/publish", createComment);
router.delete("/:id",deleteMessage);
router.put("/:id",  commentUpdate);
router.get("/find all", findComment);
router.get("/:id", findAllComment);
export {router as messageRoute};