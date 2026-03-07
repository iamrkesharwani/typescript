import { pipe } from './pipe.js';
const parseRawTask = (input) => ({
    title: input.trim(),
});
const validateTask = (raw) => ({
    ...raw,
    status: 'todo',
});
const formatForDisplay = (task) => {
    return `[${task.status.toUpperCase()}] ${task.title}`;
};
const finalOutput = pipe('  Learn TypeScript  ', parseRawTask, validateTask, formatForDisplay);
console.log(finalOutput);
