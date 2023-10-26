const Project = require('../models/projectModel');

module.exports = {
  async all(request, response) {
    try {
      const projects = await Project.findAll();
      response.status(200).json(projects);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
