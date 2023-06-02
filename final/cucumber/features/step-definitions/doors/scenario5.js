const { Given, Then } = require("cucumber");
const { openDoors } = require("../../../../elevator-functions");
const assert = require("assert");

Given("That are something between elevator doors", () => {});

Then("The Elevator should keep its doors open", () => {
  this.actualAction = openDoors();
  assert.equal(this.actualAction, "Opening doors...");
});
