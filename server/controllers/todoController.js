import Todo from '../models/Todo.js';

// Get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos', error: error.message });
  }
};

// Get single todo by ID
export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user.userId });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todo', error: error.message });
  }
};

// Create new todo
export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Task title is required' });
    }

    const todo = new Todo({
      title: title.trim(),
      completed: false,
      user: req.user.userId,
      createdAt: Date.now()
    });

    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create todo', error: error.message });
  }
};

// Update todo
export const updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    
    const updateData = {};
    if (title !== undefined) updateData.title = title.trim();
    if (completed !== undefined) updateData.completed = completed;

    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update todo', error: error.message });
  }
};

// Delete single todo
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully', todo });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo', error: error.message });
  }
};

// Delete all todos
export const deleteAllTodos = async (req, res) => {
  try {
    const result = await Todo.deleteMany({ user: req.user.userId });
    res.json({ message: `${result.deletedCount} todos deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todos', error: error.message });
  }
};
