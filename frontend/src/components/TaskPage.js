import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskPage = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get(`http://localhost:5000/api/tasks/project/${projectId}`)
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  return (
    <div className="p-4">
      <TaskForm projectId={projectId} onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
