import { OrderError } from './type.js';
import * as con from './helper.js';
export function placeOrder(order) {
    for (const topping of order.toppings) {
        if (!con.AVAILABLE_TOPPINGS.includes(topping)) {
            throw new OrderError(`Unrecognised topping: ${topping}`);
        }
    }
    const basePrice = con.SIZE_PRIZE[order.size];
    const crustExtra = con.CRUST_PRICE[order.crust];
    const toppingsCost = order.toppings.length * con.TOPPING_PRICE;
    const totalPrice = basePrice + crustExtra + toppingsCost;
    const estimatedMinutes = 15 + order.toppings.length * 2;
    const orderId = `ORD-${Date.now()}`;
    const summary = `${order.size} pizza with ${order.crust} crust and ${order.toppings.join(', ')}`;
    return {
        orderId,
        totalPrice,
        estimatedMinutes,
        summary,
    };
}
