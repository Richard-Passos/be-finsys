const { Router } = require("express");
const { TransactionsController } = require("../controllers");

const transactions = Router();

transactions.get("/", (_, res) =>
  res.status(200).json({
    status: "Success",
    message: "Welcome, you're using FinSys ( Financial System )",
  })
);

transactions.get("/transactions", TransactionsController.getMany);

transactions.get("/transactions/:id", TransactionsController.getOne);

transactions.post("/transactions", TransactionsController.create);

transactions.put("/transactions/:id", TransactionsController.update);

transactions.delete(
  "/transactions/:field/:value" /* Field must be id or type */,
  TransactionsController.delete
);

module.exports = transactions;
