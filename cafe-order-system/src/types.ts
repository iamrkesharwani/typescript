export type DrinkName = 'Espresso' | 'Latte' | 'Cappuccino' | 'Americano';

export interface OrderInput {
  drinkName: DrinkName;
  sugarLevel?: number;
  isCold: boolean;
}

export interface OrderSummary extends OrderInput {
  orderId: string;
  price: number;
  timestamp: Date;
  temperature: string;
}
