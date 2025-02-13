import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";
import {
  addColumn,
  fetchColumns,
  updateColumn,
  deleteColumn,
} from "../controllers/columnController.js";

const router = express.Router();

router.post("/add/:boardId", authenticateToken, addColumn);
router.get("/:boardId", authenticateToken, fetchColumns);
router.put("/update/:id", authenticateToken, updateColumn);
router.delete("/delete/:id", authenticateToken, deleteColumn);

export default router;
