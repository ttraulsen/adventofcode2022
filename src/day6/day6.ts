export const day6Task1 = (lines: string[]): number => {
  return findUniqueSetOfCharacters(lines[0],4);
};

export const day6Task2 = (lines: string[]): number => {
  return findUniqueSetOfCharacters(lines[0], 14);
};

export const hasOnlyUniqueCharacters = (line: string): boolean => {
  if (line.length <= 0) return false;
  const foundCharacters = new Map<string, boolean>();
  line.split('').map((c) => foundCharacters.set(c, true));
  return line.length === foundCharacters.size;
};

const findUniqueSetOfCharacters = (line: string, length: number): number => {
    for (let i = length; i <= line.length; i++) {
      const marker = line.slice(i - length, i);
      if (hasOnlyUniqueCharacters(marker)) return i;
    }

    return -1;
}
