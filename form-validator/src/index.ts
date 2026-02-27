import { validate } from './validate.js';
import type { Schema } from './types.js';
import type { CreateTaskPayload } from './task.js';

const createTaskSchema: Schema = {
  title: {
    type: 'string',
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    type: 'string',
    maxLength: 300,
  },
  priority: {
    type: 'number',
    required: true,
    min: 1,
    max: 5,
  },
};

const payload: CreateTaskPayload = {
  title: 'Hi',
  priority: 10,
};

const result = validate(payload, createTaskSchema);
console.log(result);
