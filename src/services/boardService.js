import pool from "../config/database.js";

export const findBoards = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM tm_boards WHERE user_id = $1",
    [userId]
  );
  return result.rows;
};

export const createBoard = async (userId, name) => {
  const result = await pool.query(
    "INSERT INTO tm_boards (user_id, name) VALUES ($1, $2) RETURNING *",
    [userId, name]
  );
  return result.rows[0];
};

export const updateBoard = async (id, name) => {
  const result = await pool.query(
    "UPDATE tm_boards SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  return result.rows[0];
};

export const deleteBoard = async (id) => {
  await pool.query("DELETE FROM tm_boards WHERE id = $1", [id]);
};
