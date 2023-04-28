const { Router } = require("express");
const { transactionsControllers } = require("../controllers");

const transactions = Router();

const { Get, Create, Update, Delete } = transactionsControllers;

transactions.get("/", (_, res) =>
  res.status(200).json({
    status: "Success",
    message: "Welcome, you're using FinSys ( Financial System )",
  })
);

transactions.get("/transactions", Get.execute);

transactions.post("/transactions", Create.execute);

transactions.put("/transactions/:id", Update.execute);

/* Field must be id or type */
transactions.delete("/transactions/:field/:value", Delete.execute);

module.exports = transactions;
