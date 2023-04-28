const { TransactionsModel } = require("../../models");
const { contactMongoDB } = require("../../utils");

class Transactions {
  static length() {
    return contactMongoDB(() => TransactionsModel.count());
  }

  static findOne(_id) {
    return contactMongoDB(() => TransactionsModel.findOne({ _id }));
  }

  static findMany(page, resPerPage) {
    return contactMongoDB(() =>
      TransactionsModel.find()
        .skip((page - 1) * resPerPage)
        .limit(resPerPage * page)
    );
  }

  static createOne(transaction) {
    return contactMongoDB(() => TransactionsModel.create(transaction));
  }

  static updateOne(_id, fields) {
    return contactMongoDB(() =>
      TransactionsModel.updateOne({ _id }, fields)
    ).then((data) => data);
  }

  static deleteOne(_id) {
    return contactMongoDB(() => TransactionsModel.deleteOne({ _id })).then(
      ({ data }) => data
    );
  }

  static deleteMany(type) {
    return contactMongoDB(() => TransactionsModel.deleteMany({ type })).then(
      (data) => data
    );
  }
}

module.exports = Transactions;
