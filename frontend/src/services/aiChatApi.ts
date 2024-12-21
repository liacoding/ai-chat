import { axiosInstance } from '../lib/interceptor';

export const aiChatApiService = {

    getConversations: async () => {
        const response = await axiosInstance.get(`/api/v1/conversation/list`);
        return response.data;
    },

    createConversation: async (title: string) => {
        const response = await axiosInstance.post('/api/v1/conversation/create', {
            title
        });
        return response.data;
    },

    getConversationById: async (conversationId: string) => {
        const response = await axiosInstance.get(`/api/v1/conversation/${conversationId}`);
        return response.data;
    },

    sendMessage: async (conversationId: string, message: string) => {
        const response = await axiosInstance.post(`/api/v1/aiChat/startChat`, {
            conversationId, 
            message
        });
        return response.data;
    }

};
