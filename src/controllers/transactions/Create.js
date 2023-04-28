const { transactionsUseCases } = require("../../useCases");
const { catchError } = require("../../utils");

class Create {
  static async execute(req, res) {
    try {
      const createdTransaction = await transactionsUseCases.Create.execute(
        req.body
      );

      res.status(201).json({
        status: "Success",
        createdTransaction,
      });
    } catch (err) {
      catchError(err, res);
    }
  }
}

module.exports = Create;
