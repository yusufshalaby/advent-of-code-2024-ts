import { problem1, problem2 } from "./day1";

export const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

describe("On Day 1", () => {
  it(`part1`, () => {
    expect(problem1(testInput)).toBe(11);
  });

  it(`part2`, () => {
    expect(problem2(testInput)).toBe(31);
  });
});
