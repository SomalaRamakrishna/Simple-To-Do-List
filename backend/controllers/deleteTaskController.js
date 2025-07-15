const mongoose = require("mongoose");
const Task = require("../models/TaskModel");
const Client = require("../models/Client");

const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  //console.log("Task ID to delete:", id);

  try {
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    // Find and delete the task
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
};


  module.exports= {deleteTaskController};