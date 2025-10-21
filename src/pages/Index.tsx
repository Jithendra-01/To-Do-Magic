import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, Sparkles, CheckCircle2, Loader2, LogOut, User, Settings } from "lucide-react";
import { toast } from "sonner";
import { todoApi, type Todo } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Load tasks from MongoDB on mount
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await todoApi.getAllTodos();
      setTasks(data);
    } catch (error) {
      toast.error("Failed to load tasks. Please check your connection.");
      console.error("Error loading tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) {
      toast.error("Task cannot be empty");
      return;
    }

    try {
      setSubmitting(true);
      const task = await todoApi.createTodo(newTask.trim());
      setTasks([task, ...tasks]);
      setNewTask("");
      toast.success("Task added");
    } catch (error) {
      toast.error("Failed to add task");
      console.error("Error adding task:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleTask = async (id: string) => {
    const task = tasks.find(t => t._id === id);
    if (!task) return;

    try {
      const updated = await todoApi.updateTodo(id, { completed: !task.completed });
      setTasks(tasks.map(t => t._id === id ? updated : t));
    } catch (error) {
      toast.error("Failed to update task");
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await todoApi.deleteTodo(id);
      setTasks(tasks.filter(task => task._id !== id));
      toast.success("Task deleted");
    } catch (error) {
      toast.error("Failed to delete task");
      console.error("Error deleting task:", error);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-primary-glow/10 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto p-4 md:p-8 pt-12">
        {/* User Info and Logout */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/profile')}
              className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <User className="w-5 h-5 text-white" />
            </button>
            <div>
              <p className="text-sm text-muted-foreground">Welcome back,</p>
              <p className="font-semibold text-foreground">{user?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate('/profile')}
              variant="outline"
              size="sm"
              className="border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-primary/20 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Beautiful & Productive</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-fade-in">
            My Tasks
          </h1>
          
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            {completedCount} of {tasks.length} tasks completed
          </p>
        </div>

        <div className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[var(--shadow-elegant)] border border-primary/10 mb-8 hover:shadow-[var(--shadow-glow)] transition-all duration-500">
          <div className="flex gap-3">
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              placeholder="What needs to be done?"
              className="flex-1 h-14 text-lg border-primary/20 focus-visible:ring-primary/30 rounded-2xl bg-background/50 backdrop-blur"
            />
            <Button 
              onClick={addTask}
              disabled={submitting}
              size="lg"
              className="h-14 px-8 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="h-6 w-6 mr-2 animate-spin" />
              ) : (
                <Plus className="h-6 w-6 mr-2" />
              )}
              Add
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-20">
              <Loader2 className="w-16 h-16 mx-auto text-primary animate-spin" />
              <p className="text-xl text-muted-foreground font-medium mt-4">Loading tasks...</p>
            </div>
          ) : tasks.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-4 relative">
                <Sparkles className="w-16 h-16 mx-auto text-primary/30 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full blur-xl" />
                </div>
              </div>
              <p className="text-xl text-muted-foreground font-medium">Your canvas awaits</p>
              <p className="text-sm text-muted-foreground mt-2">Add your first task to get started</p>
            </div>
          ) : (
            tasks.map((task, index) => (
              <div
                key={task._id}
                className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-primary/10 hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task._id)}
                    className="border-2 w-6 h-6 border-primary/40 data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-primary data-[state=checked]:to-primary-glow data-[state=checked]:border-transparent transition-all duration-300"
                  />
                  <span
                    onClick={() => toggleTask(task._id)}
                    className={`flex-1 cursor-pointer text-lg transition-all duration-300 ${
                      task.completed
                        ? "line-through text-muted-foreground opacity-60"
                        : "text-foreground"
                    }`}
                  >
                    {task.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTask(task._id)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-destructive hover:bg-destructive/10 rounded-xl"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
