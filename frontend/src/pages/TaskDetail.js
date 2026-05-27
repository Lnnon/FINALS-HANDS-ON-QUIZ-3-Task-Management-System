import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './TaskDetail.css';

const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await api.get(`/tasks/${id}/`);
                setTask(response.data);
            } catch (error) {
                console.error("Error fetching task:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!task) {
        return <div>Task not found.</div>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>Status: {task.is_completed ? 'Completed' : 'Pending'}</p>
        </div>
    );
};

export default TaskDetail;