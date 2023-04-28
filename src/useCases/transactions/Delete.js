const { TransactionsRepository } = require("../../repositores");
class Delete {
  static async execute(field, value) {
    return field === "id" /* Field must be id or type */
      ? await TransactionsRepository.deleteOne(value)
      : await TransactionsRepository.deleteMany(value);
  }
}

module.exports = Delete;
