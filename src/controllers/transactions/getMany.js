const { TransactionsUseCase } = require("../../useCases");
const { catchError } = require("../../utils");

module.exports = async (req, res) => {
  const { page: queryPage = 1 } = req.query;
  const resPerPage = 20;

  try {
    const { page, results, totalTransactions } =
      await TransactionsUseCase.getMany(queryPage, resPerPage);

    res.status(200).json({
      status: "Success",
      page,
      results,
      totalPages: Math.ceil(totalTransactions / resPerPage),
      totalResults: totalTransactions,
    });
  } catch (err) {
    catchError(err, res);
  }
};
