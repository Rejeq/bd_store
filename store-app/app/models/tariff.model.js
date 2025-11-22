module.exports = (sequelize, Sequelize) => {
  const Tariff = sequelize.define(
    "Tariff",
    {
      IdTariff: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      Category: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      PricePerHour: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
      EffectiveDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Tariff",
      timestamps: false,
    },
  );

  return Tariff;
};
