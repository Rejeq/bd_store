module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define(
    "client",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      passport: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      registrationDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "client",
      timestamps: false,
    },
  );

  return Client;
};
