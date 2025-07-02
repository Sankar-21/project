import React from 'react';

const ClientDashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Client Dashboard</h1>
      <ul className="space-y-3">
        <li className="bg-teal-400 p-4 rounded shadow">View Project Overview</li>
        <li className="bg-pink-400 p-4 rounded shadow">Track Milestones</li>
        <li className="bg-yellow-300 p-4 rounded shadow">Project Timeline</li>
        <li className="bg-red-400 p-4 rounded shadow">Raise Issues/Queries</li>
      </ul>
    </div>
  );
};

export default ClientDashboard;
