const Article = require('../models/articleModel');

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
