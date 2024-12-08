export interface SolveFunc {
  (input: string): string | number;
}

export interface DaySolver {
  problem1: SolveFunc;
  problem2: SolveFunc;
}
