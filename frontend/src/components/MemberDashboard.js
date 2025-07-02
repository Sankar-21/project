import React from 'react';

const MemberDashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Team Member Dashboard</h1>
      <ul className="space-y-3">
        <li className="bg-blue-400 p-4 rounded shadow">View Assigned Tasks</li>
        <li className="bg-green-400 p-4 rounded shadow">Mark as Completed</li>
        <li className="bg-yellow-400 p-4 rounded shadow">Upload Work Proof</li>
        <li className="bg-indigo-400 p-4 rounded shadow">Task History</li>
      </ul>
    </div>
  );
};

export default MemberDashboard;
