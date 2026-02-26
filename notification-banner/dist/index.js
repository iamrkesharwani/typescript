import { renderBanner } from './banner.js';
import { isErrorNotification } from './guard.js';
const notification = {
    type: 'error',
    message: 'Server crashed',
    errorCode: 500,
};
console.log(renderBanner(notification));
if (isErrorNotification(notification)) {
    console.log('Logging error code:', notification.errorCode);
}
