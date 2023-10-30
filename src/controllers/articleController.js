const Article = require('../models/articleModel');
const Project = require('../models/projectModel');
const geolib = require('geolib');

module.exports = {
  async all(request, response) {
    try {
      const articles = await Article.findAll();
      response.status(200).json(articles);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async findOne(request, response) {
    try {
      const id = request.params.id;
      const article = await Article.findOne({ where: { id } });

      if (!article) {
        return response.status(400).json('article not found');
      }

      response.status(200).json(article);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async findArticlesNearProject(request, response) {
    try {
      const projectId = request.params.id;
      const project = await Project.findOne({ where: { id: projectId } });
      const radius = parseFloat(request.params.radius);

      if (!project) {
        return response.status(400).json('Project not found');
      }

      const latitude = Number(project.latitude);
      const longitude = Number(project.longitude);

      const articles = await Article.findAll();

      const articlesNearProject = articles.filter((article) => {
        const isWithinRadius = geolib.isPointWithinRadius(
          { latitude: Number(article.latitude), longitude: Number(article.longitude) },
          { latitude, longitude },
          radius*1000 // Kilometers to meters <-> 50km to 500000m
        );

        return isWithinRadius;
      });

      response.status(200).json(articlesNearProject);
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async create(request, response) {
    try {
      await Article.create(request.body);
      response.status(200).json('article created successfully');
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async update(request, response) {
    try {
      const { specie, diet, locomotion, habitat } = request.body;
      const id = request.params.id;

      const article = await Article.findOne({ where: { id } });

      if (!article) {
        return response.status(400).json('article not found');
      }

      article.title = title;
      article.keyword = keyword;
      article.location = location;
      article.publication_name = publication_name;
      article.listed_pub_date = listed_pub_date;
      article.actual_pub_date = actual_pub_date;
      article.pages = pages;
      article.pub_comment = pub_comment;

      await article.save();
      response.status(201).json('article updated successfully');
    } catch (error) {
      response.status(400).send(error);
    }
  },

  async delete(request, response) {
    try {
      const id = request.params.id;
      const article = await Article.destroy({ where: { id } });

      if (!article) {
        return response.status(400).json('article not found');
      }

      response.status(201).json('article removed successfully');
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
