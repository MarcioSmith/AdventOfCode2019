const fs = require("fs");

function solution(input) {
  var total = 0;
  input.map(number => {
    var fuelConsumption = Math.floor(number / 3) - 2;

    total += fuelConsumption;
  });

  return total;
}

fs.readFile("../input.txt", (err, data) => {
  if (err) throw console.log("err - ", err);
  input = data.toString().split("\n");
  console.log(solution(input));
});
