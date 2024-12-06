import NewPrompt from '../components/NewPrompt';
import { useState } from 'react';

interface Message {
    content: string;
    role: "user" | "ai";
    timestamp: Date;
}

const ChatPage = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    return (
        <div className="h-screen flex flex-col items-center relative">
            <div className="flex-1 w-full flex justify-center overflow-y-auto">
                <div className="w-full md:w-[600px] lg:w-1/2 flex flex-col">
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`p-5 ${
                                message.role === "user" 
                                    ? 'bg-[#e9ecf2] rounded-[20px] max-w-[80%] self-end' 
                                    : 'bg-white rounded-[20px] max-w-[80%]'                
                            }`}
                        >
                            {message.content}
                        </div>
                    ))}
                    <div className="pb-24"></div>
                    <NewPrompt setMessages={setMessages} />
                </div>
            </div>
        </div>
    );
};

export default ChatPage;