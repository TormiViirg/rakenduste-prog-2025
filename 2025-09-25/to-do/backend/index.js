const express = require("express");
const cors = require("cors");

const todosRoutes = require("./routes/todos.routes"); // <-- routes file (should export a router)

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/todos", todosRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
