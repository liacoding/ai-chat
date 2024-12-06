import mongoose from "mongoose";

//Message Schema
const messageSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Types.ObjectId, 
      auto: true,
    },

    conversationId: {
      type: mongoose.Types.ObjectId, 
      required: true, 
      ref: "Conversation",
    },

    sender: {
      type: String, 
      required: true, 
      enum: ["user", "bot"], //restricts values to "user" or "bot"
    },

    content: {
      type: String,
      required: true, 
    },

    timestamp: {
      type: Date,
      default: Date.now, 
    },

    metadata: {
      tone: {
        type: String, 
        required: false,
      },

      confidence: {
        type: Number, 
        required: false,
      },

    },
});

export const Message = mongoose.model("Message", messageSchema);