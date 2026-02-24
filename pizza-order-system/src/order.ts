import type { Order, OrderReceipt } from './type.js';
import { OrderError } from './type.js';
import * as con from './helper.js';

export function placeOrder(order: Order): OrderReceipt {
  for (const topping of order.toppings) {
    if (!con.AVAILABLE_TOPPINGS.includes(topping)) {
      throw new OrderError(`Unrecognised topping: ${topping}`);
    }
  }

  const basePrice: number = con.SIZE_PRIZE[order.size];
  const crustExtra: number = con.CRUST_PRICE[order.crust];
  const toppingsCost: number = order.toppings.length * con.TOPPING_PRICE;

  const totalPrice: number = basePrice + crustExtra + toppingsCost;
  const estimatedMinutes: number = 15 + order.toppings.length * 2;
  const orderId: string = `ORD-${Date.now()}`;
  const summary: string = `${order.size} pizza with ${order.crust} crust and ${order.toppings.join(', ')}`;

  return {
    orderId,
    totalPrice,
    estimatedMinutes,
    summary,
  };
}
