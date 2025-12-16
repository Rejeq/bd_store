module.exports = (sequelize, Sequelize) => {
  const TariffBike = sequelize.define(
    "tariff_bike",
    {
      idTariff: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tariff",
          key: "id",
        },
      },
      idBike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bike",
          key: "id",
        },
      },
    },
    {
      tableName: "tariff_bike",
      timestamps: false,
    },
  );

  return TariffBike;
};
