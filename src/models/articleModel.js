const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    reference_author: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.TEXT,
    },
    keyword: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.TEXT,
    },
    latitude: {
      type: DataTypes.TEXT,
    },
    longitude: {
      type: DataTypes.TEXT,
    },
    publication_name: {
      type: DataTypes.TEXT,
    },
    listed_pub_date: {
      type: DataTypes.DATEONLY,
    },
    actual_pub_date: {
      type: DataTypes.DATEONLY,
    },
    pages: {
      type: DataTypes.TEXT,
    },
    pub_comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'article',
    timestamps: false,
  }
);

module.exports = Article;
