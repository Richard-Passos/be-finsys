const { Given, When, Then } = require("cucumber");
const { emergencyBtn } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That the elevator is having malfunction", () => {});

When("The emegency button {word}", (isButtonPressed) => {
  this.actualInstructions = emergencyBtn(isButtonPressed);
});

Then("The Elevator should {string}", (expectedInstructions) => {
  assert.equal(this.actualInstructions, expectedInstructions);
});
