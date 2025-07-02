/* TaskPage.js */
import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  const mockTasks = [
    { _id: '1', name: 'Wiring', status: 'In Progress' },
    { _id: '2', name: 'Panel Setup', status: 'Pending' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <TaskForm projectId="123" />
      <TaskList tasks={mockTasks} />
    </div>
  );
};

export default TaskPage;