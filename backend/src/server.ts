import express from "express";
import aichatRoutes from "./routes/aichat.route.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json()); //parse JSON to JavaScript object

app.use("/api/v1/aichat", aichatRoutes);

app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
});
