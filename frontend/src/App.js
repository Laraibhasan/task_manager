import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API = "http://127.0.0.1:8000";

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/tasks`);
      setTasks(res.data);
      setError("");
    } catch {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;

    try {
      await axios.post(`${API}/tasks`, { title });
      setTitle("");
      fetchTasks();
    } catch {
      setError("Failed to add task");
    }
  };

  const toggleTask = async (id) => {
    await axios.patch(`${API}/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <div className="task-box">
        <h1 className="title">Task Manager</h1>

        <div className="input-row">
          <input
            type="text"
            placeholder="Enter task"
            className="task-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addTask} className="add-btn">
            Add
          </button>
        </div>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <p className={task.completed ? "completed" : ""}>
                {task.title}
              </p>

              <div className="actions">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="done-btn"
                >
                  Done
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;