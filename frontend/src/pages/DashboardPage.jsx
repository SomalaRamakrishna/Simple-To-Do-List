import React, { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './DashboardPage.css';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
   const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout ?");
    if (!confirmed) return; 
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to logout");
    }
  };

 const fetchTasks = async () => {
  setLoading(true);
  const token = localStorage.getItem("token"); // 🔐 Get token

  try {
    const response = await axios.get("http://localhost:5000/api/tasks/get", {
      headers: {
        Authorization: `Bearer ${token}`, // 🧾 Attach token in headers
      },
    });
    setTasks(response.data.tasks);
  } catch (err) {
    console.log("Error in getting tasks:", err.message);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchTasks();

   const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <>
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>My To-Do List</h2>
          {user && (
            <p className="user-greeting">
              Welcome, <strong>{user.username.toUpperCase()}</strong> ({user.email})
            </p>
          )}
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {loading ? (
        <p className="loading-text">Loading tasks...</p>
      ) : (
        <>
          <AddTaskForm fetchTasks={fetchTasks} />
          <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </>
      )}
    </div>
  </>

  );
};

export default DashboardPage;
