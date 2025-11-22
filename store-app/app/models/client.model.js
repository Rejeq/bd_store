module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define(
    "Client",
    {
      IdClient: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      FullName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      Passport: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      Phone: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      RegistrationDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Client",
      timestamps: false,
    },
  );

  return Client;
};
