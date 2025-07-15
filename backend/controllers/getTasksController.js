const mongoose = require("mongoose");
const Task = require("../models/TaskModel");
const Client = require("../models/Client");

const getTasksController = async (req, res) => {
   const userId = req.user.id; // ✅ Comes from JWT middleware
  try {
    const tasks = await Task.find({user:userId});

    const now = new Date();

    // Update task completion based on due date
    const updatedTasks = await Promise.all(
      tasks.map(async (task) => {
        const isNowCompleted = task.dueDate && new Date(task.dueDate) < now;

        // Only update if the completion status is different
        if (task.isCompleted !== isNowCompleted) {
          task.isCompleted = isNowCompleted;
          await task.save(); // Save only if it changed
        }

        return task;
      })
    );

    res.status(200).json({
      message: "Tasks checked and updated based on due date",
      tasks: updatedTasks,
    });
  } catch (error) {
    console.error("Error updating tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getTasksController };
