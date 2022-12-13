export const day4Task1 = (lines: string[]): number => {
  let overall = 0;
  lines.map((line) => {
//    console.log(`${line} checks for duplicate: ${checkForDuplicates(line)}`);
    if (checkForDuplicates(line)) overall++;
  });
  return overall;
};

export const day4Task2 = (lines: string[]): number => {
  let overall = 0;
  lines.map((line) => {
    //    console.log(`${line} checks for duplicate: ${checkForDuplicates(line)}`);
    if (checkForOverlaps(line)) overall++;
  });
  return overall;
};

const checkForDuplicates = (line: string): boolean => {
  if (line.length < 1) return false;
  const assignments = line.split(',');
  const firstAssignment = assignments[0].split('-');
  const secondAssignment = assignments[1].split('-');

  return (
    (Number.parseInt(firstAssignment[0]) <= Number.parseInt(secondAssignment[0]) &&
      Number.parseInt(firstAssignment[1]) >= Number.parseInt(secondAssignment[1])) ||
    (Number.parseInt(firstAssignment[0]) >= Number.parseInt(secondAssignment[0]) &&
      Number.parseInt(firstAssignment[1]) <= Number.parseInt(secondAssignment[1]))
  );
};

const checkForOverlaps = (line: string): boolean => {
  if (line.length < 1) return false;
  const assignments = line.split(',');
  const firstAssignment = assignments[0].split('-');
  const secondAssignment = assignments[1].split('-');

  return (
    (Number.parseInt(firstAssignment[0]) <=
      Number.parseInt(secondAssignment[0]) &&
      Number.parseInt(firstAssignment[1]) >=
        Number.parseInt(secondAssignment[0])) ||
    (Number.parseInt(firstAssignment[0]) >=
      Number.parseInt(secondAssignment[0]) &&
      Number.parseInt(firstAssignment[0]) <=
        Number.parseInt(secondAssignment[1]))
  );
};
