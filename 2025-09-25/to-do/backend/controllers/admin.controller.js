const { validationResult } = require("express-validator");
const todosController = require("./todos.controller");

exports.readArchived = (req, res, next) => {
  try {
    const allToDos = todosController.getAll();
    const archivedTodos = allToDos.filter(todo => todo.archived);

    return res.json(archivedToDos);
  } catch (error) {
    return next(error);
  }
};

exports.toggle = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const todoId = req.params.id;
    const updatedToDo = todosController.toggle(todoId);

    if (!updatedToDo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.json(updatedToDo);
  } catch (error) {
    return next(error);
  }
};
