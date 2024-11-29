import mongoose from "mongoose";

//Conversation Schema
const conversationSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId, 
        auto: true, 
      },

    userId: {
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: "User", 
      },

      title: {
        type: String, 
        required: false, 
      },

      createdAt: {
        type: Date,
        default: Date.now, 
      },

      updatedAt: {
        type: Date,
        default: Date.now, 
      },
});
