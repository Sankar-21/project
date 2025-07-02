const Task = require('../models/taskModel');
const User = require('../models/userModel');
const Project = require('../models/projectModel');

// Threshold in days after which escalation is triggered
const DELAY_THRESHOLD = 2; // You can change this

// Simulate notification sending (email/SMS/WhatsApp)
function sendNotification(user, task, project) {
  console.log(`🚨 Escalation Alert: Task "${task.name}" in project "${project.name}" is delayed by ${task.delay_days} day(s). Notify: ${user.email}`);
  // TODO: Replace with real Email/SMS/WhatsApp API
}

// Check for overdue tasks and notify responsible users
exports.runDelayEscalation = async () => {
  try {
    const delayedTasks = await Task.find({
      status: { $ne: 'Completed' },
      planned_end: { $exists: true },
      actual_end: { $exists: true },
      delay_days: { $gt: DELAY_THRESHOLD }
    }).populate('assigned_to').populate('project_id');

    for (const task of delayedTasks) {
      const user = task.assigned_to;
      const project = task.project_id;

      if (user && project) {
        sendNotification(user, task, project);
      }
    }
  } catch (err) {
    console.error('Error running escalation service:', err.message);
  }
};
