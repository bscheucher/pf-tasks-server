import {
  findBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../services/boardService.js";

export const getBoards = async (req, res) => {
  const { userId } = req.params;
  console.log(`[getBoards] Called for user ID: ${userId}`);

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    const boards = await findBoards(userId);
    if (!boards || boards.length === 0) {
      return res
        .status(404)
        .json({ message: "No boards found for this user." });
    }
    res.json(boards);
  } catch (err) {
    console.error(`[getBoards] Error fetching boards for user ${userId}:`, err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addBoard = async (req, res) => {
  const {userId} = req.params;
  console.log(`[addBoard] Called for user ID: ${userId}`);

  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }
  const { name } = req.body;
  try {
    const board = await createBoard(userId, name);
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const modifyBoard = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const board = await updateBoard(id, name);
    res.json(board);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const removeBoard = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteBoard(id);
    res.json({ message: "Board deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
