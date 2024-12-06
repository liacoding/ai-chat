import mongoose from "mongoose";

export interface IConversation extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    title: string;
    createdAt: Date;
}

const conversationSchema: mongoose.Schema = new mongoose.Schema({
  
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Conversation = mongoose.model<IConversation>("Conversation", conversationSchema);