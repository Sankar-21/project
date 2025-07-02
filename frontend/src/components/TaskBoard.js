import React from 'react';
import TaskCard from './TaskCard';

const TaskBoard = ({ tasks }) => {
  const statuses = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="grid grid-cols-3 gap-4">
      {statuses.map(status => (
        <div key={status}>
          <h3 className="text-lg font-bold mb-2">{status}</h3>
          <div className="space-y-2">
            {tasks.filter(task => task.status === status).map(task => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
