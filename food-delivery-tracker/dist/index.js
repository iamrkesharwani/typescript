import { transition } from './delivery.js';
let order = {
    status: 'pending',
    orderId: 'ORD-101',
    items: [
        { name: 'burger', price: 150, qty: 2 },
        { name: 'fries', price: 80, qty: 1 },
    ],
    deliveryAddress: 'Siliguri',
    placedAt: new Date(),
};
order = transition(order, {
    type: 'CONFIRM_ORDER',
    estimatedReadyAt: new Date(Date.now() + 15 * 60 * 1000),
});
order = transition(order, { type: 'START_PREPARING' });
order = transition(order, {
    type: 'MARK_READY',
    driverName: 'ABC',
    driverPhone: '9999999999',
});
order = transition(order, {
    type: 'PICKUP',
    pickedUpAt: new Date(),
});
order = transition(order, {
    type: 'MARK_DELIVERED',
    deliveredAt: new Date(),
});
console.log(order);
