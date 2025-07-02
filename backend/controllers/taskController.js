const Task = require('../models/taskModel');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tasks for a project
exports.getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await Task.find({ project_id: projectId }).populate('assigned_to', 'name');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update task progress, actual dates, status, and delay
exports.updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const {
      actual_start,
      actual_end,
      status,
      proof_url
    } = req.body;

    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Calculate delay in days
    let delay = 0;
    if (actual_end && task.planned_end) {
      const planned = new Date(task.planned_end);
      const actual = new Date(actual_end);
      delay = Math.max(0, Math.ceil((actual - planned) / (1000 * 60 * 60 * 24)));
    }

    task.actual_start = actual_start || task.actual_start;
    task.actual_end = actual_end || task.actual_end;
    task.status = status || task.status;
    task.proof_url = proof_url || task.proof_url;
    task.delay_days = delay;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
