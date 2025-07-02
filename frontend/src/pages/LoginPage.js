import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white w-1/2 p-10">
        <h1 className="text-4xl font-extrabold mb-4">WORK.com</h1>
        <p className="text-lg">Manage Projects. Track Delays. Stay on Top.</p>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.nuY6IJfmHjMFumOv8ZszQQHaDy?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Project Illustration"
          className="mt-10 w-80"
        />
      </div>

      {/* Right Login Panel */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to Your Dashboard</h2>
          <p className="text-sm text-gray-500 mb-6">Enter your email and password to continue</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-500">
            Don't have an account? <a href="/signup" className="text-blue-600 font-medium hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
