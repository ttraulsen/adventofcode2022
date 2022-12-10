export type elf = {
  position: number;
  calories: number;
};

export const day1Task1 = (input: string[]): elf => {
  const elfs: elf[] = readElfs(input);
  return elfs[0];
};

export const day1Task2 = (input: string[]): elf => {
  const elfs: elf[] = readElfs(input);
  return {
    position: 0,
    calories: elfs[0].calories + elfs[1].calories + elfs[2].calories,
  };
};

function readElfs(input: string[]) {
  const elfs: elf[] = [];
  let position = 1;
  let currentCalories = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].length === 0) {
      elfs.push({ position: position, calories: currentCalories });
      position++;
      currentCalories = 0;
    } else {
      currentCalories += Number.parseInt(input[i]);
    }
  }
  if (currentCalories > 0) {
    elfs.push({ position: position, calories: currentCalories });
  }
  elfs.sort((a, b) => b.calories - a.calories);
  return elfs;
}
