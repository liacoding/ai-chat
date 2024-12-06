import { Types } from "mongoose";
import { createConversationInDB } from "../repositories/conversation.repository.js";


export const createConversationService = async (userId: Types.ObjectId, title: string) => {
    if(!title){
        title = "New Conversation";
    }

    const newConversation = await createConversationInDB(userId, title);

    return {
        conversationId: newConversation._id,
        title: newConversation.title,
        createdAt: newConversation.createdAt,
      };
};