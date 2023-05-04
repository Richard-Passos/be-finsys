const { TransactionsUseCase } = require("../../useCases");
const { catchError } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const createdTransaction = await TransactionsUseCase.create(req.body);

    res.status(201).json({
      status: "Success",
      createdTransaction,
    });
  } catch (err) {
    catchError(err, res);
  }
};
