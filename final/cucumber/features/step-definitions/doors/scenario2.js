const { Given, When, Then } = require("cucumber");
const { closeDoors } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That a user wanna close the elevator doors", () => {});

When("The user press the button to close the elevator doors", () => {
  this.actualAction = closeDoors();
});

Then("The Elevator should shut its doors", () => {
  assert.equal(this.actualAction, "Closing doors...");
});
