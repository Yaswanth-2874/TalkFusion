import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import establishMongoConnection from "./db/establishMongoConnection.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.port || 5000;

dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  establishMongoConnection();
  console.log(`Listening on port ${port}`);
});
