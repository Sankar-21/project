const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Manual user creation logic
const createInitialUsers = async () => {
  const hashedPassword = await bcrypt.hash('password123', 10);

  const newUser = new User({
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin',
    role: 'admin' // or manager, leader, member, client
  });

  await newUser.save();
  console.log('User created!');
};

// Call this once (for seeding)
createInitialUsers();
