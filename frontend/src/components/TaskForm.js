import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ projectId, onTaskAdded }) => {
  const [task, setTask] = useState({ name: '', planned_start: '', planned_end: '' });

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/tasks`, { ...task, project_id: projectId });
      alert('Task added!');
      setTask({ name: '', planned_start: '', planned_end: '' });
      if (onTaskAdded) onTaskAdded(); // Notify parent to refresh
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="assigned_to" onChange={handleChange} placeholder="User ID" className="..." />
<select name="status" value={task.status} onChange={handleChange} className="...">
  <option value="Not Started">Not Started</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
</select>

      <input
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="planned_start"
        value={task.planned_start}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="planned_end"
        value={task.planned_end}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm; // ✅ ADD THIS LINE
