const { TransactionsRepository } = require("../../repositores");
const { verifyTypes, normalizeStr } = require("../../utils");

class Update {
  static async execute(id, reqBody) {
    const { amount = 0 } = reqBody;

    verifyTypes([], [amount], "Amount must be a number");

    const test = await TransactionsRepository.updateOne(id, reqBody);
    console.log("file: Update.js:11  Update  execute  test", test)

    return test
  }
}

module.exports = Update;
