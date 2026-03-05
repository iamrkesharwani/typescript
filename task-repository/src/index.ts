import { TaskService, InMemoryTaskRepository } from './types.js';
import { NotFoundError } from './types.js';

const repo = new InMemoryTaskRepository();
const service = new TaskService(repo);

service.createTask({
  id: '1',
  title: 'Learn TypeScript',
  completed: false,
});

service.createTask({
  id: '2',
  title: 'Build Repository Pattern',
  completed: false,
});

console.log('All tasks:');
console.log(service.getAllTasks());

console.log('Single task:');
console.log(service.getTask('1'));

service.deleteTask('2');

console.log('After deletion:');
console.log(service.getAllTasks());

try {
  service.getTask('999');
} catch (err) {
  if (err instanceof NotFoundError) {
    console.log(true);
    console.log(err.message);
  } else {
    console.log('Unknown Error');
  }
}
