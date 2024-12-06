import express from "express";
import { getAiResponseController } from "../controllers/aichat.controller.js";


const router = express.Router();

router.post("/chat", getAiResponseController);

export default router;