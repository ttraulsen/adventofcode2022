import { day3Task1, day3Task2, getPriorityOfItem } from '../../day3/day3';

const testInput = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
];

describe('day3', () => {
  test.each([
    { char: 'a', value: 1 },
    { char: 'A', value: 27 },
    { char: 'z', value: 26 },
    { char: 'Z', value: 52 },
  ])('should convert $char to $value', ({char,value}) => {
    expect(getPriorityOfItem(char)).toEqual(value);
  });

  it('task1 - should return 157 as result', () => {
    const result = day3Task1(testInput);
    expect(result).toEqual(157);
  });

  it('task2 - should return 70 as result', () => {
    const result = day3Task2(testInput);
    expect(result).toEqual(70);
  });
});
