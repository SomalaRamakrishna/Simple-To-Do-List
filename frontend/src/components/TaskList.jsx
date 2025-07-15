import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TaskItem from "./TaskItem";
const TaskList = ({ tasks, fetchTasks }) => {
  const navigate = useNavigate();

  return (
      <div>
      {tasks.length === 0 ? (
        <p style={{ color: "#ccc", textAlign: "center" }}>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
        ))
      )}
    </div>
  );
}
export default TaskList;