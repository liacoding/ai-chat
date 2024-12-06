import { useState } from 'react';
import { ArrowBigUpDash } from 'lucide-react';
import axios from 'axios';

interface Message {
    content: string;
    role: "user" | "ai";
    timestamp: Date;
}

interface Props {
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const NewPrompt = ({ setMessages }: Props) => {
    const [inputText, setInputText] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage: Message = {
            content: inputText,
            role: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText(""); 

        // TODO: Send message to backend
    }; 

    return (
        <form onSubmit={handleSubmit} className="fixed md:absolute bottom-2 left-0 right-0 md:left-1/2 md:-translate-x-1/2 mx-2 md:mx-0 bg-[#e9ecf2] rounded-[20px] flex items-center gap-3 p-4 px-6 w-[calc(100%-16px)] md:w-[600px] lg:w-1/2 md:mb-6">
            <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 py-2 border-none outline-none bg-transparent text-black" 
            />
            <button className="rounded-full bg-black p-3 flex items-center justify-center cursor-pointer">
                <ArrowBigUpDash size={15} color="white"/>
            </button>
        </form>
    );
};

export default NewPrompt;