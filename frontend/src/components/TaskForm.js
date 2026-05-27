import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAdd }) {
  const [value, setValue] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setErr('Please enter a task.');
      return;
    }
    onAdd(value.trim());
    setValue('');
    setErr('');
  };

  return (
    <form className="taskform" onSubmit={handleSubmit}>
      <input
        className="taskform-input"
        type="text"
        placeholder="Enter a task description..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="taskform-btn" type="submit">
        ⊕ Add Task
      </button>
      {err && <div className="taskform-error">{err}</div>}
    </form>
  );
}

export default TaskForm;