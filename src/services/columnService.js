import pool from "../config/database.js";

export const getColumns = async (boardId) => {
  const result = await pool.query(
    "SELECT * FROM tm_columns WHERE board_id = $1 ORDER BY position",
    [boardId]
  );
  return result.rows;
};

export const createColumn = async (boardId, title, position) => {
  const result = await pool.query(
    "INSERT INTO tm_columns (board_id, title, position) VALUES ($1, $2, $3) RETURNING *",
    [boardId, title, position]
  );
  return result.rows[0];
};

export const modifyColumn = async (id, title, position) => {
  const result = await pool.query(
    "UPDATE tm_columns SET title = $1, position = $2 WHERE id = $3 RETURNING *",
    [title, position, id]
  );
  return result.rows[0];
};

export const removeColumn = async (id) => {
  await pool.query("DELETE FROM tm_columns WHERE id = $1", [id]);
};
