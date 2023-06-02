const { Given, When, Then } = require("cucumber");
const { openDoors } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That a user wanna open the elevator doors", () => {});

When("The user press the button to open the elevator doors", () => {
  this.actualAction = openDoors();
});

Then("The Elevator should open up its doors", () => {
  assert.equal(this.actualAction, "Opening doors...");
});
