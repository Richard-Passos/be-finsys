const { transactionsInMemory } = require("../../infra/database");

class Transactions {
  static length() {
    return transactionsInMemory.length;
  }

  static findOne(value) {
    return transactionsInMemory.find(({ _id }) => _id === value) ?? null;
  }

  static _findOneIndex(value) {
    return transactionsInMemory.findIndex(({ _id }) => _id === value);
  }

  static findMany(page, resPerPage) {
    return transactionsInMemory.slice(
      (page - 1) * resPerPage,
      resPerPage * page
    );
  }

  static _findManyByType(value) {
    return transactionsInMemory.filter(({ type }) => type === value);
  }

  static createOne(transaction) {
    const createdAt = new Date();
    const updatedAt = new Date();

    transaction = {
      ...transaction,
      createdAt,
      updatedAt,
    };

    transactionsInMemory.push(transaction);

    return transaction;
  }

  static updateOne(_id, fields) {
    const acknowledged = true;
    let modifiedCount = 0;

    const transaction = this.findOne(_id);
    if (!transaction) return { acknowledged, modifiedCount };

    const updatedTransaction = {
      ...transaction,
      ...fields,
      updatedAt: new Date(),
    };

    const index = this._findOneIndex(_id);

    modifiedCount = transactionsInMemory.splice(
      index,
      1,
      updatedTransaction
    ).length;

    return { acknowledged, modifiedCount };
  }

  static deleteOne(_id) {
    const acknowledged = true;
    let deletedCount = 0;

    const index = this._findOneIndex(_id);
    if (index === -1) return { acknowledged, deletedCount };

    deletedCount = transactionsInMemory.splice(index, 1).length;

    return { acknowledged, deletedCount };
  }

  static deleteMany(type) {
    const acknowledged = true;
    let deletedCount = 0;

    const transactionsToDelete = this._findManyByType(type);
    console.log(
      "file: InMemory.js:83  Transactions  deleteMany  transactionsToDelete",
      transactionsToDelete
    );

    transactionsToDelete.forEach(({ _id }) => {
      const indexOnDataBase = this._findOneIndex(_id);

      transactionsInMemory.splice(indexOnDataBase, 1);
      deletedCount++;
    });

    return { acknowledged, deletedCount };
  }
}

module.exports = Transactions;
