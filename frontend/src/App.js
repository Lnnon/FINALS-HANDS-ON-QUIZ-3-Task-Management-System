import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app-bg">
      <div className="app-card">
        <TaskList />
      </div>
    </div>
  );
}

export default App;