import { day4Task1, day4Task2 } from '../../day4/day4';

const testInput = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8',
];

describe('day4', () => {
  it('task1 - should return 2 as result', () => {
    const result = day4Task1(testInput);
    expect(result).toEqual(2);
  });

  it('task2 - should return 4 as result', () => {
    const result = day4Task2(testInput);
    expect(result).toEqual(4);
  });
});
