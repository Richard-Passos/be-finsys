const { TransactionsRepository } = require("../../repositores");
const { verifyTypes } = require("../../utils");

module.exports = (id, reqBody) => {
  const { amount = 0 } = reqBody;
  verifyTypes([], [amount], "Amount must be a number");

  return TransactionsRepository.updateOne(id, reqBody);
};
