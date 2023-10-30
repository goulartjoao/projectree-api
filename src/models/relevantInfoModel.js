const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const Project = require('./projectModel');

class RelevantInfo extends Model {}

RelevantInfo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    commentary: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATEONLY,
    },
    project_id: {
      type: DataTypes.UUID,
    },
  },
  {
    sequelize,
    modelName: 'relevant_info',
    timestamps: false,
  }
);

RelevantInfo.belongsTo(Project, { foreignKey: 'project_id' });
Project.hasMany(RelevantInfo, { foreignKey: 'project_id' });

module.exports = RelevantInfo;
