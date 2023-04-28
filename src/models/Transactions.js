const { Schema, model } = require("mongoose");

const Transactions = new Schema(
  {
    _id: String,
    amount: Number,
    category: String,
    title: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("transactions", Transactions);
