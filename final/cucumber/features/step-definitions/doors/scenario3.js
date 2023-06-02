const { Given, When, Then } = require("cucumber");
const { openDoors } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That the elevator is requested at a floor", () => {});

When("The elevator arrive at the requested floor", () => {
  this.actualAction = openDoors();
});

Then("The Elevator should open its doors", () => {
  assert.equal(this.actualAction, "Opening doors...");
});
