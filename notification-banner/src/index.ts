import { renderBanner } from './banner.js';
import { isErrorNotification } from './guard.js';
import type { Notification } from './types.js';

const notification: Notification = {
  type: 'error',
  message: 'Server crashed',
  errorCode: 500,
};

console.log(renderBanner(notification));
if (isErrorNotification(notification)) {
  console.log('Logging error code:', notification.errorCode);
}
