import type { Order } from './type.js';

export const AVAILABLE_TOPPINGS: string[] = [
  'cheese',
  'pepperoni',
  'mushroom',
  'onion',
  'paneer',
  'olives',
];

export const SIZE_PRIZE: Record<Order['size'], number> = {
  small: 199,
  medium: 299,
  large: 399,
};

export const CRUST_PRICE: Record<Order['crust'], number> = {
  classic: 0,
  thin: 20,
  panFried: 40,
  stuffed: 60,
};

export const TOPPING_PRICE: number = 30;
