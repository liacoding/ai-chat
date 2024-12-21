import { Request, Response } from "express";
import { generateChatGPTResponseService } from "../services/gpt.service.js";
import { Types } from "mongoose";

export async function getChatGPTResponseController(req:Request, res: Response){

    try {
        const {message, conversationId} = req.body;

        if (!conversationId) {
            return res.status(400).json({
                success: false,
                message: "Conversation ID is required"
            });
        }
    
        const aiResponse = await generateChatGPTResponseService(message, new Types.ObjectId(conversationId));

        res.status(200).json({
            success: true,
            message: "AI response generated successfully",
            data: aiResponse,
        });

    } catch (error) {
        console.error("Error in getChatGPTResponseController:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
    
};