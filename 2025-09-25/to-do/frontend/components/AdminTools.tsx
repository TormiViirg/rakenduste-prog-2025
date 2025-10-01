import { Box, List, ListItem, ListItemText, Typography, IconButton, Stack, Paper, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";

type Todo = {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number | null;
  archived: boolean;
  archivedAt: number | null;
};

export default function AdminTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [snack, setSnack] = useState<{
    open: boolean;
    msg: string;
    severity: "success" | "error";
  }>({ open: false, msg: "", severity: "success" });

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/admin/todos");
      const data = await res.json();
      setTodos(data);
    } catch {
      setSnack({ open: true, msg: "Load failed", severity: "error" });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const restoreTodo = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/admin/todos/${id}/toggle`, {
        method: "PATCH",
      });
      if (res.ok) {
        await fetchTodos();
        setSnack({ open: true, msg: "Todo restored", severity: "success" });
      } else {
        setSnack({ open: true, msg: "Restore failed", severity: "error" });
      }
    } catch {
      setSnack({ open: true, msg: "Network error", severity: "error" });
    }
  };

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Admin Todos
      </Typography>

      <List>
        {todos.map((todo) => (
          <Paper
            key={todo.id}
            elevation={2}
            sx={{ mb: 1, borderRadius: 2, overflow: "hidden" }}
          >
            <ListItem
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton
                    aria-label="restore"
                    color="success"
                    onClick={() => restoreTodo(todo.id)}
                  >
                    <RestoreIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemText
                primary={todo.title}
                secondary={`Status: Archived | Created: ${new Date(
                  todo.createdAt
                ).toLocaleString()}`}
              />
            </ListItem>
          </Paper>
        ))}
      </List>

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
}
