/* App.js */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './components/Dashboard';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/tasks/:id" element={<TaskPage />} />
      </Routes>
    </Router>
    
  );
};

export default App;