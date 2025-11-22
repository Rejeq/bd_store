module.exports = (sequelize, Sequelize) => {
  const Repair = sequelize.define(
    "Repair",
    {
      IdRepair: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      IdBike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bike",
          key: "IdBike",
        },
      },
      RepairStart: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
    },
    {
      tableName: "Repair",
      timestamps: false,
    },
  );

  return Repair;
};
