import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../services/api';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
      setError('');
    } catch (e) {
      setError('Could not load tasks.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (title) => {
    try {
      await addTask(title);
      fetchTasks();
    } catch {
      setError('Could not add task.');
    }
  };

  const handleComplete = async (task) => {
    try {
      await updateTask(task.id, { is_completed: true });
      fetchTasks();
    } catch {
      setError('Could not update task.');
    }
  };

  const handleUndo = async (task) => {
    try {
      await updateTask(task.id, { is_completed: false });
      fetchTasks();
    } catch {
      setError('Could not update task.');
    }
  };

  const handleDelete = async (task) => {
    try {
      await deleteTask(task.id);
      fetchTasks();
    } catch {
      setError('Could not delete task.');
    }
  };

  const pending = tasks.filter((t) => !t.is_completed);
  const completed = tasks.filter((t) => t.is_completed);

  return (
    <div className="tasklist">
      <div className="tasklist-header">
        <span className="tasklist-icon">🗂</span>
        <h1 className="tasklist-title">Task Manager</h1>
        <p className="tasklist-subtitle">
          Manage your projects and daily goals in one place.
        </p>
      </div>
      <TaskForm onAdd={handleAdd} />
      {error && <div className="tasklist-error">{error}</div>}
      <div className="tasklist-columns">
        <div>
          <div className="tasklist-section-header">
            <span className="tasklist-section-title">Pending</span>
            <span className="tasklist-badge badge-pending">{pending.length}</span>
          </div>
          <div>
            {loading ? (
              <div className="tasklist-empty">Loading...</div>
            ) : pending.length === 0 ? (
              <div className="tasklist-empty">No pending tasks. You're all caught up!</div>
            ) : (
              pending.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={handleComplete}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>
        <div>
          <div className="tasklist-section-header">
            <span className="tasklist-section-title">Completed</span>
            <span className="tasklist-badge badge-completed">{completed.length}</span>
          </div>
          <div>
            {loading ? (
              <div className="tasklist-empty">Loading...</div>
            ) : completed.length === 0 ? (
              <div className="tasklist-empty">No completed tasks yet.</div>
            ) : (
              completed.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onUndo={handleUndo}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;