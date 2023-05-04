const { TransactionsUseCase } = require("../../useCases");
const { catchError } = require("../../utils");

module.exports = async (req, res) => {
  const { params, body } = req;

  try {
    const { acknowledged, modifiedCount: updatedCount } =
      await TransactionsUseCase.update(params.id, body);

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
};
