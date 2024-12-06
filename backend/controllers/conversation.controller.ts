import { Request, Response } from "express";
import { createConversationService } from "../services/conversation.service.js";
import { User } from "../models/user.model.js";

export const createConversationController = async (req: Request, res: Response) => {

    try {
        //const {clerkUserId}= re.user;
        const {clerkUserId, title } = req.body;

        const user = await User.findOne({ clerkUserId });
        if (!user) {
            return res.status(409).json({ message: "User is not logged in. Please login to continue."});
        }

        const userId = user._id;

        const conversation = await createConversationService(userId, title);

        return res.status(201).json(conversation);
    } catch (error) {
        return res.status(500).json({ 
            message: "Internal server error",
            error: error,
        });
    }

};