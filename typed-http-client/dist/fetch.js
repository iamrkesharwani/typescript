import { ApiError } from './error.js';
export async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new ApiError(response.status, data);
    }
    return data;
}
/* post */
async function post(url, body) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new ApiError(response.status, data);
    }
    return data;
}
/* del */
async function del(url) {
    const response = await fetch(url, { method: 'DELETE' });
    const data = await response.json();
    if (!response.ok) {
        throw new ApiError(response.status, data);
    }
    return data;
}
