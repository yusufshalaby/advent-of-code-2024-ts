import { SolveFunc } from "./types";

type ParsedInput = {
  rules: string[];
  pages: string[][];
};

const parse = (input: string): ParsedInput => {
  const split = input.split("\n\n");
  const [rules, pages] = [split[0], split[1]];
  return {
    rules: rules.split("\n"),
    pages: pages.split("\n").filter((page) => page.length > 1).map((page) =>
      page.split(",")
    ),
  };
};

const check = (num1: string, num2: string, rules: string[]): boolean => {
  return rules.indexOf(`${num1}|${num2}`) > -1;
};

export const problem1: SolveFunc = (input: string) => {
  const parsedInput = parse(input);
  let ans = 0;
  for (var page of parsedInput.pages) {
    let correct_order = true;
    for (var i = 0; i < page.length - 1; i++) {
      if (!check(page[i], page[i + 1], parsedInput.rules)) {
        correct_order = false;
        break;
      }
    }
    if (correct_order) ans += parseInt(page[Math.floor(page.length / 2)]);
  }

  return ans;
};

export const problem2: SolveFunc = (input: string) => {
  let parsedInput = parse(input);
  let ans = 0;
  for (var page of parsedInput.pages) {
    let correct_order = true;
    let i = 0;
    while (i < page.length - 1) {
      if (!check(page[i], page[i + 1], parsedInput.rules)) {
        correct_order = false;
        [page[i], page[i + 1]] = [page[i + 1], page[i]];
        i = 0;
      } else i++;
    }
    if (!correct_order) ans += parseInt(page[Math.floor(page.length / 2)]);
  }

  return ans;
};
