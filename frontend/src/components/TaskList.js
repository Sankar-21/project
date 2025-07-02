import React from 'react';

const TaskList = ({ tasks }) => {
  if (!Array.isArray(tasks)) {
    return <p className="text-gray-500">No tasks available.</p>;
  }

  return (
    <ul className="divide-y">
      {tasks.map(task => (
        <li key={task._id} className="py-2">
          <h3 className="font-semibold">{task.name}</h3>
          <p>Status: {task.status}</p><p>Assigned to: {task.assigned_to || 'Unassigned'}</p>
<p>Status: {task.status}</p>

        </li>
      ))}
    </ul>
  );
};

export default TaskList;
