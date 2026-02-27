import { transition } from './transition.js';
import type { CheckoutState } from './types.js';

let state: CheckoutState = {
  state: 'cart',
  items: [],
};

state = transition(state, {
  type: 'ADD_ITEM',
  item: { id: 'P1', price: 500, qty: 2 },
});

state = transition(state, { type: 'PROCEED_TO_ADDRESS' });

state = transition(state, {
  type: 'SUBMIT_ADDRESS',
  address: 'Kolkata',
});

state = transition(state, {
  type: 'SUBMIT_PAYMENT',
  method: 'upi',
});

state = transition(state, { type: 'ORDER_SUCCESS', orderId: 'ORD-123' });

console.log(state);
