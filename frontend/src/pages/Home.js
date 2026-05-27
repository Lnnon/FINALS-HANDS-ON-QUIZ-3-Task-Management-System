import React from 'react';
import TaskList from '../components/TaskList';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Task Management System</h1>
            <TaskList />
        </div>
    );
};

export default Home;