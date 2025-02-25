import {
  getTasks,
  createTask,
  modifyTask,
  modifyTaskPosition,
  removeTask,
} from "../services/taskService.js";

export const fetchTasks = async (req, res) => {
  console.log("fetchTasks is called");
  const { columnId } = req.params;

  console.log("columnId in fetchTasks", columnId);
  if (isNaN(columnId)) {
    return res.status(400).json({ error: "Invalid column ID" });
  }
  try {
    const tasks = await getTasks(columnId);
    if (!tasks || tasks.length === 0) {
      return res.status(201).json({ message: "No tasks found for this user." });
    }
    res.json(tasks);
  } catch (err) {
    console.error(
      `[fetchTasks] Error fetching tasks for column ${columnId}:`,
      err
    );
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
  console.log("updateTask is called");
  const { id } = req.params;
  const { title, description, position, columnId } = req.body;
  console.log("req.body in updateTask", req.body);
  try {
    const task = await modifyTask(id, title, description, position, columnId);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const moveTask = async (req, res) => {
  const { id } = req.params;
  const { position, columnId } = req.body;
  try {
    const task = await modifyTaskPosition(id, position, columnId);
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
