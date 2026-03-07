import type { Task } from './types.js';
import { get } from './fetch.js';
import { retry } from './retry.js';

export async function testClient() {
  const tasks = await get<Task[]>('/api/tasks');
  console.log(tasks[0]?.title);
  // tasks.map() = no error

  const rawData = await get('/api/tasks');
  // rawData.map() = error

  if (Array.isArray(rawData)) {
    console.log(rawData.length);
  }

  const retryGet = <T>(url: string) => retry(() => get<T>(url), 3);
  const safeTasks = await retryGet<Task[]>('api/tasks');
}
