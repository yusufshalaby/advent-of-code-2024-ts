import { SolveFunc } from "./types";

export const problem1: SolveFunc = (lines: string[]) => {
  const re = /mul\(\d+\,\d+\)/g;
  let ans = 0;
  for (var line of lines) {
    let matches = line.match(re);
    if (!matches) continue;
    for (var match of matches) {
      const trimmed = match.substring(4, match.length - 1);
      ans += trimmed.split(",").map((ele) => parseInt(ele)).reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1,
      );
    }
  }
  return ans;
};

export const problem2: SolveFunc = (lines: string[]) => {
  const re = /mul\(\d+\,\d+\)|do\(\)|don't\(\)/g;
  let ans = 0;
  let active = true;
  for (var line of lines) {
    let matches = line.match(re);
    if (!matches) continue;
    console.log(matches);
    for (var match of matches) {
      switch (match) {
        case "do()": {
          active = true;
          break;
        }
        case "don't()": {
          active = false;
          break;
        }
        default: {
          if (active) {
            const trimmed = match.substring(4, match.length - 1);
            console.log(trimmed);
            ans += trimmed.split(",").map((ele) => parseInt(ele)).reduce(
              (accumulator, currentValue) => accumulator * currentValue,
              1,
            );
          }
        }
      }
    }
  }
  return ans;
};
