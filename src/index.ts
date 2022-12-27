import { day1Task1, day1Task2 } from './day1/day1';
import { day2Task1, day2Task2 } from './day2/day2';
import { day3Task1, day3Task2 } from './day3/day3';
import { day4Task1, day4Task2 } from './day4/day4';
import { day5Task1, day5Task2 } from './day5/day5';
import { day6Task1, day6Task2 } from './day6/day6';
import { day8Task1, day8Task2 } from './day8/day8';
import fs from 'fs';
import path from 'path';

const tasks = [
  { input: 'day1/input.txt', function: day1Task1, label: 'day1 - task1' },
  { input: 'day1/input.txt', function: day1Task2, label: 'day1 - task2' },
  { input: 'day2/input.txt', function: day2Task1, label: 'day2 - task1' },
  { input: 'day2/input.txt', function: day2Task2, label: 'day2 - task2' },
  { input: 'day3/input.txt', function: day3Task1, label: 'day3 - task1' },
  { input: 'day3/input.txt', function: day3Task2, label: 'day3 - task2' },
  { input: 'day4/input.txt', function: day4Task1, label: 'day4 - task1' },
  { input: 'day4/input.txt', function: day4Task2, label: 'day4 - task2' },
  { input: 'day5/input.txt', function: day5Task1, label: 'day5 - task1' },
  { input: 'day5/input.txt', function: day5Task2, label: 'day5 - task2' },
  { input: 'day6/input.txt', function: day6Task1, label: 'day6 - task1' },
  { input: 'day6/input.txt', function: day6Task2, label: 'day6 - task2' },
  { input: 'day8/input.txt', function: day8Task1, label: 'day8 - task1' },
  { input: 'day8/input.txt', function: day8Task2, label: 'day8 - task2' },
];

function readInputFile(input: string): string[] {
  try {
    const fullPath = path.join(__dirname, '../src', input);
    const data = fs.readFileSync(fullPath, 'utf8');

    return data.split('\n');
  } catch (err) {
    console.error(err);
  }
}

tasks.forEach((task) => {
  const input = readInputFile(task.input);
  console.log(`${task.label} returned `, task.function(input));
});
