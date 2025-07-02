const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
  try {
    const newProject = new Project({ ...req.body, created_by: req.user.id });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('created_by', 'name email');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
