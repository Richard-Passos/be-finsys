const { TransactionsRepository } = require("../../repositores");

module.exports = (id) => TransactionsRepository.findOne(id);
