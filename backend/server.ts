import express from "express";
import chatGPTRoutes from "./routes/gpt.route.js";
import conversationRoutes from "./routes/conversations.route.js";
import aiChatFlowRoutes from "./routes/aichat.flow.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectedRoute } from "./middleware/auth.clerk.middleware.js";
import cors from "cors";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); //parse JSON to JavaScript object
app.use(cors());

app.use("/api/v1/chatGPT", chatGPTRoutes);
app.use("/api/v1/conversation", protectedRoute, conversationRoutes);
app.use("/api/v1/aiChat",protectedRoute, aiChatFlowRoutes);

app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
});

