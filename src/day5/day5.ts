export const day5Task1 = (lines: string[]): string => {
  const instructions = parseInput(lines);
  instructions.commands.forEach((command) => {
    for (let i = 0; i < command.amount; i++) {
      const crate = instructions.crateStacks
        .get(command.from.toString())
        .crates.pop();
      instructions.crateStacks.get(command.to.toString()).crates.push(crate);
    }
  });

  let result = '';
  for (let i = 0; i < instructions.crateStacks.size; i++) {
    const crates = instructions.crateStacks.get((i + 1).toString()).crates;
    result += crates[crates.length - 1];
  }
  return result;
};

export const day5Task2 = (lines: string[]): string => {
  const instructions = parseInput(lines);
  instructions.commands.forEach((command) => {
    const crates = instructions.crateStacks
      .get(command.from.toString())
      .crates.slice(command.amount * -1);
    instructions.crateStacks.get(command.from.toString()).crates =
      instructions.crateStacks.get(command.from.toString()).crates.slice(0, command.amount*-1)
    instructions.crateStacks.get(command.to.toString()).crates.push(...crates);
  });

  let result = '';
  for (let i = 0; i < instructions.crateStacks.size; i++) {
    const crates = instructions.crateStacks.get((i + 1).toString()).crates;
    result += crates[crates.length - 1];
  }
  return result;
};

export type InstructionSet = {
  commands: Command[];
  crateStacks: Map<string, Stack>;
};

export type Stack = {
  crates: string[];
};

export type Command = {
  amount: number;
  from: number;
  to: number;
};

export const parseInput = (lines: string[]): InstructionSet => {
  const result: InstructionSet = {
    commands: [],
    crateStacks: new Map<string, Stack>(),
  };
  const crateRegEx = new RegExp(/(\[[A-Z]\])/);
  const commandRegEx = new RegExp(/move (\d+) from (\d+) to (\d+)/);

  lines.forEach((line) => {
    const crateMatches = crateRegEx.exec(line);
    const commandMatches = commandRegEx.exec(line);
    if (commandMatches) {
      result.commands.push({
        amount: Number.parseInt(commandMatches[1]),
        from: Number.parseInt(commandMatches[2]),
        to: Number.parseInt(commandMatches[3]),
      });
    }

    if (crateMatches) {
      const chars = line.split('');
      const numberOfStacks = (chars.length + 1) / 4;
      for (let index = 0; index < numberOfStacks; index++) {
        const position = index * 4 + 1;
        if (chars[position] !== ' ') {
          if (!result.crateStacks.get((index + 1).toString())) {
            result.crateStacks.set((index + 1).toString(), { crates: [] });
          }
          result.crateStacks
            .get((index + 1).toString())
            .crates.push(chars[position]);
        }
      }
    }
  });

  result.crateStacks.forEach((value, key) => {
    value.crates = value.crates.reverse();
    result.crateStacks.set(key, value);
  });
  return result;
};
