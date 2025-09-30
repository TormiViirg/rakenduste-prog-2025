import { Box, List, ListItem, ListItemText, Typography, IconButton, Stack, Paper, Snackbar, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SubmitTodo from "./SubmitTodo";

type Todo = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number | null;
  archived: boolean;
  archivedAt: number | null;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [snack, setSnack] = useState<{
    open: boolean;
    msg: string;
    severity: "success" | "error";
  }>({ open: false, msg: "", severity: "success" });

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      setTodos(data);
    } catch {
      setSnack({ open: true, msg: "Load failed, we'll get them next time", severity: "error" });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const updateTodo = async (id: string, current: string) => {
    const title = prompt("Update todo title?", current || "");
    if (!title) return;
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    fetchTodos();
    setSnack({ open: true, msg: "Todo updated", severity: "success" });
  };

  const deleteTodo = async (id: string) => {
    await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
    fetchTodos();
    setSnack({ open: true, msg: "Todo archived", severity: "success" });
  };

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Todos
      </Typography>

      <List>
        {todos.map((todo) => (
          <Paper key={todo.id} elevation={2} sx={{ mb: 1, borderRadius: 2, overflow: "hidden" }}>
            <ListItem
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="edit" onClick={() => updateTodo(todo.id, todo.title)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="error" onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemText
                primary={todo.title}
                secondary={`Created: ${new Date(todo.createdAt).toLocaleString("et-EE")}`}
              />
            </ListItem>
          </Paper>
        ))}
      </List>

      <SubmitTodo onCreated={fetchTodos} />

      <Snackbar
        open={snack.open}
        autoHideDuration={2500}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snack.severity}
          variant="filled"
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Todos;
