import type { OrderInput, OrderSummary } from './types.js';
export declare class OrderError extends Error {
    constructor(message: string);
}
export declare function processOrder(input: OrderInput): OrderSummary;
//# sourceMappingURL=processor.d.ts.map