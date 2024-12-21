import { Request, Response } from "express";
import { createConversationService, addMessageToConversationService, getConversationByIdService, getConversationsByUserService } from "../services/conversation.service.js";
import { Types } from "mongoose";

export const createConversationController = async (req: Request, res: Response) => {

    try {
        const { userId: clerkUserId } = req.auth; //get user from Clerk auth
        const { title } = req.body;

        const conversation = await createConversationService(clerkUserId, title);

        return res.status(201).json(conversation);
    } catch (error) {
        return res.status(500).json({ 
            message: "Error when trying to create a conversation",
            error: error,
        });
    }

};

export const addMessageToConversationController = async (req: Request, res: Response) => {  

    try {
        const {conversationId} = req.params;
        const { sender, content } = req.body;

        if(!conversationId || !sender || !content) {
            return res.status(400).json({
                message: "Please provide conversationId, sender and content to add a message to the conversation."
            });
        }

        if(sender !== "user" && sender !== "ai"){
            return res.status(400).json({   
                message: "Sender must be either 'user' or 'ai'"
        });
    }

    const message = await addMessageToConversationService( new Types.ObjectId(conversationId), sender, content);

    return res.status(201).json(message);

    } catch (error) {
        if (error instanceof Error && error.message === "Conversation not found") {
            return res.status(404).json({
                message: "Conversation not found"
            });
        }

        return res.status(500).json({
            message: "Error when trying to add a message to the conversation",
            error: error
        });
    }
};

export const getConversationByIdController = async (req: Request, res: Response) => {
    try {
       const {conversationId} = req.params;

       const conversation = await getConversationByIdService(new Types.ObjectId(conversationId));

       return res.status(200).json(conversation);
    } catch (error) {
        if (error instanceof Error && error.message === "Conversation not found") {
            return res.status(404).json({
                message: "Conversation not found"
            });
        }

        return res.status(500).json({
            message: "Error when trying to get a conversation by its ID",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};

export const getConversationsByUserController = async (req: Request, res: Response) => {
    try {
        const {userId: clerkUserId} = req.auth;

        const conversations = await getConversationsByUserService(clerkUserId);

        return res.status(200).json({
            success:true, 
            data:conversations
        });
    } catch (error) {
        return res.status(500).json({
            success:false, 
            message: "Error fetching list of conversations by User ID",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};