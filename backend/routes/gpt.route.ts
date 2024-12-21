import express from "express";
import { getChatGPTResponseController } from "../controllers/gpt.controller.js";

const router = express.Router();

router.post("/chat", getChatGPTResponseController);

export default router;