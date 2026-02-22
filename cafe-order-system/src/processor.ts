import type { OrderInput, OrderSummary, DrinkName } from './types.js';

export class OrderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OrderError';
  }
}

const menuPrices: Record<DrinkName, number> = {
  Espresso: 150,
  Americano: 220,
  Cappuccino: 200,
  Latte: 220,
};

export function processOrder(input: OrderInput): OrderSummary {
  const { drinkName, isCold, sugarLevel = 1 } = input;
  const price = menuPrices[drinkName];
  if (!price) {
    throw new OrderError(`Sorry, ${drinkName} is not on our menu!`);
  }
  return {
    orderId: `ORD-${Math.random().toString(36).substring(2, 9)}`,
    price,
    drinkName,
    sugarLevel,
    isCold,
    temperature: isCold ? 'Iced' : 'Hot',
    timestamp: new Date(),
  };
}
