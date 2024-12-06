import express from "express";
import { createConversationController } from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/create", createConversationController);

export default router;