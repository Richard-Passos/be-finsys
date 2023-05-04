const { TransactionsUseCase } = require("../../useCases");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await TransactionsUseCase.getOne(id);

    res.status(200).json({
      status: "Success",
      result,
    });
  } catch (err) {
    res.status(500).json({ status: "Fail", message: err.message });
  }
};
