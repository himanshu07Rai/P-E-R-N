const express = require("express");

const app = express();

const pool = require("./db");

app.use(express.json());

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * from todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * from todo where todo_id = $1", [
      id,
    ]);
    res.json(todo.rows);
  } catch (error) {
    console.error(error);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; //where
    const { description } = req.body; //set
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 where todo_id = $2",
      [description, id]
    );
    res.json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params; //where
    // const { description } = req.body; //set
    await pool.query("DELETE FROM todo where todo_id = $1", [id]);
    res.json("deleted");
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
