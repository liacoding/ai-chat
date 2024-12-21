import express from "express";
import { handleChatFlowController } from "../controllers/aichat.flow.controller.js";

const router = express.Router();    

router.post("/startChat", handleChatFlowController);

export default router; 