const catchError = (err, res) => {
  const errorStatus = err instanceof TypeError ? 400 : 500;

  return res.status(errorStatus).json({ status: "Fail", message: err.message });
};

module.exports = catchError;
