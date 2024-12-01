import fs from "fs";
import { DaySolver } from "./types";

const getLinesFromFile = (qNum: string) => {
  const fname = `inputs/day${qNum}.txt`;
  return fs.readFileSync(fname, "utf8").split("\n");
};

const getModule = async (qNum: string) => {
  return await import(`./day${qNum}`);
};

const main = async () => {
  const qNum: string = process.argv[3];
  const code: DaySolver = await getModule(qNum);
  const lines = getLinesFromFile(qNum);
  console.log(code.problem1(lines));
  console.log(code.problem2(lines));
};

main();
