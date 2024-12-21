import { createConversationController, addMessageToConversationController, getConversationByIdController, getConversationsByUserController } from "../controllers/conversation.controller.js";
import express from "express";

const router = express.Router();

router.post("/create", createConversationController);
router.post("/:conversationId/addMessage", addMessageToConversationController);
router.get("/list", getConversationsByUserController);
router.get("/:conversationId", getConversationByIdController);

export default router;