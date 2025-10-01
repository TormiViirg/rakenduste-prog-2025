import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Props = { onCreated: () => Promise<void> | void };

export default function SubmitToDo({ onCreated }: Props) {
  const [title, setTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    try {
      setSubmitting(true);
      const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmed }),
      });

      if (res.ok) {
        setTitle("");
        await onCreated();
      } else {
        alert("Failed to create ToDo hope you noticed");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Lil title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          disabled={submitting || !title.trim()}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
}
