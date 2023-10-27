const Flora = require('../models/floraModel');

module.exports = {
  async all(request, response) {
    try {
      const floras = await Flora.findAll();
      response.status(200).json(floras);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async findOne(request, response) {
    try {
      const id = request.params.id;
      const flora = await Flora.findOne({ where: { id } });

      if (!flora) {
        return response.status(400).json("flora not found");
      }

      response.status(200).json(flora);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async create(request, response) {
    try {
      await Flora.create(request.body);
      response.status(200).json("flora created successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async update(request, response) {
    try {
      const { specie, habitat } = request.body;
      const id = request.params.id;

      const flora = await Flora.findOne({ where: { id } });

      if (!flora) {
        return response.status(400).json("flora not found");
      }

      flora.specie = specie;
      flora.habitat = habitat;

      await flora.save();
      response.status(201).json("flora updated successfully");

    } catch (error) {
      response.status(400).send(error);
    }
  },

  async delete(request, response) {
    try {
      const id = request.params.id;
      const flora = await Flora.destroy({ where: { id } });

      if (!flora) {
        return response.status(400).json("flora not found");
      }

      response.status(201).json("flora removed successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
