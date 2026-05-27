import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onComplete, onUndo, onDelete }) {
  return (
    <div
      className={`taskitem ${
        task.is_completed ? 'taskitem-completed' : 'taskitem-pending'
      }`}
    >
      <span
        className={`taskitem-title${task.is_completed ? ' done' : ''}`}
      >
        {task.title}
      </span>
      <div className="taskitem-actions">
        {!task.is_completed && (
          <button
            className="taskitem-btn complete"
            title="Mark as completed"
            onClick={() => onComplete && onComplete(task)}
          >
            ✔
          </button>
        )}
        {task.is_completed && (
          <button
            className="taskitem-btn undo"
            title="Undo complete"
            onClick={() => onUndo && onUndo(task)}
          >
            ↩
          </button>
        )}
        <button
          className="taskitem-btn delete"
          title="Delete"
          onClick={() => onDelete && onDelete(task)}
        >
          🗑
        </button>
      </div>
    </div>
  );
}

export default TaskItem;