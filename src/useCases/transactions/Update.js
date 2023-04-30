const { TransactionsRepository } = require("../../repositores");
const { verifyTypes } = require("../../utils");

class Update {
  static async execute(id, reqBody) {
    const { amount = 0 } = reqBody;

    verifyTypes([], [amount], "Amount must be a number");

    return await TransactionsRepository.updateOne(id, reqBody);
  }
}

module.exports = Update;
