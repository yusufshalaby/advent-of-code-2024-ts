import { SolveFunc } from "./types";

const parse = (lines: string[]): [number[], number[]] => {
  var left: number[] = [];
  var right: number[] = [];
  for (var line of lines) {
    if (line == "") {
      continue;
    }
    const nums = line.split("   ").map((num) => {
      return parseInt(num);
    });
    left.push(nums[0]);
    right.push(nums[1]);
  }
  return [left, right];
};

export const problem1: SolveFunc = (lines: string[]) => {
  let [left, right] = parse(lines);
  left.sort();
  right.sort();

  return left.reduce(
    (accumulator, currentValue, currentIndex) =>
      accumulator + Math.abs(currentValue - right[currentIndex]),
    0,
  );
};

export const problem2: SolveFunc = (lines: string[]) => {
  let [left, right] = parse(lines);
  let counter = new Map<number, number>();

  for (var value of right) {
    const newCount = counter.get(value) || 0;
    counter.set(value, newCount + 1);
  }

  return left.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue * (counter.get(currentValue) || 0)),
    0,
  );
};
