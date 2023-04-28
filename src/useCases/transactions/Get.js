const { TransactionsRepository } = require("../../repositores");
const { verifyTypes } = require("../../utils");

class Get {
  static async execute(page, resPerPage) {
    page = Math.max(page, 1);
    verifyTypes([], [page], "Page must be a number");

    const results = await TransactionsRepository.findMany(page, resPerPage);
    const totalTransactions = await TransactionsRepository.length();

    return { page, results, totalTransactions };
  }
}

module.exports = Get;
