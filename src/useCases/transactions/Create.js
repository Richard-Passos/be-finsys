const { TransactionsRepository } = require("../../repositores");
const { verifyTypes, normalizeStr } = require("../../utils");
const { randomUUID } = require("crypto");

module.exports = ({ title, type, category, amount }) => {
  verifyTypes([title, type, category], [amount]);

  return TransactionsRepository.createOne(
    createTransaction(title, type, category, amount)
  );
};

const createTransaction = (title, type, category, amount) => {
  return {
    _id: randomUUID(),
    amount,
    category: normalizeStr(category),
    title: normalizeStr(title),
    type: normalizeStr(type).toLowerCase(),
  };
};
