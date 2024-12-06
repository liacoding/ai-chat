import { Conversation } from "../models/conversation.model.js";
import { Types } from "mongoose";

export const createConversationInDB = async (userId: Types.ObjectId, title: string) => {
    return await Conversation.create({ userId, title, createdAt: new Date() });
};