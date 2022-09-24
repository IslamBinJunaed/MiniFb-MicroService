import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { register } from "./routes/register.js";
import { login } from "./routes/login.js";
import { authorize } from "./services/auth.js";

const app = express();

// Middleware
app.use(cors({ origin: ["http://localhost:4200"], credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Routers
app.use("/register", register);
app.use("/login", login);
app.use("/", authorize);

// Connect to MongoDB and then spin up Server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(_ => {
    app.listen(process.env.PORT, () =>
      console.log(`Server is Running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
