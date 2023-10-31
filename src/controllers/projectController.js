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

  async findOne(request, response) {
    try {
      const id = request.params.id;
      const project = await Project.findOne({ where: { id } });

      if (!project) {
        return response.status(400).json("project not found");
      }

      response.status(200).json(project);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async create(request, response) {
    try {
      await Project.create(request.body);
      response.status(200).json("project created successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async update(request, response) {
    try {
      const { name, description, area_extension, latitude, longitude } = request.body;
      const id = request.params.id;

      const project = await Project.findOne({ where: { id } });

      if (!project) {
        return response.status(400).json("project not found");
      }

      project.name = name;
      project.description = description;
      project.area_extension = area_extension;
      project.latitude = latitude;
      project.longitude = longitude;

      await project.save();
      response.status(201).json("project updated successfully");

    } catch (error) {
      response.status(400).send(error);
    }
  },

  async delete(request, response) {
    try {
      const id = request.params.id;
      const project = await Project.destroy({ where: { id } });

      if (!project) {
        return response.status(400).json("project not found");
      }

      response.status(201).json("project removed successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
