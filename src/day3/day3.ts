export const day3Task1 = (input: string[]): number => {
  let overall = 0;
  input.map((line) => (overall += findPriorityOfDoubledItem(line)));
  return overall;
};

export const day3Task2 = (input: string[]): number => {
  let overall = 0;
  for (let i = 0; i < input.length; i += 3) {
    if (i >= input.length - 1) break;
    const chars = input[i].split('');
    for (let index = 0; index < chars.length; index++) {
      if (
        input[i + 1].indexOf(chars[index]) >= 0 &&
        input[i + 2].indexOf(chars[index]) >= 0
      ) {
        overall += getPriorityOfItem(chars[index]);
        break;
      }
    }
  }
  return overall;
};

const findPriorityOfDoubledItem = (line: string): number => {
  if (line.length === 0) return 0;
  const firstHalf = line.slice(0, line.length / 2 + 1);
  const secondHalf = line.slice(line.length / 2);
  const chars = firstHalf.split('');
  for (let index = 0; index < chars.length; index++) {
    if (secondHalf.indexOf(chars[index]) >= 0) {
      return getPriorityOfItem(chars[index]);
    }
  }
  console.log(`Found no prioritized item: >>>${line}<<<`);
  return 0;
};

export const getPriorityOfItem = (char: string): number => {
  return char.charCodeAt(0) - (char === char.toLowerCase() ? 96 : 38);
};
