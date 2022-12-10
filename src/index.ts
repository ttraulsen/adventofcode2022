import { day1Task1, day1Task2 } from './day1/day1';
import fs from 'fs';
import path from 'path';

const tasks = [
  { input: 'day1/input.txt', function: day1Task1, label: 'day1 - task1' },
  { input: 'day1/input.txt', function: day1Task2, label: 'day1 - task2' },
];

function readInputFile(input: string): string[] {
  try {
    const fullPath = path.join(__dirname, '../src',input)
    const data = fs.readFileSync(fullPath, 'utf8');
    return data.split('\n');
  } catch (err) {
    console.error(err);
  }
}

tasks.forEach((task) => {
  const input = readInputFile(task.input);
  console.log(`${task.label} returned `,task.function(input));
});