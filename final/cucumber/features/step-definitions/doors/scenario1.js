const { Given, When, Then } = require("cucumber");
const { closeDoors } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That the elevator is being requested at a floor", () => {});

When("The elevator is ready to go", () => {
  this.actualAction = closeDoors();
});

Then("The Elevator should close its doors", () => {});

Then("Answer the request", () => {
  assert.equal(this.actualAction, "Closing doors...");
});
