const closeDoors = require("./close-doors");
const openDoors = require("./open-doors");

module.exports = (currFloor, destFloor) => {
  let route = `Going from floor ${currFloor}, to floor ${destFloor}, passing by `;

  const actions = (route) => `${closeDoors()} ${route} ${openDoors()}`;

  if (currFloor === destFloor) {
    route = "Already on the destiny floor.";
  } else {
    const passingFloors = getPassingFloors(currFloor, destFloor);

    if (passingFloors.length) {
      route += `floor(s) ${passingFloors
        .join(", ")
        .replace(/,(?= \d$)/, " and")}.`;
    } else {
      route += "none floors.";
    }

    route = actions(route);
  }

  return route;
};

const getPassingFloors = (currFloor, destFloor) => {
  const passingFloors = [];

  const direction = currFloor < destFloor ? "up" : "down";

  while (currFloor !== destFloor) {
    direction === "up" ? currFloor++ : currFloor--;

    passingFloors.push(currFloor);
  }

  return passingFloors.slice(0, -1);
};
