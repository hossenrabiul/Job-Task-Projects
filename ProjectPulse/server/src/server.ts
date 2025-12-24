import dotenv from "dotenv";
import express, { Request, Response } from "express";

import { connectDB } from "./config/DB";
import { authRoute } from "./modules/auth/auth.routes";

const app = express();
app.use(express.json())
dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("hey i am here");
});

app.use("/api/v1/auth", authRoute)

// app.use("/users", userRoute);

// Conntect database
connectDB().then(() => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log("server is listeing on port 5000");
  });
});
