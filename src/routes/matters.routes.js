import { Router } from "express";
import { createMatter, assignMatter } from "../controllers/MatterController.js";

const router = Router();

router.post("/create-matter", createMatter);
router.post("/assign-matter", assignMatter);

export default router;
