module.exports = (sequelize, Sequelize) => {
  const Repair = sequelize.define(
    "repair",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      idBike: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "bike",
          key: "id",
        },
      },
      repairStart: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false,
      },
    },
    {
      tableName: "repair",
      timestamps: false,
    },
  );

  return Repair;
};
