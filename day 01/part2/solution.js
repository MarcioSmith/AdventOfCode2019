const fs = require("fs");

function solution(input) {
  // global tracker for value
  var total = 0;
  input.map(number => {
    total = determineFuel(number, total);
  });
  return total;
}

function determineFuel(number, total) {
  var fuelConsumption = Math.max(0, Math.floor(number / 3) - 2);
  if (fuelConsumption <= 3) {
    return total + fuelConsumption;
  } else {
    return determineFuel(fuelConsumption, total + fuelConsumption);
  }
}

fs.readFile("../input.txt", (err, data) => {
  if (err) throw console.log("err - ", err);
  input = data.toString().split("\n");
  console.log(solution(input));
});
