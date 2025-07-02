const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/userModel');

dotenv.config(); // Load .env (MongoDB URI)

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const hashedPassword = await bcrypt.hash('123456', 10);

    const existingUser = await User.findOne({ email: 'admin@example.com' });
    if (existingUser) {
      console.log('✅ Admin already exists');
    } else {
      await User.create({
        name: 'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'Admin'
      });
      console.log('✅ Admin created successfully');
    }

    mongoose.disconnect();
  })
  .catch(err => console.error('❌ Error:', err));
