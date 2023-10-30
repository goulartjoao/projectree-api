const RelevantInfo = require('../models/relevantInfoModel');

module.exports = {
  async all(request, response) {
    try {
      const relevantInfos = await RelevantInfo.findAll();
      response.status(200).json(relevantInfos);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async findOne(request, response) {
    try {
      const id = request.params.id;
      const relevantInfo = await RelevantInfo.findOne({ where: { id } });

      if (!relevantInfo) {
        return response.status(400).json("relevantInfo not found");
      }

      response.status(200).json(relevantInfo);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async findRelevantInfosByProjectId(request, response) {
    try {
      const project_id = request.params.project_id;
      const relevantInfo = await RelevantInfo.findAll({
        where: { project_id },
        order: [['created_at', 'DESC']],
      });

      if (!relevantInfo || relevantInfo.length === 0) {
        return response.status(404).json("No relevantInfo found for the specified project_id");
      }

      response.status(200).json(relevantInfo);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async create(request, response) {
    try {
      await RelevantInfo.create(request.body);
      response.status(200).json("relevantInfo created successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async update(request, response) {
    try {
      const { commentary, author } = request.body;
      const id = request.params.id;

      const relevantInfo = await RelevantInfo.findOne({ where: { id } });

      if (!relevantInfo) {
        return response.status(400).json("relevantInfo not found");
      }

      relevantInfo.commentary = commentary;
      relevantInfo.author = author;

      await relevantInfo.save();
      response.status(201).json("relevantInfo updated successfully");

    } catch (error) {
      response.status(400).send(error);
    }
  },

  async delete(request, response) {
    try {
      const id = request.params.id;
      const relevantInfo = await RelevantInfo.destroy({ where: { id } });

      if (!relevantInfo) {
        return response.status(400).json("relevantInfo not found");
      }

      response.status(201).json("relevantInfo removed successfully");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
