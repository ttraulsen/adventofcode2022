import { day5Task1, day5Task2 } from '../../day5/day5';

const testInput = [
'    [D]    ',
'[N] [C]    ',
'[Z] [M] [P]',
' 1   2   3 ',
'',
'move 1 from 2 to 1',
'move 3 from 1 to 3',
'move 2 from 2 to 1',
'move 1 from 1 to 2'
];

describe('day4', () => {
  it('task1 - should return CMZ as result', () => {
    const result = day5Task1(testInput);
    expect(result).toEqual('CMZ');
  });

  it('task2 - should return MCD as result', () => {
    const result = day5Task2(testInput);
    expect(result).toEqual('MCD');
  });
});
