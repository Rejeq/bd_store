module.exports = (sequelize, Sequelize) => {
  const Rent = sequelize.define(
    "rent",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "client",
          key: "id",
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        },
      },
      idTariff: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tariff",
          key: "id",
          onDelete: "SET NULL",
          onUpdate: "CASCADE",
        },
      },
      rentStart: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rentEnd: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: true,
      },
    },
    {
      tableName: "rent",
      timestamps: false,
    },
  );

  return Rent;
};
