import express from "express";
import { validateUserInput } from "../middleware/validateUserMiddleware.js";
import { authenticateToken } from "../middleware/authenticateToken.js";
import {
  registerUser,
  getUserById,
  login,
  updateUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", validateUserInput, registerUser);
router.get("/:id", authenticateToken, getUserById);
router.post("/login", login);
router.put("/:id/update", authenticateToken, updateUser);

export default router;
