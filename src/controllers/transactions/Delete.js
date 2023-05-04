const { TransactionsUseCase } = require("../../useCases");

module.exports = async (req, res) => {
  const { field, value } = req.params;

  try {
    const { acknowledged, deletedCount } = await TransactionsUseCase.delete(
      field,
      value
    );

    res.status(200).json({
      status: "Success",
      info: {
        acknowledged,
        deletedCount,
        TransactionsUseCase,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "Fail", message: err.message });
  }
};
