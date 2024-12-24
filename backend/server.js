const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// In-memory store for todos
let todos = [];

//? Route to add a todo
app.post("/api/add-todo", (req, res) => {
  try {
    const { todoData } = req.body;

    // Logging received data to check if it's coming as expected
    console.log("Received todoData:", todoData);

    // Push valid data into the array
    if (todoData) {
      todos.push(todoData);
      console.log("Updated todos:", todos);
      res.status(201).json({ message: "Todo added successfully", todos });
    } else {
      res.status(400).json({ error: "Invalid todoData" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//? Route to fetch all todos
app.get("/api/todos", (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//? Route to update a todo
app.put("/api/update-todo/:id", (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;

  try {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index] = { ...todos[index], ...updatedTodo };
      res.status(200).json({ message: "Todo updated successfully", todos });
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    console.error("Error updating todo:", error.message);
    res.status(500).json({ error: "Failed to update todo" });
  }
});

//? Route to delete a todo
app.delete("/api/delete-todo/:id", (req, res) => {
  let { id } = req.params; // `id` is a string from the URL parameter
  try {
    console.log("ID to delete:", id); // Log the `id` for debugging

    // Ensure the comparison works regardless of type
    let initialLength = todos.length;
    todos = todos.filter((todo) => todo.id !== id);

    if (todos.length < initialLength) {
      res.status(200).json({ message: "Todo deleted successfully", todos });
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
