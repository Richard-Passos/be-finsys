const { transactionsUseCases } = require("../../useCases");
const { catchError } = require("../../utils");

class Get {
  static async execute(req, res) {
    const { page: queryPage = 1 } = req.query;
    const resPerPage = 20;

    try {
      const { page, results, totalTransactions } =
        await transactionsUseCases.Get.execute(queryPage, resPerPage);

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
  }
}

module.exports = Get;
