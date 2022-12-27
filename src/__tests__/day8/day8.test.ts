import { day8Task1, day8Task2 } from '../../day8/day8';

const testInput = [
'30373',
'25512',
'65332',
'33549',
'35390'
];


describe('day8', () => {
  it('task8 - should return 21 visible trees as a result', () => {
    const result = day8Task1(testInput);
    expect(result).toEqual(21);
  });

  it('task2 - should find highes scenic score of 8', () => {
    const result = day8Task2(testInput);
    expect(result).toEqual(8);
  });
});
