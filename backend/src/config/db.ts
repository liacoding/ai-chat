import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    try {
        if (!ENV_VARS.MONGO_URI) {
            throw new Error('MongoDB URI is missing');
        }
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("MongoDB connected: " + conn.connection.host);
    } catch (error: unknown) {
        console.log("MongoDB connection error: " + (error as Error).message);
        process.exit(1);
    }
};