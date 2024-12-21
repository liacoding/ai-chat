import { useState } from 'react';
import { ArrowBigUpDash} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react'; 
import { aiChatApiService } from '../services/aiChatApi';

interface Message {
    _id: string,
    content: string;
    sender: "user" | "ai";
    createdAt: string;
};

interface Props {
    setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
    conversationId?: string;
    isNewConversation?: boolean;
}

const MessageInputBox = ({ setMessages, conversationId, isNewConversation = false }: Props ) => {
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {userId} = useAuth(); // get Clerk user Id


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if ( !inputText.trim() || isLoading || !userId ) return;
        setIsLoading(true);

        try {
            if (isNewConversation) {
                const createConversationResponse = await aiChatApiService.createConversation(inputText.slice(0, 30));

                const newConversationId = createConversationResponse.conversationId;

                await aiChatApiService.sendMessage(newConversationId,inputText);

                 
                 

                navigate(`/dashboard/chats/${newConversationId}`);
            }else {

                if (!conversationId || !setMessages) return;

                const response = await aiChatApiService.sendMessage(conversationId, inputText);

                const {userMessage, aiMessage} = response.data;
                setMessages(prev => [...prev, userMessage, aiMessage]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
            setInputText("");
        }
    }; 

    if (!userId) {
        return null;
    }

return (
    <form onSubmit={handleSubmit} 
          className="bg-[#e9ecf2] rounded-[20px] flex items-center gap-3 p-4 px-6 w-full max-w-[600px] md:max-w-[750px]">
        <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message here..."
            disabled={isLoading}
            className="flex-1 py-2 border-none outline-none bg-transparent text-black" 
        />
        <button  className={`rounded-full bg-black p-3 flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={isLoading}
        >
            <ArrowBigUpDash size={15} color="white"/>
        </button>
    </form>
);
};

export default MessageInputBox;