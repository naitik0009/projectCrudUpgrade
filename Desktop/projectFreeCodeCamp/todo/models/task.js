const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ",must provide"],
    trim: true,
    maxlength: [200, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = taskModel;
