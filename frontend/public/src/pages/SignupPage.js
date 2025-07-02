/* SignupPage.js */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'Engineer' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/signup', {
  name: 'Admin',
  email: 'admin@example.com',
  password: 'admin',
  role: 'admin'
});

    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      alert('Signup successful!');
      navigate('/');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="role" onChange={handleChange} className="w-full p-2 border rounded">
          <option value="Admin">Admin</option>
          <option value="ProjectManager">Project Manager</option>
          <option value="Engineer">Engineer</option>
          <option value="QA">QA</option>
          <input
  type="text"
  name="role"
  placeholder="Role (admin/manager/leader/member/client)"
  onChange={handleChange}
  
/>

        </select>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;