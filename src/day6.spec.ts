import { problem1, problem2 } from "./day6";

export const testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

describe("On Day 6", () => {
  it(`part1`, () => {
    expect(problem1(testInput)).toBe(41);
  });

  it(`part2`, () => {
    expect(problem2(testInput)).toBe(6);
  });
});
