import { ApiError } from './error.js';

/* get */
export function get<T>(url: string): Promise<T>;
export function get(url: string): Promise<unknown>;

export async function get<T>(url: string): Promise<T | unknown> {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new ApiError(response.status, data);
  }
  return data as T;
}

/* post */
async function post<T, B>(url: string, body: B): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(response.status, data);
  }

  return data as T;
}

/* del */
async function del<T>(url: string): Promise<T> {
  const response = await fetch(url, { method: 'DELETE' });
  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(response.status, data);
  }

  return data as T;
}
