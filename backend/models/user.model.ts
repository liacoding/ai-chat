import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    clerkUserId: string;
    username: string;
    email: string;
    createdAt: Date;
}

const userSchema: mongoose.Schema = new mongoose.Schema({

    clerkUserId: { 
        type: String,
        required: true,
        unique: true, 
    },

    username: {
        type: String,
		required: true,
		unique: true,
	},

    email: {
        type: String,
		required: true,
		unique: true,
	},
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const User = mongoose.model<IUser>("User", userSchema);