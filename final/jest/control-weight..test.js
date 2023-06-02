const { controlWeight } = require("../elevator-functions");

describe.each([
  [500, 600, ""],
  [
    700,
    600,
    "Activing emergency breaks... Voice message: Max weight reached, please exit the elevator.",
  ],
  [
    600,
    600,
    "Activing emergency breaks... Voice message: Max weight reached, please exit the elevator.",
  ],
])(
  "Elevator controling its current weight",
  (currWeight, maxWeight, expected) => {
    test("Elevator response", () => {
      expect(controlWeight(currWeight, maxWeight)).toBe(expected);
    });
  }
);
