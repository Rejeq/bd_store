module.exports = (sequelize, Sequelize) => {
  const Rent = sequelize.define(
    "Rent",
    {
      IdRent: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      IdClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Client",
          key: "IdClient",
        },
      },
      IdTariff: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tariff",
          key: "IdTariff",
        },
      },
      RentStart: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      RentEnd: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      TotalPrice: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: true,
      },
    },
    {
      tableName: "Rent",
      timestamps: false,
    },
  );

  return Rent;
};
