const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: String,
  start_date: { 
    type: Date, 
    required: true 
  },
  end_date: { 
    type: Date, 
    required: true 
  },
  created_by: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
