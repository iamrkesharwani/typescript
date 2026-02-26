import type { Notification, ErrorNotification } from './types.js';

export function isErrorNotification(n: Notification): n is ErrorNotification {
  return n.type === 'error';
}
