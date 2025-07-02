import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks?project_id=${projectId}`)
      .then(res => setTasks(res.data))
      .catch(err => console.error('Fetch error:', err));
  }, [projectId]);

  if (tasks.length === 0) return <p className="text-gray-500">No tasks available.</p>;

  return (
    <ul className="divide-y">
      {tasks.map(task => (
        <li key={task._id} className="py-2">
          <h3 className="font-semibold">{task.name}</h3>
          <p>Status: {task.status}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
