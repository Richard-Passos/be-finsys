const { closeDoors, openDoors } = require("../elevator-functions");

describe("Elevator closing its doors", () => {
  test("Elevator is moving", () => {
    expect(closeDoors()).toBe("Closing doors...");
  });

  test("Close doors button is pressed", () => {
    expect(closeDoors()).toBe("Closing doors...");
  });
});

describe("Elevator opening its doors", () => {
  test("Elevator arrived in a floor", () => {
    expect(openDoors()).toBe("Opening doors...");
  });

  test("Open doors button is pressed", () => {
    expect(openDoors()).toBe("Opening doors...");
  });

  test("Something between elevator doors", () => {
    expect(openDoors()).toBe("Opening doors...");
  });
});
