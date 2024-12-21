export interface Conversation {
    id: string;
    title: string;
    createdAt: string;
    lastMessage: string | null; 
};

export interface ChatListHandle {
    refresh: () => Promise<void>;
};

export interface Message {
    _id: string,
    content: string;
    sender: "user" | "ai";
    createdAt: string;
};

export interface MessageInputBoxProps {
    setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
    conversationId?: string;
    isNewConversation?: boolean;
};

export interface DashboardContextType {
    handleChatCreated: () => void;
};