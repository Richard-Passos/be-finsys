const { moveBtwFloors } = require("../elevator-functions");

describe.each([
  [
    1,
    5,
    "Closing doors... Going from floor 1, to floor 5, passing by floor(s) 2, 3 and 4. Opening doors...",
  ],
  [
    5,
    1,
    "Closing doors... Going from floor 5, to floor 1, passing by floor(s) 4, 3 and 2. Opening doors...",
  ],
  [
    -1,
    0,
    "Closing doors... Going from floor -1, to floor 0, passing by none floors. Opening doors...",
  ],
  [0, 0, "Already on the destiny floor."],
])(
  "Elevator passing by floors and stoping at the requested floor",
  (currentFloor, destinyFloor, expected) => {
    test("Elevator route and actions", () => {
      expect(moveBtwFloors(currentFloor, destinyFloor)).toBe(expected);
    });
  }
);
