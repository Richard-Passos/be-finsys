const { emergencyBreak, emergencyBtn } = require("../elevator-functions");

describe("Elevator activating its emergency actions", () => {
  test("Elevator is malfunctioning", () => {
    expect(emergencyBreak()).toBe(
      "Activating emergency breaks... Calling autorities..."
    );
  });
});

describe.each([
  [
    "true",
    "Calling security and fire department... Voice message: You can calm down, the security has been called. They will arrive soon!",
  ],
  ["false", "Nothing"],
])(
  "Elevator activating its emergency actions after emergency button be pressed",
  (isBtnPressed, expected) => {
    test("Is emergency button pressed", () => {
      expect(emergencyBtn(isBtnPressed)).toBe(expected);
    });
  }
);
