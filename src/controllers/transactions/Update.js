const { transactionsUseCases } = require("../../useCases");
const { catchError } = require("../../utils");

class Update {
  static async execute(req, res) {
    const { params, body } = req;

    try {
      const { acknowledged, modifiedCount: updatedCount } =
        await transactionsUseCases.Update.execute(params.id, body);

      res.status(200).json({
        status: "Success",
        info: {
          acknowledged,
          updatedCount,
        },
      });
    } catch (err) {
      catchError(err, res);
    }
  }
}

module.exports = Update;
