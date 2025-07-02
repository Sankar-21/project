// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = 'flex items-center p-3 text-white hover:bg-blue-600 rounded-lg';
  const activeStyle = 'bg-blue-700';

  return (
    <aside className="w-64 min-h-screen bg-blue-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Project Tracker</h1>
      
      <nav className="space-y-3">
        <NavLink to="/dashboard" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
          📊 <span className="ml-3">Dashboard</span>
        </NavLink>
        
        <NavLink to="/projects" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
          📁 <span className="ml-3">Projects</span>
        </NavLink>

        <NavLink to="/tasks" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
          ✅ <span className="ml-3">Tasks</span>
        </NavLink>

        <NavLink to="/reports" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
          📈 <span className="ml-3">Reports</span>
        </NavLink>

        <NavLink to="/alerts" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
          🚨 <span className="ml-3">Alerts</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
