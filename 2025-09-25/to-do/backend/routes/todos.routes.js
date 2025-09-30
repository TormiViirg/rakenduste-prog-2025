const express = require("express");
const { body, param } = require("express-validator");
const router = express.Router();

const todoController = require("../controllers/todos.controller");

const {
  todosRouteMiddleware,
  todosGetRouteMiddleware,
} = require("../middlewares/todos.middlewares");

router.use(todosRouteMiddleware);

router.get("/", todosGetRouteMiddleware, todoController.getTodos);

router.post(
  "/",
  body("title").isString().trim().isLength({ min: 1, max: 120 }),
  todoController.createTodo
);

router.put(
  "/:id",
  param("id").isUUID(),
  body("title").optional().isString().trim().isLength({ min: 1, max: 120 }),
  todoController.updateTodo
);

router.delete(
  "/:id",
  param("id").isUUID(),
  todoController.deleteTodo
);

module.exports = router;
