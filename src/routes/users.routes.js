import { Router } from "express";
import {
  getUsers,
  CreateUser,
  loginUser,
  generatePassword,
  getStudents,
  logout,
} from "../controllers/UserController.js";

const router = Router();

router.get("/users", getUsers);
router.get("/students", getStudents);
router.post("/create-user", CreateUser);
router.post("/login", loginUser);
router.post("/generate-password", generatePassword);
router.post("/logout", logout);

export default router;
