import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/:columnId", fetchTasks);
router.post("/add/:columnId", authenticateToken, addTask);
router.put("/update/:id", authenticateToken, updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
