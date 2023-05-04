const getMany = require("./getMany");
const getOne = require("./getOne");
const create = require("./create");
const update = require("./update");
const remove = require("./delete");

class Transactions {
  static getMany = (req, res) => getMany(req, res);

  static getOne = (req, res) => getOne(req, res);

  static create = (req, res) => create(req, res);

  static update = (req, res) => update(req, res);

  static delete = (req, res) => remove(req, res);
}

module.exports = Transactions;
