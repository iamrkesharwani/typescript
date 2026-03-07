import { get } from './fetch.js';
import { retry } from './retry.js';
export async function testClient() {
    const tasks = await get('/api/tasks');
    console.log(tasks[0]?.title);
    // tasks.map() = no error
    const rawData = await get('/api/tasks');
    // rawData.map() = error
    if (Array.isArray(rawData)) {
        console.log(rawData.length);
    }
    const retryGet = (url) => retry(() => get(url), 3);
    const safeTasks = await retryGet('api/tasks');
}
