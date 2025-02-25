import {
  getColumns,
  createColumn,
  modifyColumn,
  removeColumn,
} from "../services/columnService.js";

export const fetchColumns = async (req, res) => {
  const { boardId } = req.params;
  try {
    const columns = await getColumns(boardId);
    res.json(columns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addColumn = async (req, res) => {
  const { boardId } = req.params;
  const { title, position } = req.body;
  try {
    const column = await createColumn(boardId, title, position);
    res.status(201).json(column);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateColumn = async (req, res) => {
  const { id } = req.params;
  const { title, position } = req.body;
  console.log("col to upd", req.body);
  try {
    const column = await modifyColumn(id, title, position);
    res.json(column);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteColumn = async (req, res) => {
  const { id } = req.params;
  try {
    await removeColumn(id);
    res.json({ message: "Column deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
