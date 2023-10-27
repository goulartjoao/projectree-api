const Fauna = require('../models/faunaModel');

module.exports = {
  async all(request, response) {
    try {
      const faunas = await Fauna.findAll();
      response.status(200).json(faunas);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async findOne(request, response) {
    try {
      const id = request.params.id;
      const fauna = await Fauna.findOne({ where: { id } });

      if (!fauna) {
        return response.status(400).json("fauna not found");
      }

      response.status(200).json(fauna);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async create(request, response) {
    try {
      await Fauna.create(request.body);
      response.status(200).json("fauna created successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async update(request, response) {
    try {
      const { specie, diet, locomotion, habitat } = request.body;
      const id = request.params.id;

      const fauna = await Fauna.findOne({ where: { id } });

      if (!fauna) {
        return response.status(400).json("fauna not found");
      }

      fauna.specie = specie;
      fauna.diet = diet;
      fauna.locomotion = locomotion;
      fauna.habitat = habitat;

      await fauna.save();
      response.status(201).json("fauna updated successfully");

    } catch (error) {
      response.status(400).send(error);
    }
  },

  async delete(request, response) {
    try {
      const id = request.params.id;
      const fauna = await Fauna.destroy({ where: { id } });

      if (!fauna) {
        return response.status(400).json("fauna not found");
      }

      response.status(201).json("fauna removed successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
