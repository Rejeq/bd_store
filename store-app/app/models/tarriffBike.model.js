module.exports = (sequelize, Sequelize) => {
  const TariffBike = sequelize.define(
    "TariffBike",
    {
      IdTariff: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tariff",
          key: "IdTariff",
        },
      },
      IdBike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bike",
          key: "IdBike",
        },
      },
    },
    {
      tableName: "TariffBike",
      timestamps: false,
    },
  );

  return TariffBike;
};
