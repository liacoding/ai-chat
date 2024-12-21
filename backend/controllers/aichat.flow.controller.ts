import { Request, Response } from "express";
import { handleChatFlowService } from "../services/aichat.flow.service.js";
import { Types } from "mongoose";

export const handleChatFlowController = async (req: Request, res: Response) => {
    try {
        const {conversationId, message} = req.body;

        if (!conversationId || !message) {
            return res.status(400).json({
                success:false, 
                message: "Missing required fields: conversationId or message"
            });
        }

        const result = await handleChatFlowService(new Types.ObjectId(conversationId), message);

        res.status(200).json({
            success: true, 
            data: {
                userMessage: result.data.userMessage,
                aiMessage: result.data.aiMessage
            }
        });
    } catch (error) {
        console.error("Error in chat flow controller:", error);
        res.status(500).json({
            success: false,
            message: "Error processing chat flow"
        });
    }
};