/* ProjectPage.js */
import React from 'react';
import ProjectForm from '../components/ProjectForm';
import Dashboard from '../components/Dashboard';

const ProjectPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ProjectForm />
      <Dashboard />
    </div>
  );
};

export default ProjectPage;