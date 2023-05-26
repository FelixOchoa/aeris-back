import { Router } from "express";
import {
  getUsers,
  CreateUser,
  loginUser,
  generatePassword,
} from "../controllers/UserController.js";

const router = Router();

router.get("/users", getUsers);
router.post("/create-user", CreateUser);
router.post("/login", loginUser);
router.post("/generate-password", generatePassword);

export default router;
