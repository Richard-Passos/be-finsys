module.exports = (isPressed) =>
  isPressed ==
  "true" /* Using "true" because cucumber doesn't have boolean type */
    ? "Calling security and fire department... Voice message: You can calm down, the security has been called. They will arrive soon!"
    : "Nothing";
