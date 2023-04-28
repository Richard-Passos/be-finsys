require("dotenv").config();

const express = require("express");
const { transactionsRoutes } = require("./routes");

const app = express();

app.use(express.json());
app.use(transactionsRoutes);

module.exports = app;
