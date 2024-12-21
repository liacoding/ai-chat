import { Types } from "mongoose";
import { createConversationInDB } from "../repositories/conversation.repository.js";
import { IMessage } from "../models/conversation.model.js";
import { addMessageToConversationInDB, getConversationByIdFromDB, getConversationsByUserFromDB } from "../repositories/conversation.repository.js";


export const createConversationService = async (clerkUserId: string, title: string) => {
    if(!title){
        title = "New Conversation";
    }

    const newConversation = await createConversationInDB(clerkUserId, title);

    return {
        conversationId: newConversation._id,
        title: newConversation.title,
        createdAt: newConversation.createdAt,
      };
};

export const addMessageToConversationService = async (
    conversationId: Types.ObjectId,
    sender: "user" | "ai",
    content: string
) => {
    const message: IMessage = {
        sender, 
        content, 
        createdAt: new Date()
    };

    const updatedConversation = await addMessageToConversationInDB(conversationId, message);

    if(!updatedConversation){
        throw new Error("Conversation not found");
    }

    return message;
};

export const getConversationByIdService = async (conversationId: Types.ObjectId) => {
    const conversation = await getConversationByIdFromDB(conversationId);

    if(!conversation) {
        throw new Error("Conversation not found");
    }
    return conversation;
};

export const getConversationsByUserService = async (clerkUserId: string) => {

    const conversations = await getConversationsByUserFromDB(clerkUserId);

    return conversations.map(conversation => ({
        id: conversation._id,
        title: conversation.title,
        createdAt: conversation.createdAt,
        lastMessage: conversation.messages[conversation.messages.length - 1]?.content || null
    }));

};