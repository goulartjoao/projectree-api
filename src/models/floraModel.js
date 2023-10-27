const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

class Flora extends Model {}

Flora.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    specie: {
      type: DataTypes.TEXT,
    },
    habitat: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'flora',
    timestamps: false,
  }
);

module.exports = Flora;
