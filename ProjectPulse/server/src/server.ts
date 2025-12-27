import dotenv from "dotenv";
import express, { Request, Response } from "express";

import { connectDB } from "./config/DB";
import { authRoute } from "./modules/auth/auth.routes";
import { projectRoute } from "./modules/Projects/project.routes";
import auth from "./middleware/auth";
import { employeeRoute } from "./modules/employee/employee.routes";
import { clientRoute } from "./modules/client/client.routes";
import { riksRoute } from "./modules/risks/risks.routes";

const app = express();
app.use(express.json())
dotenv.config();

app.get("/", (req: Request, res: Response) => {
  res.send("hey i am here");
});

app.use("/api/v1/auth", authRoute)

app.use("/api/v1/project",auth("admin"), projectRoute)

app.use("/api/v1/employee", employeeRoute)
app.use("/api/v1/client", clientRoute)
app.use("/api/v1/risk", riksRoute)
// app.use("/users", userRoute);

// Conntect database
connectDB().then(() => {
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log("server is listeing on port 5000");
  });
});
