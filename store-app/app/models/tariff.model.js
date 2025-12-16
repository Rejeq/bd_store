module.exports = (sequelize, Sequelize) => {
  const Tariff = sequelize.define(
    "tariff",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      pricePerHour: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
      effectiveDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "tariff",
      timestamps: false,
    },
  );

  return Tariff;
};
