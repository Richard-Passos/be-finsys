const { Given, When, Then } = require("cucumber");
const { moveBtwFloors } = require("../../../elevator-functions");
const assert = require("assert");

Given("That a user wanna go to floor {int}", (destFloor) => {
  this.destFloor = destFloor;
});

Given("User is at floor {int}", (currFloor) => {
  this.currFloor = currFloor;
});

When("User press the button with the destiny floor number", () => {
  this.actualRouteNActions = moveBtwFloors(this.currFloor, this.destFloor);
});

Then("The Elevator should go to te destiny floor", () => {});

Then("Return it {}", (expectedRouteNActions) => {
  assert.equal(this.actualRouteNActions, expectedRouteNActions);
});
