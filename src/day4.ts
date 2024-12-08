import { SolveFunc } from "./types";

const parse = (input: string): string[] => {
  return input.split("\n").filter((line) => line.length > 0);
};

export const problem1: SolveFunc = (input: string) => {
  const lines = parse(input);
  const WORD = "XMAS";
  let ans = 0;
  for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < lines[i].length; j++) {
      if (lines[i][j] == "X") {
        let [up, down, left, right, upleft, upright, downleft, downright] = [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ];
        for (var k = 0; k <= WORD.length - 1; k++) {
          up = up.concat(lines[i - k]?.[j]);
          down = down.concat(lines[i + k]?.[j]);
          left = left.concat(lines[i]?.[j - k]);
          right = right.concat(lines[i]?.[j + k]);
          upleft = upleft.concat(lines[i - k]?.[j - k]);
          upright = upright.concat(lines[i - k]?.[j + k]);
          downleft = downleft.concat(lines[i + k]?.[j - k]);
          downright = downright.concat(lines[i + k]?.[j + k]);
        }
        if (up == WORD) ans++;
        if (down == WORD) ans++;
        if (left == WORD) ans++;
        if (right == WORD) ans++;
        if (upleft == WORD) ans++;
        if (upright == WORD) ans++;
        if (downleft == WORD) ans++;
        if (downright == WORD) ans++;
      }
    }
  }
  return ans;
};

export const problem2: SolveFunc = (input: string) => {
  const lines = parse(input);
  let ans = 0;
  for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < lines[i].length; j++) {
      if (lines[i][j] == "A") {
        if (
          (lines[i - 1]?.[j - 1] == "M" && lines[i + 1]?.[j + 1] == "S" &&
            lines[i - 1]?.[j + 1] == "M" && lines[i + 1]?.[j - 1] == "S") ||
          (lines[i - 1]?.[j - 1] == "S" && lines[i + 1]?.[j + 1] == "M" &&
            lines[i - 1]?.[j + 1] == "M" && lines[i + 1]?.[j - 1] == "S") ||
          (lines[i - 1]?.[j - 1] == "M" && lines[i + 1]?.[j + 1] == "S" &&
            lines[i - 1]?.[j + 1] == "S" && lines[i + 1]?.[j - 1] == "M") ||
          (lines[i - 1]?.[j - 1] == "S" && lines[i + 1]?.[j + 1] == "M" &&
            lines[i - 1]?.[j + 1] == "S" && lines[i + 1]?.[j - 1] == "M")
        ) {
          ans += 1;
        }
      }
    }
  }
  return ans;
};
