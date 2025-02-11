import {
  getTasks,
  createTask,
  modifyTask,
  removeTask,
} from "../services/taskService.js";

export const fetchTasks = async (req, res) => {
  const { columnId } = req.params;
  try {
    const tasks = await getTasks(columnId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addTask = async (req, res) => {
  const { columnId } = req.params;
  const { title, description, position } = req.body;
  try {
    const task = await createTask(columnId, title, description, position);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, position, columnId } = req.body;
  try {
    const task = await modifyTask(id, title, description, position, columnId);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await removeTask(id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
