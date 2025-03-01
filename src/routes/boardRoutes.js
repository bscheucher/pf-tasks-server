import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";
import {
  getBoards,
  addBoard,
  modifyBoard,
  removeBoard,
} from "../controllers/boardController.js";

const router = express.Router();

router.get("/:userId", authenticateToken, getBoards);
router.post("/add/:userId", authenticateToken, addBoard);
router.put("/update/:id", modifyBoard);
router.delete("/delete/:id", removeBoard);

export default router;
