const express = require("express");

const app = express();
app.use(express.json());

const dbSimulator = [];

app.get("/", (_, res) =>
  res.status(200).json({
    status: "Success",
    message: "Welcome, you're using FinSys ( Financial System )",
  })
);

app.get("/transactions", async (req, res) => {
  const { page = 1 } = req.query;

  if (!isNumbersValid(page))
    return res
      .status(400)
      .json({ status: "Fail", message: "Page isn't valid" });

  try {
    const transactions = /* await */ dbSimulator;

    const resPerPage = 20;

    const results = transactions.slice(
      (page - 1) * resPerPage,
      resPerPage * page
    );

    return res.status(200).json({
      page: +page,
      results,
      total_pages: Math.ceil(transactions.length / 20),
      total_results: results.length,
    });
  } catch {
    return res
      .status(500)
      .json({ status: "Fail", message: "Server isn't responding" });
  }
});

app.post("/transactions", async (req, res) => {
  const { title, type, category, amount } = req.body;

  if (!(isStringsValid(title, type, category) && isNumbersValid(amount)))
    return res
      .status(400)
      .json({ status: "Fail", message: "Some Field isn't valid" });

  try {
    const transactions = /* await */ dbSimulator;

    transactions.push(await createTransaction(title, type, category, amount));

    return res.status(201).json({
      status: "Success",
      message: "Success on create",
      result: dbSimulator /* Just for test */,
    });
  } catch {
    return res
      .status(500)
      .json({ status: "Fail", message: "Server isn't responding" });
  }
});

app.put("/transactions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const transactions = /* await */ dbSimulator;

    const transactionIndex = transactions.findIndex(
      (transaction) => transaction.id === +id
    );

    if (transactionIndex !== -1) {
      const transaction = transactions[transactionIndex];

      const {
        title = transaction.title,
        type = transaction.type,
        category = transaction.category,
        amount = transaction.amount,
      } = req.body;

      if (!(isStringsValid(title, type, category) && isNumbersValid(amount)))
        return res
          .status(400)
          .json({ status: "Fail", message: "Some Field isn't valid" });

      transactions[transactionIndex] = {
        ...transaction,
        title,
        type: type.toLowerCase(),
        category: _normalizeCategory(category),
        amount: +amount,
      };

      return res.status(200).json({
        status: "Success",
        message: "Success on update",
        result: dbSimulator /* Just for test */,
      });
    }

    return res.status(200).json({
      status: "Fail",
      message: `Transaction with id ${id} wasn't found`,
    });
  } catch {
    return res
      .status(500)
      .json({ status: "Fail", message: "Server isn't responding" });
  }
});

app.delete("/transactions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const transactions = /* await */ dbSimulator;

    const transactionIndex = transactions.findIndex(
      (transaction) => transaction.id === +id
    );

    if (transactionIndex !== -1) {
      transactions.splice(transactionIndex, 1);

      return res.status(200).json({
        status: "Success",
        message: "Success on delete",
        result: dbSimulator /* Just for test */,
      });
    }

    return res.status(200).json({
      status: "Fail",
      message: `Transaction with id ${id} wasn't found`,
    });
  } catch {
    return res.status(500).json({
      status: "Fail",
      message: "Server isn't responding",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

const isNumbersValid = (...numbers) =>
  !numbers.map((n) => (+n >= 0 ? true : false)).includes(false);

const isStringsValid = (...strings) =>
  !strings.map((str) => (+str ? false : Boolean(str))).includes(false);

const createTransaction = async (title, type, category, amount) => {
  const id = /* await */ dbSimulator.length; /* .count() */

  return {
    id,
    title,
    type: type.toLowerCase(),
    category: _normalizeCategory(category),
    amount: +amount,
    created_date: _date(),
  };
};

const _normalizeCategory = (category) =>
  category.toLowerCase()[0].toUpperCase() + category.toLowerCase().substring(1);

const _date = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};
