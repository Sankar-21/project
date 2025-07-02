import React from 'react';
import AdminDashboard from './AdminDashboard';
import ManagerDashboard from './ManagerDashboard';
import LeaderDashboard from './LeaderDashboard';
import MemberDashboard from './MemberDashboard';
import ClientDashboard from './ClientDashboard';

const Dashboard = () => {
  // Example role – in real code, fetch this from user auth or context
  const userRole = localStorage.getItem("role"); // e.g., 'admin', 'manager', etc.

  switch (userRole) {
    case 'admin':
      return <AdminDashboard />;
    case 'manager':
      return <ManagerDashboard />;
    case 'leader':
      return <LeaderDashboard />;
    case 'member':
      return <MemberDashboard />;
    case 'client':
      return <ClientDashboard />;
    default:
      return <div className="text-white p-8">Access Denied or Role Not Found</div>;
  }
};

export default Dashboard;
