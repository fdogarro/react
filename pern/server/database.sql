CREATE DATABASE postgres;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(300)
);