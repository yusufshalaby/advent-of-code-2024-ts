import { SolveFunc } from "./types";

type ParsedInput = {
  startPos: [number, number];
  obstructions: [number, number][];
  bounds: [number, number];
};

const parse = (s: string): ParsedInput => {
  let obstructions: [number, number][] = [];
  var startPos: [number, number] | undefined;
  const lines = s.split("\n").filter((line) => line.length > 1);
  for (var i = 0; i < lines.length; i++) {
    for (var j = 0; j < lines[i].length; j++) {
      if (lines[i][j] == "#") obstructions.push([i, j]);
      if (lines[i][j] == "^") startPos = [i, j];
    }
  }
  if (startPos === undefined) throw new Error("startpos not found");
  return {
    startPos: startPos,
    obstructions: obstructions,
    bounds: [lines.length, lines[0].length],
  };
};

enum Direction {
  left,
  right,
  up,
  down,
}

const nextPos = (
  dir: Direction,
  pos: [number, number],
): [number, number] => {
  switch (dir) {
    case Direction.up: {
      return [pos[0] - 1, pos[1]];
    }
    case Direction.down: {
      return [pos[0] + 1, pos[1]];
    }
    case Direction.left: {
      return [pos[0], pos[1] - 1];
    }
    case Direction.right: {
      return [pos[0], pos[1] + 1];
    }
  }
};

const nextDir = (
  dir: Direction,
): Direction => {
  switch (dir) {
    case Direction.up: {
      return Direction.right;
    }
    case Direction.right: {
      return Direction.down;
    }
    case Direction.down: {
      return Direction.left;
    }
    case Direction.left: {
      return Direction.up;
    }
  }
};

const tupInArray = (
  tup: [number, number],
  array: [number, number][],
): boolean => {
  return array.findIndex((ele) => ele.every((value, i) => value === tup[i])) !=
    -1;
};

const inBounds = (
  dir: Direction,
  pos: [number, number],
  bounds: [number, number],
): boolean => {
  switch (dir) {
    case Direction.up: {
      return pos[0] >= 0;
    }
    case Direction.right: {
      return pos[1] <= bounds[1] - 1;
    }
    case Direction.down: {
      return pos[0] <= bounds[0] - 1;
    }
    case Direction.left: {
      return pos[1] >= 0;
    }
  }
};

const move = (
  dir: Direction,
  pos: [number, number],
  obstructions: [number, number][],
  visited: [number, number][],
  bounds: [number, number],
): boolean => {
  let next = nextPos(dir, pos);
  if (
    !tupInArray(pos, visited)
  ) {
    visited.push([pos[0], pos[1]]);
  }
  while (
    !tupInArray(next, obstructions) && inBounds(dir, next, bounds)
  ) {
    [pos[0], pos[1]] = next;
    next = nextPos(dir, pos);
    if (
      !tupInArray(pos, visited)
    ) {
      visited.push([pos[0], pos[1]]);
    }
  }
  return inBounds(dir, next, bounds);
};

export const problem1: SolveFunc = (input: string) => {
  const parsedInput = parse(input);
  let visited: [number, number][] = [];
  let dir = Direction.up;
  console.log(parsedInput);
  while (
    move(
      dir,
      parsedInput.startPos,
      parsedInput.obstructions,
      visited,
      parsedInput.bounds,
    )
  ) {
    dir = nextDir(dir);
    //console.log(parsedInput.startPos);
    //console.log(dir);
    //console.log(visited);
  }
  return visited.length;
};

export const problem2: SolveFunc = (input: string) => {
  return 0;
};