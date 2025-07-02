const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // 👈 new
  planned_start: Date,
  planned_end: Date,
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started'
  }
});

module.exports = mongoose.model('Task', taskSchema);
