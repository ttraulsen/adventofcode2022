import { day1Task1, day1Task2 } from '../../day1/day1';

const testInput = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
];

describe('day1', () => {
  it('task1 - example should return 4th elf', () => {
    const resultSet = day1Task1(testInput);
    expect(resultSet.position).toEqual(4);
  });

  it('task2 - sum of first three elfs', () => {
    const resultSet = day1Task2(testInput);
    expect(resultSet.calories).toEqual(45000);
  });
});
