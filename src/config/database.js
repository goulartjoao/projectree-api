const Sequelize = require('sequelize');
const sequelize = new Sequelize("name.db", "user", "password", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

module.exports = sequelize;
