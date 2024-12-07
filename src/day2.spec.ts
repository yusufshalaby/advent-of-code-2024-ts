import { problem1, problem2 } from "./day2";

export const testInput = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9",
];

describe("On Day 2", () => {
  it(`part1`, () => {
    expect(problem1(testInput)).toBe(2);
  });

  it(`part2`, () => {
    expect(problem2(testInput)).toBe(4);
  });
});
