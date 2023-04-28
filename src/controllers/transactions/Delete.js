const { transactionsUseCases } = require("../../useCases");

class Delete {
  static async execute(req, res) {
    const { field, value } = req.params;

    try {
      const { acknowledged, deletedCount } =
        await transactionsUseCases.Delete.execute(field, value);

      res.status(200).json({
        status: "Success",
        info: {
          acknowledged,
          deletedCount,
        },
      });
    } catch (err) {
      res.status(500).json({ status: "Fail", message: err.message });
    }
  }
}

module.exports = Delete;
