const { TransactionsRepository } = require("../../repositores");

module.exports = (field, value) =>
  field === "id" /* Field must be id or type */
    ? TransactionsRepository.deleteOne(value)
    : TransactionsRepository.deleteMany(value);
