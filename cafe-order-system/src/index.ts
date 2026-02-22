import { processOrder, OrderError } from './processor.js';
import type { OrderInput } from './types.js';

const myOrder: OrderInput = {
  drinkName: 'Latte',
  isCold: true,
};

try {
  const receipt = processOrder(myOrder);
  console.log('--- Cafe Receipt ---');
  console.log(`Order ID: ${receipt.orderId}`);
  console.log(`Drink: ${receipt.temperature} ${receipt.drinkName}`);
  console.log(`Sugar Level: ${receipt.sugarLevel}`);
  console.log(`Total: ₹${receipt.price}`);
} catch (error) {
  if (error instanceof OrderError) {
    console.error(`Order Failed: ${error.message}`);
  } else {
    console.error('An unexpected error occurred.');
  }
}
