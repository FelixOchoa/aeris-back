import express from "express";
import userRoutes from "./routes/users.routes.js";
import matterRoutes from "./routes/matters.routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(userRoutes, matterRoutes);

export default app;
