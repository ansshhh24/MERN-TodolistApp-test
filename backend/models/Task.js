const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: [true, "Please enter the title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter the description"],
    trim: true,
  },
  dueDate: {
    type: Date,
  },
}, {
  timestamps: true
});


const Task = mongoose.model("Task", taskSchema);
module.exports = Task;