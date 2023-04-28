const { MongoDBDataBase } = require("../infra/database");

const contactMongoDB = async (callbackFunc) => {
  const USER = process.env.APP_USER;
  const PASSWORD = process.env.APP_PASSWORD;

  try {
    await MongoDBDataBase.startConnection(USER, PASSWORD);

    return await callbackFunc();
  } finally {
    await MongoDBDataBase.closeConnection();
  }
};

module.exports = contactMongoDB;
