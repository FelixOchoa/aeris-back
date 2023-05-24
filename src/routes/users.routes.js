import { Router } from "express";
import { getUsers, CreateUser } from "../controllers/UserController.js";

const router = Router();

router.get("/users", getUsers);
router.post("/create-user", CreateUser);

export default router;
