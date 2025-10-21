import axios from 'axios';

// Use relative path to leverage Vite proxy
const API_URL = '/api';

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
  user: string;
  createdAt: number;
  updatedAt?: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
}

// Create axios instance with interceptor for auth headers
const apiClient = axios.create({
  baseURL: API_URL,
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  // Register user
  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    return response.data;
  },

  // Login user
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },

  // Get current user
  getMe: async (): Promise<{ success: boolean; user: User }> => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  // Logout user
  logout: async (): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },

  // Update profile
  updateProfile: async (name: string, email: string): Promise<{ success: boolean; message: string; user: User }> => {
    const response = await apiClient.put('/auth/profile', { name, email });
    return response.data;
  },

  // Change password
  changePassword: async (currentPassword: string, newPassword: string): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.put('/auth/change-password', { currentPassword, newPassword });
    return response.data;
  }
};

export const todoApi = {
  // Get all todos
  getAllTodos: async (): Promise<Todo[]> => {
    const response = await apiClient.get('/todos');
    return response.data;
  },

  // Get single todo
  getTodoById: async (id: string): Promise<Todo> => {
    const response = await apiClient.get(`/todos/${id}`);
    return response.data;
  },

  // Create new todo
  createTodo: async (title: string): Promise<Todo> => {
    const response = await apiClient.post('/todos', { title });
    return response.data;
  },

  // Update todo
  updateTodo: async (id: string, updates: { title?: string; completed?: boolean }): Promise<Todo> => {
    const response = await apiClient.put(`/todos/${id}`, updates);
    return response.data;
  },

  // Delete todo
  deleteTodo: async (id: string): Promise<void> => {
    await apiClient.delete(`/todos/${id}`);
  },

  // Delete all todos
  deleteAllTodos: async (): Promise<void> => {
    await apiClient.delete('/todos');
  }
};
