const DataBase = require("./DataBase");
const InMemory = require("./InMemory");

const Transactions =
  process.env.DRIVER_CONNECTION === "DataBase" ? DataBase : InMemory;

module.exports = Transactions;
