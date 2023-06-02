const { Given, Then } = require("cucumber");
const { controlWeight } = require("../../../elevator-functions");
const assert = require("assert");

Given("That the elevator currentWieght is {int}", (currWeight) => {
  this.currWeight = currWeight;
});

Given("The elevator max weight is {int}", (maxWeight) => {
  this.maxWeight = maxWeight;
});

Then("The Elevator must {string}", (expectedResponse) => {
  this.actualResponse = controlWeight(this.currWeight, this.maxWeight);
  assert.equal(this.actualResponse, expectedResponse);
});
