import {
  findBoards,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../services/boardService.js";

export const getBoards = async (req, res) => {
  console.log("getBoards called. User ID:", req.user.id);
  try {
    const boards = await findBoards(req.user.id);
    res.json(boards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addBoard = async (req, res) => {
  console.log("createBoards called. User ID:", req.user.id);
  const { name } = req.body;
  try {
    const board = await createBoard(req.user.id, name);
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
