const { transactionsUseCases } = require("../../useCases");

class GetOne {
  static async execute(req, res) {
    const { id } = req.params;

    try {
      const result = await transactionsUseCases.GetOne.execute(id);

      res.status(200).json({
        status: "Success",
        result,
      });
    } catch (err) {
      res.status(500).json({ status: "Fail", message: err.message });
    }
  }
}

module.exports = GetOne;
