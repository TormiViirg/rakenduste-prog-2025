import { Box, List, ListItem, ListItemText, Typography, IconButton, Stack, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  archived: boolean;
  archivedAt: number | null;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const rename = async (id: string, current: string) => {
    const name = prompt("Give new name?", current || "");
    if (!name) return;
    await fetch(`http://localhost:3000/cats/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    fetchCats();
  };

  const remove = async (id: string) => {
    await fetch(`http://localhost:3000/cats/${id}`, { method: "DELETE" });
    fetchCats();
  };

  return <CatsList cats={cats} rename={rename} remove={remove} fetchCats={fetchCats} />;
};

type CatsListProps = {
  cats: Cat[];
  rename: (id: string, current: string) => void;
  remove: (id: string) => void;
  fetchCats: () => void;
};

const CatsList: React.FC<CatsListProps> = ({ cats, rename, remove, fetchCats }) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Cats
      </Typography>

      <List>
        {cats.map((cat) => (
          <Paper key={cat.id} elevation={2} sx={{ mb: 1, borderRadius: 2, overflow: "hidden" }}>
            <ListItem
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="edit" onClick={() => rename(cat.id, cat.name)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="error" onClick={() => remove(cat.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemText primary={cat.name} />
            </ListItem>
          </Paper>
        ))}
      </List>

      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
