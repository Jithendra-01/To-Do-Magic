import express from 'express';
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos
} from '../controllers/todoController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication to all routes
router.use(authenticate);

// GET all todos
router.get('/', getTodos);

// GET single todo by id
router.get('/:id', getTodoById);

// POST create new todo
router.post('/', createTodo);

// PUT update todo
router.put('/:id', updateTodo);

// DELETE single todo
router.delete('/:id', deleteTodo);

// DELETE all todos
router.delete('/', deleteAllTodos);

export default router;
