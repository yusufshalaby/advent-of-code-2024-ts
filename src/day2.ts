import { SolveFunc } from "./types";

const parse = (lines: string[]): number[][] => {
  return lines.map((line) => {
    return line.split(" ").map((num) => {
      return parseInt(num);
    });
  });
};

export const problem1: SolveFunc = (lines: string[]) => {
  const rows = parse(lines);
  let ans = 0;
  for (var i = 0; i < rows.length; i++) {
    if (validRow(rows[i])) ans++;
  }
  return ans;
};

const validRow = (row: number[]) => {
  let first_diff = row[1] - row[0];
  if (first_diff == 0 || Math.abs(first_diff) > 3) return false;
  const first_dir = first_diff / Math.abs(first_diff);
  let isValid = true;
  for (var j = 1; j < row.length - 1; j++) {
    let diff = row[j + 1] - row[j];
    if (diff == 0 || Math.abs(diff) > 3) {
      isValid = false;
      break;
    }
    const dir = diff / Math.abs(diff);
    if (dir != first_dir) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

export const problem2: SolveFunc = (lines: string[]) => {
  const rows = parse(lines);
  let ans = 0;
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      if (validRow(rows[i].filter((_, ind) => ind !== j))) {
        ans++;
        break;
      }
    }
  }
  return ans;
};
