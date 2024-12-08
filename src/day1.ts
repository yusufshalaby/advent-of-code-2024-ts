import { SolveFunc } from "./types";

const parse = (input: string): [number[], number[]] => {
  const lines = input.split("\n").filter((line) => line.length > 0);
  var left: number[] = [];
  var right: number[] = [];
  for (var line of lines) {
    const nums = line.split("   ").map((num) => {
      return parseInt(num);
    });
    left.push(nums[0]);
    right.push(nums[1]);
  }
  return [left, right];
};

export const problem1: SolveFunc = (input: string) => {
  let [left, right] = parse(input);
  left.sort();
  right.sort();

  return left.reduce(
    (accumulator, currentValue, currentIndex) =>
      accumulator + Math.abs(currentValue - right[currentIndex]),
    0,
  );
};

export const problem2: SolveFunc = (input: string) => {
  let [left, right] = parse(input);
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
