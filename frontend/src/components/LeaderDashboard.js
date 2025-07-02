import React from 'react';

const LeaderDashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Team Leader Dashboard</h1>
      <ul className="space-y-3">
        <li className="bg-purple-600 p-4 rounded shadow">View Team Tasks</li>
        <li className="bg-blue-500 p-4 rounded shadow">Update Task Status</li>
        <li className="bg-orange-500 p-4 rounded shadow">Upload Task Proof</li>
        <li className="bg-green-500 p-4 rounded shadow">Notify Members</li>
      </ul>
    </div>
  );
};

export default LeaderDashboard;
