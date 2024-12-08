import { problem1, problem2 } from "./day4";

export const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

describe("On Day 4", () => {
  it(`part1`, () => {
    expect(problem1(testInput)).toBe(18);
  });

  it(`part2`, () => {
    expect(problem2(testInput)).toBe(9);
  });
});
