export const day8Task1 = (lines: string[]): number => {
  const matrix = parseMatrix(lines);
  let visibleTrees = 0;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (isTreeVisible(matrix, x, y)) visibleTrees++;
    }
  }
  return visibleTrees;
};

export const day8Task2 = (lines: string[]): number => {
  const matrix = parseMatrix(lines);
  let hightsScenicScore = 0;
  for (let x = 1; x < matrix.length - 1; x++) {
    for (let y = 1; y < matrix[x].length - 1; y++) {
      const scenicScore = calculateScenicScore(matrix, x, y);
      if (scenicScore > hightsScenicScore) hightsScenicScore = scenicScore;
    }
  }
  return hightsScenicScore;
};

const parseMatrix = (lines: string[]): number[][] => {
  const matrix: number[][] = [];
  lines.forEach((line) => {
    const parsedLine = parseLine(line);
    if (parsedLine) matrix.push(parsedLine);
  });
  return matrix;
};

const parseLine = (line: string): number[] => {
  if (line.length <= 0) return undefined;
  const result: number[] = [];
  const chars = line.split('');
  chars.forEach((c) => result.push(Number.parseInt(c)));
  return result;
};

const isTreeVisible = (matrix: number[][], x: number, y: number): boolean => {
  if (x < 0 || y < 0 || x > matrix.length || y > matrix[x].length) return false;
  if (
    x === 0 ||
    y === 0 ||
    x === matrix.length - 1 ||
    y === matrix[x].length - 1
  )
    return true;
  const positionHeight = matrix[x][y];
  let visible = true;
  for (let i = x + 1; i < matrix.length; i++) {
    if (matrix[i][y] >= positionHeight) {
      visible = false;
      break;
    }
  }
  if (visible) return true;

  visible = true;
  for (let i = x - 1; i >= 0; i--) {
    if (matrix[i][y] >= positionHeight) {
      visible = false;
      break;
    }
  }
  if (visible) return true;

  visible = true;
  for (let i = y + 1; i < matrix[x].length; i++) {
    if (matrix[x][i] >= positionHeight) {
      visible = false;
      break;
    }
  }
  if (visible) return true;
  visible = true;
  for (let i = y - 1; i >= 0; i--) {
    if (matrix[x][i] >= positionHeight) {
      visible = false;
      break;
    }
  }
  return visible;
};

const calculateScenicScore = (
  matrix: number[][],
  x: number,
  y: number
): number => {
  if (x <= 0 || y <= 0 || x >= matrix.length || y >= matrix[x].length) return 0;
  const positionHeight = matrix[x][y];
  let right = (matrix.length-1) - x;
  for (let i = x + 1; i < matrix.length; i++) {
    if (matrix[i][y] >= positionHeight) {
      right = i - x;
      break;
    }
  }

  let left = x;
  for (let i = x - 1; i >= 0; i--) {
    if (matrix[i][y] >= positionHeight) {
      left = x - i;
      break;
    }
  }

  let down = (matrix[x].length-1) - y;
  for (let i = y + 1; i < matrix[x].length; i++) {
    if (matrix[x][i] >= positionHeight) {
      down = i - y;
      break;
    }
  }
  let up = y;
  for (let i = y - 1; i >= 0; i--) {
    if (matrix[x][i] >= positionHeight) {
      up = y - i;
      break;
    }
  }
  // console.log(
  //   `position ${x} ${y} (${matrix[x][y]}) had left ${left}, right ${right}, up ${up}, down ${down} view`
  // );
  return left * right * up * down;
};
