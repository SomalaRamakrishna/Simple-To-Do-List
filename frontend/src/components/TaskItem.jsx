import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TaskItem.css';
import { toast } from 'react-toastify';

const TaskItem = ({ task, fetchTasks }) => {
  const navigate = useNavigate();

  const deleteTask = async () => {
      const confirmed = window.confirm("Are you sure you want to delete this task?");
      if (!confirmed) return; 
    try {
          const token = localStorage.getItem("token");

        const response = await axios.delete(
        `http://localhost:5000/api/tasks/delete/${task._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        );

      toast.success(response.data.message);
      fetchTasks();
    } catch (err) {
      console.error("Error while deleting the task:", err.response?.data?.message || err.message);
      toast.error("Failed to delete task");
    }
  };

  return (
    <div className="task-item">
      <div className="task-left">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={task.isCompleted}

          />
          <span className={`task-title ${task.isCompleted ? "completed" : ""}`}>
            {task.title}
          </span>
        </label>

        <p className="task-description">{task.description}</p>

        <div className="task-meta">
          <span className="task-date">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
          <span className="task-priority">Priority: {task.priority}</span>
        </div>
      </div>

      <button className="delete-btn" onClick={deleteTask}>❌</button>
    </div>
  );
};

export default TaskItem;
