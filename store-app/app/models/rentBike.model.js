module.exports = (sequelize, Sequelize) => {
  const RentBike = sequelize.define(
    "RentBike",
    {
      IdRent: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Rent",
          key: "IdRent",
        },
        primaryKey: true,
      },
      IdBike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bike",
          key: "IdBike",
        },
        primaryKey: true,
      },
    },
    {
      tableName: "RentBike",
      timestamps: false,
    },
  );

  return RentBike;
};
