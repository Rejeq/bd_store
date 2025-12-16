const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  define: {
    underscored: true,
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.client = require("./client.model.js")(sequelize, Sequelize);
db.bike = require("./bike.model.js")(sequelize, Sequelize);
db.rent = require("./rent.model.js")(sequelize, Sequelize);
db.rentBike = require("./rentBike.model.js")(sequelize, Sequelize);
db.repair = require("./repair.model.js")(sequelize, Sequelize);
db.tariff = require("./tariff.model.js")(sequelize, Sequelize);
db.tariffBike = require("./tariffBike.model.js")(sequelize, Sequelize);

module.exports = db;
