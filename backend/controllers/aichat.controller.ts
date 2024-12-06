import { Request, Response } from "express";
import { generateAiResponseService } from "../services/ai.service.js";

export async function getAiResponseController(req:Request, res: Response){

    try {
        const {message} = req.body;
    
        const aiResponse = await generateAiResponseService(message);

        res.status(200).json({
            success: true,
            message: "AI response generated successfully",
            data: aiResponse,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
    
};