const fs = require("fs");

var originalInput =
  "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,1,6,23,27,2,27,9,31,2,6,31,35,1,5,35,39,1,10,39,43,1,43,13,47,1,47,9,51,1,51,9,55,1,55,9,59,2,9,59,63,2,9,63,67,1,5,67,71,2,13,71,75,1,6,75,79,1,10,79,83,2,6,83,87,1,87,5,91,1,91,9,95,1,95,10,99,2,9,99,103,1,5,103,107,1,5,107,111,2,111,10,115,1,6,115,119,2,10,119,123,1,6,123,127,1,127,5,131,2,9,131,135,1,5,135,139,1,139,10,143,1,143,2,147,1,147,5,0,99,2,0,14,0";

function solution(replacemant1, replacement2) {
  const input = originalInput.slice();
  input[1] = replacemant1;
  input[2] = replacement2;
  let position = 0;

  while (input[position] !== 99) {
    const xIdx = input[position + 1];
    const yIdx = input[position + 2];
    const x = input[xIdx];
    const y = input[yIdx];

    const outputIndex = input[position + 3];
    const output = input[position] === 1 ? x + y : x * y;

    if (!outputIndex) {
      console.log({ x, y, action: input[position] });
    }

    input[outputIndex] = output;
    position += 4;
  }

  console.log("input[0] - ", input[0]);
  return input[0];
}

function solution2(expected) {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const result = solution(noun, verb);

      if (result === expected) {
        return 100 * noun + verb;
      }
    }
  }

  return "unable to find expected value please try increasing counter";
}

fs.readFile("../input.txt", (err, data) => {
  if (err) throw console.log("err - ", err);
  //   input = data
  //     .toString()
  //     .split(",")
  //     .map(Number);

  //   console.log(solution(12, 2));
  console.log(solution2(19690720));
});
