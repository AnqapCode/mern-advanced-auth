import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// production
// import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// production
// const __dirname = path.resolve();

const corsOption = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOption));

app.use(express.json()); // allows us to parse incoming request: req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// app.get("/", (req, res) => {
//   res.send("Hello World Kabar!");
// });

app.use("/api/auth", authRoutes);

// production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.htnl"));
//   });
// }

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
