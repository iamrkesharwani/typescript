import { pipe } from './pipe.js';

type Task = { title: string; status: 'todo' | 'done' };

const parseRawTask = (input: string): { title: string } => ({
  title: input.trim(),
});

const validateTask = (raw: { title: string }): Task => ({
  ...raw,
  status: 'todo',
});

const formatForDisplay = (task: Task): string => {
  return `[${task.status.toUpperCase()}] ${task.title}`;
};

const finalOutput = pipe(
  '  Learn TypeScript  ',
  parseRawTask,
  validateTask,
  formatForDisplay
);

console.log(finalOutput);
