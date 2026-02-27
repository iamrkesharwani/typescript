import { validate } from './validate.js';
const createTaskSchema = {
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
const payload = {
    title: 'Hi',
    priority: 10,
};
const result = validate(payload, createTaskSchema);
console.log(result);
