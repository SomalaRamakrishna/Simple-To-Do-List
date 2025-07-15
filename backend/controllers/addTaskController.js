const mongoose = require("mongoose");
const Task = require("../models/TaskModel");



const addTaskController = async (req, res) => {
  //console.log("Received data:", req.body);
   const { title, description, dueDate, priority } = req.body;
  
  if (!title || !description || !dueDate || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newTask = new Task({
      title,
      description,
      dueDate,
      priority,
      isCompleted: false,
      user:req.user.id
    });

    await newTask.save();
    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Internal server error" });
  } 
};
module.exports = {addTaskController}