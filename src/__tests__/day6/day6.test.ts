import { day6Task1, day6Task2, hasOnlyUniqueCharacters } from '../../day6/day6';

describe('day6', () => {
  it.each([
    { line: 'abcd', value: true },
    { line: 'aa', value: false },
    { line: 'ab', value: true },
    { line: '', value: false },
  ])('>>$line<< should evaluate to $value', ({ line, value }) => {
    expect(hasOnlyUniqueCharacters(line)).toEqual(value);
  });
  it.each([
    { line: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', value: 7 },
    { line: 'bvwbjplbgvbhsrlpgdmjqwftvncz', value: 5 },
    { line: 'nppdvjthqldpwncqszvftbrmjlhg', value: 6 },
    { line: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', value: 10 },
    { line: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', value: 11 },
  ])('should find start in $line at $value', ({ line, value }) => {
    const lines:string[] = [];
    lines.push(line);
    expect(day6Task1(lines)).toEqual(value);
  });

  it.each([
    { line: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', value: 19 },
    { line: 'bvwbjplbgvbhsrlpgdmjqwftvncz', value: 23 },
    { line: 'nppdvjthqldpwncqszvftbrmjlhg', value: 23 },
    { line: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', value: 29 },
    { line: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', value: 26 },
  ])('should find start in $line at $value', ({ line, value }) => {
    const lines: string[] = [];
    lines.push(line);
    expect(day6Task2(lines)).toEqual(value);
  });
});
