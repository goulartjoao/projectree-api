const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
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
