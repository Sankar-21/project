const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  project_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project',
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  planned_start: Date,
  planned_end: Date,
  actual_start: Date,
  actual_end: Date,
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed'], 
    default: 'Pending' 
  },
  assigned_to: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  delay_days: {
    type: Number,
    default: 0
  },
  proof_url: String
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
