import mongoose from "mongoose";

export interface IMessage {
    sender: "user" | "ai";
    content: string;
    createdAt: Date;
  }

export interface IConversation extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    clerkUserId: string;
    title: string;
    createdAt: Date;
    messages: IMessage[];
};

const conversationSchema: mongoose.Schema = new mongoose.Schema({
  
    clerkUserId: {
        type: String,
        required: true,
        index: true,
    },

    title: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    messages: {
        type: [
            {
                sender: { type: String, enum: ["user", "ai"], required: true },
                content: { type: String, required: true },
                createdAt: { type: Date, default: Date.now },
              },
        ],
        default: [],
    }
});

export const Conversation = mongoose.model<IConversation>("Conversation", conversationSchema);