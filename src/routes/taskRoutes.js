import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";
import {
  fetchTasks,
  addTask,
  updateTask,
  moveTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/:columnId", authenticateToken, fetchTasks);
router.post("/add/:columnId", authenticateToken, addTask);
router.put("/update/:id", authenticateToken, updateTask);
router.put("/move/:id", authenticateToken, moveTask);
router.delete("/delete/:id", deleteTask);

export default router;
