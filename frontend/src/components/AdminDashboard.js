import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="space-y-3">
        <li className="bg-blue-600 p-4 rounded shadow">Manage Users</li>
        <li className="bg-green-600 p-4 rounded shadow">Manage All Projects</li>
        <li className="bg-yellow-500 p-4 rounded shadow">System Reports</li>
        <li className="bg-red-500 p-4 rounded shadow">Configure Roles</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
