/* ProjectForm.js */
import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [project, setProject] = useState({ name: '', description: '', start_date: '', end_date: '' });

  const handleChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', project);
      alert('Project created!');
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input name="name" onChange={handleChange} placeholder="Project Name" className="w-full p-2 border rounded" />
      <textarea name="description" onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
      <input type="date" name="start_date" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="date" name="end_date" onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
    </form>
  );
};

export default ProjectForm;