import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import establishMongoConnection from "./db/establishMongoConnection.js";

const app = express();
const port = process.env.port || 5000;

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  establishMongoConnection();
  console.log(`Listening on port ${port}`);
});
