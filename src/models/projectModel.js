const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    area_extension: {
      type: DataTypes.DECIMAL,
      description: 'Area extension in square meters',
    },
  },
  {
    sequelize,
    modelName: 'project',
    timestamps: false,
  }
);

module.exports = Project;
