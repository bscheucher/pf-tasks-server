import express from "express";
import authRoutes from "./authRoutes.js";
import boardRoutes from "./boardRoutes.js";
import columnRoutes from "./columnRoutes.js";
import taskRoutes from "./taskRoutes.js";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/boards", boardRoutes);
router.use("/columns", columnRoutes);
router.use("/routes", taskRoutes);

export default router;
