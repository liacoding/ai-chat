import express from "express";
import aichatRoutes from "./routes/aichat.route.js";
import conversationRoutes from "./routes/conversations.route.js";
import userRoutes from "./routes/user.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); //parse JSON to JavaScript object
app.use(cors());

app.use("/api/v1/aichat", aichatRoutes);
app.use("/api/v1/conversation", conversationRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
});
