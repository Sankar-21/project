const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.post('/', async (req, res) => {
  const { name, project_id, planned_start, planned_end, assigned_to, status } = req.body;

  const task = new Task({ name, project_id, planned_start, planned_end, assigned_to, status });
  await task.save();
  res.json(task);
});


// ✅ GET tasks by project ID
router.get('/', async (req, res) => {
  const { project_id } = req.query;
  console.log(p)
  try {
    const tasks = await Task.find({ project_id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
});

module.exports = router;
