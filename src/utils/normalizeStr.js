const normalizeStr = (str) =>
  str
    .toLowerCase()
    .replace(/(^\s*)/, "")
    .replace(/(^\w)/, (w) => w.toUpperCase());

module.exports = normalizeStr;
