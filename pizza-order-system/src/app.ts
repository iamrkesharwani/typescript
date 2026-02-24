import { placeOrder, OrderError } from './index.js';
import type { Order } from './index.js';

const myOrder: Order = {
  size: 'medium',
  crust: 'stuffed',
  toppings: ['cheese', 'paneer'],
};

try {
  const receipt = placeOrder(myOrder);
  console.log('Order Successful:', receipt);
} catch (error: unknown) {
  if (error instanceof OrderError) {
    console.error('Order Failed:', error.message);
  } else {
    console.error('Unexpected error');
  }
}
