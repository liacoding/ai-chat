import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
    MONGO_URI: process.env.MONGO_URI, 
    PORT: process.env.PORT || 5050,
    CHAT_GPT_API_KEY: process.env.CHAT_GPT_API_KEY,
};