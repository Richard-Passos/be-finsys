const { TransactionsRepository } = require("../../repositores");

class GetOne {
  static async execute(id) {
    return await TransactionsRepository.findOne(id);
  }
}

module.exports = GetOne;
