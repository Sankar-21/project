const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// 🔐 Remove or comment auth temporarily if needed
// const { verifyToken } = require('../utils/authMiddleware');

// ✅ Route to get all projects
// router.get('/', verifyToken, projectController.getProjects);  ❌ if auth not working
router.get('/', projectController.getProjects); // ✅ testing only

module.exports = router; // ✅ this must be here
