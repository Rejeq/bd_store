module.exports = (sequelize, Sequelize) => {
  const Bike = sequelize.define(
    "bike",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      serialNumber: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      condition: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      isRepairing: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      purchaseDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "bike",
      timestamps: false,
    },
  );

  return Bike;
};
