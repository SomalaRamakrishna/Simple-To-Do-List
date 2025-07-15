const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
        title: { type: String, required: true },
        description: { type: String },
        dueDate: { type: Date },
        priority: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
            default: 'Medium'
        },
        isCompleted: { type: Boolean, default: false },
        user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Client",
                required: true, // Ensure every task belongs to a user
            },
        }, {
        timestamps: true // adds createdAt and updatedAt automatically
        });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
