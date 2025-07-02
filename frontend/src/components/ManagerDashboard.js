import React from 'react';

const ManagerDashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Manager Dashboard</h1>
      <ul className="space-y-3">
        <li className="bg-indigo-600 p-4 rounded shadow">Create & Assign Projects</li>
        <li className="bg-teal-600 p-4 rounded shadow">Monitor Progress</li>
        <li className="bg-pink-600 p-4 rounded shadow">Team Overview</li>
        <li className="bg-yellow-600 p-4 rounded shadow">Generate Reports</li>
      </ul>
    </div>
  );
};

export default ManagerDashboard;
