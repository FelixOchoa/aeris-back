import express from "express";
import userRoutes from "./routes/users.routes.js";
import matterRoutes from "./routes/matters.routes.js";
const app = express();

app.use(express.json());

app.use(userRoutes, matterRoutes);

export default app;
