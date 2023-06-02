const { Given, When, Then } = require("cucumber");
const { emergencyBreak } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That the elevator is malfunctioning", () => {});

When("The system realizes the malfunction", () => {
  this.actualActions = emergencyBreak();
});

Then("The Elevator should activate its emergency actions", () => {
  assert.equal(
    this.actualActions,
    "Activating emergency breaks... Calling autorities..."
  );
});
