const verifyTypes = (
  strings,
  numbers,
  errorMessage = "Some field isn't valid or is missing"
) => {
  if (!(areStringsValid(strings) && areNumbersValid(numbers)))
    throw new TypeError(errorMessage);
};

const areStringsValid = (strings) =>
  !strings.map((str) => Boolean(str)).includes(false);

const areNumbersValid = (numbers) =>
  !numbers.map((n) => (n !== null && n >= 0 ? true : false)).includes(false);

module.exports = verifyTypes;
