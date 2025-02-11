import pool from "../config/database.js";

export const getTasks = async (columnId) => {
  const result = await pool.query(
    "SELECT * FROM tm_tasks WHERE column_id = $1 ORDER BY position",
    [columnId]
  );
  return result.rows;
};

export const createTask = async (columnId, title, description, position) => {
  const result = await pool.query(
    "INSERT INTO tm_tasks (column_id, title, description, position) VALUES ($1, $2, $3, $4) RETURNING *",
    [columnId, title, description, position]
  );
  return result.rows[0];
};

export const modifyTask = async (
  id,
  title,
  description,
  position,
  columnId
) => {
  const result = await pool.query(
    "UPDATE tm_tasks SET title = $1, description = $2, position = $3, column_id = $4 WHERE id = $5 RETURNING *",
    [title, description, position, columnId, id]
  );
  return result.rows[0];
};

export const removeTask = async (id) => {
  await pool.query("DELETE FROM tm_tasks WHERE id = $1", [id]);
};
