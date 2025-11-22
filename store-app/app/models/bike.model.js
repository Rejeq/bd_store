module.exports = (sequelize, Sequelize) => {
  const Bike = sequelize.define(
    "Bike",
    {
      IdBike: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      SerialNumber: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      Model: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Category: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Condition: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      IsRepairing: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      PurchaseDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "Bike",
      timestamps: false,
    },
  );

  return Bike;
};
