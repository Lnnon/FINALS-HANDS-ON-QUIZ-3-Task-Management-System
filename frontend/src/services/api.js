const API_URL = 'http://localhost:8000/api/tasks/';

export const getTasks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
};

export const addTask = async (title) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, is_completed: false }),
  });
  if (!res.ok) throw new Error('Failed to add task');
  return res.json();
};

// Example PATCH and DELETE for extra features:
export const updateTask = async (id, data) => {
  const res = await fetch(`${API_URL}${id}/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update task');
  return res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}${id}/`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete task');
};