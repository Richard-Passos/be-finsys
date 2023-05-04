const { TransactionsModel } = require("../../models");
const { contactMongoDB } = require("../../utils");

class Transactions {
  static length = () => contactMongoDB(() => TransactionsModel.count());

  static findOne = (_id) =>
    contactMongoDB(() => TransactionsModel.findOne({ _id }));

  static findMany = (page, resPerPage) =>
    contactMongoDB(() =>
      TransactionsModel.find()
        .skip((page - 1) * resPerPage)
        .limit(resPerPage * page)
    );

  static createOne = (transaction) =>
    contactMongoDB(() => TransactionsModel.create(transaction));

  static updateOne = (_id, fields) =>
    contactMongoDB(() => TransactionsModel.updateOne({ _id }, fields)).then(
      (data) => data
    );

  static deleteOne = (_id) =>
    contactMongoDB(() => TransactionsModel.deleteOne({ _id })).then(
      (data) => data
    );

  static deleteMany = (type) =>
    contactMongoDB(() => TransactionsModel.deleteMany({ type })).then(
      (data) => data
    );
}

module.exports = Transactions;
