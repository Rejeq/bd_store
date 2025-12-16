module.exports = (sequelize, Sequelize) => {
  const RentBike = sequelize.define(
    "rent_bike",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
          model: "rent",
          key: "id",
        },
        primaryKey: true,
      },
      idBike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bike",
          key: "id",
        },
        primaryKey: true,
      },
    },
    {
      tableName: "rent_bike",
      timestamps: false,
    },
  );

  return RentBike;
};
