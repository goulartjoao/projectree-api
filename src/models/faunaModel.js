const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

class Fauna extends Model {}

Fauna.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    specie: {
      type: DataTypes.TEXT,
    },
    diet: {
      type: DataTypes.TEXT,
    },
    locomotion: {
      type: DataTypes.TEXT,
    },
    habitat: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'fauna',
    timestamps: false,
  }
);

module.exports = Fauna;
