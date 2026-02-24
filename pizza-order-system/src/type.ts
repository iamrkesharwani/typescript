export type Topping =
  | 'cheese'
  | 'pepperoni'
  | 'mushroom'
  | 'onion'
  | 'paneer'
  | 'olives';

export type Order = {
  size: 'large' | 'medium' | 'small';
  crust: 'classic' | 'thin' | 'panFried' | 'stuffed';
  toppings: Topping[];
};

export class OrderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OrderError';
  }
}

export type OrderReceipt = {
  orderId: string;
  totalPrice: number;
  estimatedMinutes: number;
  summary: string;
};
