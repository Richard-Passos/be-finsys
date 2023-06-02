module.exports = (currWeight, maxWeight) =>
  currWeight >= maxWeight
    ? "Activing emergency breaks... Voice message: Max weight reached, please exit the elevator."
    : "";
