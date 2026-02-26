import type { Notification } from './types.js';

export function renderBanner(n: Notification): string {
  switch (n.type) {
    case 'success':
      return `Success: ${n.message} (closes in ${n.duration})`;
    case 'error':
      return `Error ${n.errorCode}: ${n.message}`;
    case 'info':
      return `Info from ${n.source}: ${n.message}`;
    case 'warning':
      return `Warning: ${n.message}`;
    default:
      const _exhaustiveCheck: never = n;
      return _exhaustiveCheck;
  }
}
