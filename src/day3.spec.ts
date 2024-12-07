import { problem1, problem2 } from "./day3";

describe("On Day 2", () => {
  it(`part1`, () => {
    const testInput = [
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    ];
    expect(problem1(testInput)).toBe(161);
  });

  it(`part2`, () => {
    const testInput = [
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
    ];
    expect(problem2(testInput)).toBe(48);
  });
});
