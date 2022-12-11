export const day2Task1 = (input: string[]): number => {
  let overall = 0;
  input.map((line) => (overall += calculateGame(line)));
  return overall;
};

export const day2Task2 = (input: string[]): number => {
  let overall = 0;
  input.map((line) => (overall += cheatGame(line)));
  return overall;
};

const cheatGame = (line: string): number => {
  if (line.length !== 3) return 0;
  const splitLine = line
    .replace('A', 'R')
    .replace('B', 'P')
    .replace('C', 'S')
    .split(' ');

  let myChoice = '';

  switch (splitLine[1]) {
    case 'X':
      switch (splitLine[0]) {
        case 'R':
          myChoice = 'S';
          break;
        case 'P':
          myChoice = 'R';
          break;
        case 'S':
          myChoice = 'P';
          break;
      }
      break;
    case 'Y':
      myChoice = splitLine[0];
      break;
    case 'Z':
      switch (splitLine[0]) {
        case 'R':
          myChoice = 'P';
          break;
        case 'P':
          myChoice = 'S';
          break;
        case 'S':
          myChoice = 'R';
          break;
      }
      break;
  }
  return calculateGame(`${splitLine[0]} ${myChoice}`);
};

const calculateGame = (line: string): number => {
  if (line.length !== 3) return 0;
  const cleanedLine = line
    .replace('A', 'R')
    .replace('B', 'P')
    .replace('C', 'S')
    .replace('X', 'R')
    .replace('Y', 'P')
    .replace('Z', 'S')
    .split(' ');
  let result = resultOfGame(cleanedLine[0], cleanedLine[1]);
  switch (cleanedLine[1]) {
    case 'R':
      result += 1;
      break;
    case 'P':
      result += 2;
      break;
    case 'S':
      result += 3;
      break;
  }
  return result;
};

const resultOfGame = (opponents: string, mine: string): number => {
  if (opponents === mine) return 3;
  if (
    (opponents === 'R' && mine === 'P') ||
    (opponents === 'P' && mine === 'S') ||
    (opponents === 'S' && mine === 'R')
  )
    return 6;
  return 0;
};
