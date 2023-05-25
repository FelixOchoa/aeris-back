import { Router } from "express";
import {
  getUsers,
  CreateUser,
  loginUser,
} from "../controllers/UserController.js";

const router = Router();

router.get("/users", getUsers);
router.post("/create-user", CreateUser);
router.post("/login", loginUser);

export default router;
