export interface SolveFunc {
  (lines: string[]): string | number;
}

export interface DaySolver {
  problem1: SolveFunc;
  problem2: SolveFunc;
}
