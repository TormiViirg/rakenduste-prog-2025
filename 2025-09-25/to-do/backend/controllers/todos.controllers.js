const { v4: generateUUID } = require("uuid");
const { validationResult } = require("express-validator");

const todoList = [
  {
    id: generateUUID(),
    title: "First TODO",
    createdAt: Date.now(),
    updatedAt: null,
    isArchived: false,
    archivedAt: null,
  },
];

exports.createTodo = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title } = req.body;
    const newTodo = {
      id: generateUUID(),
      title,
      createdAt: Date.now(),
      updatedAt: null,
      isArchived: false,
      archivedAt: null,
    };

    todoList.push(newTodo);
    return res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

exports.getTodos = (req, res, next) => {
  try {
    const activeTodos = todoList.filter((todo) => !todo.isArchived);
    res.json(activeTodos);
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const { title } = req.body;
    if (typeof title === "string") {
      todoList[todoIndex].title = title;
    }
    todoList[todoIndex].updatedAt = Date.now();

    res.json(todoList[todoIndex]);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todoList[todoIndex].isArchived = true;
    todoList[todoIndex].archivedAt = Date.now();
    todoList[todoIndex].updatedAt = Date.now();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
