import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { aiChatApiService } from '../services/aiChatApi'; 

interface Conversation {
    id: string;
    title: string;
    createdAt: string;
    lastMessage: string | null; 
}

const ChatList =  () => {

    const [conversations, setConversations] = useState<Conversation[]>([]);
    const {userId} = useAuth(); // get Clerk user Id

    useEffect(() => {
        if (userId) { 
            loadConversations();
        }
    }, [userId]); 


    const loadConversations = async () => {
      try {
        
        const response = await aiChatApiService.getConversations();
        setConversations(response.data);
      } catch (error) {
        console.error('Error loading conversations:', error);
      }
    };

    return (
        <div className="flex flex-col h-full bg-white"> 

            {/* Header - fixed size */}
            <div className="flex-none px-4 pb-3">
                <span className="font-semibold text-xs block mb-3">DASHBOARD</span>
                <Link to="/dashboard" className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]">
                    Create a new chat
                </Link>
                <Link to="/" className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]">
                    Explore Star AI
                </Link>
            </div>

            <hr className="mx-4 h-0.5 bg-[#b9b9b9] opacity-10" />

            {/* Chat List - will scroll and take remaining space */}
            <div className="flex-1 overflow-y-auto clean-scrollbar">
                <div className="p-4">
                    <span className="font-semibold text-xs block  mb-3">RECENT CHATS</span>
                    {conversations.map((chat) => (
                        <Link 
                            key={chat.id}
                            to={`/dashboard/chats/${chat.id}`}
                            className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]"
                        >
                            {chat.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer - fixed size */}
            <div className="flex-none p-4 mt-auto border-t border-gray-200">
                <div className="flex items-center gap-2.5 text-xs">
                    <img src="/logo.png" alt="logo" className="w-6 h-6" />
                    <div className="flex flex-col">
                        <span className="font-semibold">Upgrade to PRO</span>
                        <span className="text-gray-500">
                            Get your team unlimited access to all our features
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ChatList;