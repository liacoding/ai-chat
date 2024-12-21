import { Conversation } from "../models/conversation.model.js";
import { Types } from "mongoose";
import { IMessage } from "../models/conversation.model.js";

export const createConversationInDB = async (clerkUserId: string, title: string) => {
    return await Conversation.create({ clerkUserId, title, createdAt: new Date() });
};

export const addMessageToConversationInDB = async (conversationId:Types.ObjectId, message: IMessage) => {
    return await Conversation.findByIdAndUpdate(conversationId, { $push: { messages: message } },
        { new: true });
};

export const getConversationByIdFromDB = async (conversationId: Types.ObjectId) => {
    return await Conversation.findById(conversationId);
};
 
export const getConversationsByUserFromDB = async (clerkUserId: string) => {
    return await Conversation.find({clerkUserId}).sort({createdAt: -1}).select('title createdAt messages');
};

