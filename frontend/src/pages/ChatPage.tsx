import { useParams, useNavigate } from 'react-router-dom';
import MessageInputBox from '../components/MessageInputBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { aiChatApiService } from '../services/aiChatApi';

interface Message {
    _id: string,
    content: string;
    sender: "user" | "ai";
    createdAt: string;
};

const ChatPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
    const {conversationId} = useParams<{conversationId:string}>();
    const navigate = useNavigate();


    useEffect(() => {

        if (!conversationId) {
            setError("Conversation ID is missing");
            return;
        } 

        setError(null);

        if (conversationId === 'new') {
            createNewConversation();
        } else {
            loadExistingConversation(conversationId);
        }
    }, [conversationId]);

    const createNewConversation = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/conversation/create`, {
                title: "New Chat"
            });

            navigate(`/dashboard/chats/${response.data.conversationId}`);
        } catch (error) {
            console.error('Error creating conversation:', error);
        }
    };

    const loadExistingConversation = async (id: string) => {
        try {
            const response = await aiChatApiService.getConversationById(id);
            setMessages(response.messages || []);
        } catch (error) {
            console.error('Error loading conversation:', error);
        }
    };

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 pt-[88px] flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto pl-[250px] clean-scrollbar mt-6"> 
                <div className="w-full max-w-[800px] flex flex-col mx-auto pt-4"> 
                    {messages.map((message) => (
                        <div 
                            key={message._id} 
                            className={`p-5 m-2 ${
                                message.sender === "user" 
                                    ? 'bg-[#e9ecf2] rounded-[20px] max-w-[80%] self-end' 
                                    : 'bg-white rounded-[20px] max-w-[80%]'                
                            }`}
                        >
                            {message.content}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white  pl-[250px]"> 
                <div className="w-full max-w-[900px] p-4 mx-auto"> 
                    <MessageInputBox 
                        setMessages={setMessages}
                        conversationId={conversationId} 
                    />
                </div>
            </div>
        </div>
    );
};


export default ChatPage;