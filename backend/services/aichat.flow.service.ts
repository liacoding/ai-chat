import { Types } from "mongoose";
import { generateChatGPTResponseService } from "./gpt.service.js";
import { addMessageToConversationService } from "./conversation.service.js";

export const handleChatFlowService = async (conversationId: Types.ObjectId, userMessage: string) => {
    try {
       const savedUserMessage =  await addMessageToConversationService(conversationId, "user", userMessage);

       const gptResponse = await generateChatGPTResponseService(userMessage, conversationId);

       const savedAiMessage = await addMessageToConversationService(conversationId, "ai", gptResponse);

        return {
            success: true, 
            data: {
                userMessage: savedUserMessage,
                aiMessage: savedAiMessage
            }
        }
    } catch (error) {
        console.error("Error in chat flow:", error);
        throw error;
    }
};