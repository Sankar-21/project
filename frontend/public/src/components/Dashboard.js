import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map(project => (
        <div key={project._id} className="border p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p>{project.description}</p>
          <p>Start: {new Date(project.start_date).toLocaleDateString()}</p>
          <p>End: {new Date(project.end_date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;