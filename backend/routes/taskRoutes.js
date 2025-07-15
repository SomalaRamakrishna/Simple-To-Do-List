const router = require("express").Router();
//const Task = require("../models/Task");
const {addTaskController}=require("../controllers/addTaskController");
const {deleteTaskController }= require("../controllers/deleteTaskController");
const {getTasksController}=require("../controllers/getTasksController");
const verifyToken=require('../middleware.js/verifyToken');


router.post("/add",verifyToken, addTaskController);
router.get("/get",verifyToken, getTasksController);
router.delete("/delete/:id",verifyToken, deleteTaskController); 

module.exports = router;