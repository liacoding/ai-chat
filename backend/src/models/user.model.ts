import mongoose from "mongoose";

//User Schema
const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId, 
        auto: true,
      },

    username: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});