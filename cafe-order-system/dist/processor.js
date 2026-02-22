export class OrderError extends Error {
    constructor(message) {
        super(message);
        this.name = 'OrderError';
    }
}
const menuPrices = {
    Espresso: 150,
    Americano: 220,
    Cappuccino: 200,
    Latte: 220,
};
export function processOrder(input) {
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
//# sourceMappingURL=processor.js.map