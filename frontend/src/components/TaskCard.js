import React from 'react';

const TaskCard = ({ task }) => (
  <div className="bg-white p-3 rounded-xl shadow border-l-4 border-blue-500">
    <h4 className="font-bold">{task.name}</h4>
    <p className="text-sm text-gray-500">Planned: {task.planned_start}</p>
    <p className="text-sm text-green-600">Status: {task.status}</p>
  </div>
);

export default TaskCard;
