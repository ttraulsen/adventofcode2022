import { day2Task1,day2Task2 } from '../../day2/day2';

const testInput = ['A Y', 'B X', 'C Z'];


describe('day2', () => {
  it('task1 - should return 15 as result', () => {
    const result = day2Task1(testInput);
    expect(result).toEqual(15);
  });

  it('task2 - should return 12 as result', () => {
    const result = day2Task2(testInput);
    expect(result).toEqual(12);
  });
});
