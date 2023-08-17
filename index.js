import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { userValidation } from "./validation/user.js";
import { register } from "./controllers/UserController.js";
import User from "./models/User.js";

const { MONGODB_CONNECT_URI } = process.env;

mongoose
  .connect(MONGODB_CONNECT_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log("Database connection error: ", error.message));

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.post("/register", userValidation, register);

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error  users data", error);
    res.status(500).json({ error: "Error  users data" });
  }
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log("Server error");
  }
  console.log(`Server listening on ${PORT}`);
});
