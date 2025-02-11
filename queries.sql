CREATE TABLE tm_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE tm_boards (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES tm_users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL
);


CREATE TABLE tm_columns (
    id SERIAL PRIMARY KEY,
    board_id INT REFERENCES tm_boards(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    position INT NOT NULL
);

CREATE TABLE tm_tasks (
    id SERIAL PRIMARY KEY,
    column_id INT REFERENCES tm_columns(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    position INT NOT NULL
);
