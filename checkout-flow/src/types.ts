interface Item {
  id: string;
  price: number;
  qty: number;
}

type CheckoutWithPayment = {
  items: Item[];
  address: string;
};

export type Cart = {
  state: 'cart';
  items: Item[];
};

export type AddressEntry = {
  state: 'address';
  items: Item[];
  address?: string;
};

export type PaymentEntry = CheckoutWithPayment & {
  state: 'payment';
  paymentMethod?: 'upi' | 'card' | 'cod';
};

export type Confirming = CheckoutWithPayment & {
  state: 'confirming';
  paymentMethod: 'upi' | 'card' | 'cod';
};

export type Success = {
  state: 'success';
  orderId: string;
};

export type Failed = {
  state: 'failed';
  reason: string;
};

export type CheckoutState =
  | Cart
  | AddressEntry
  | PaymentEntry
  | Confirming
  | Success
  | Failed;

export type Action =
  | { type: 'ADD_ITEM'; item: Item }
  | { type: 'PROCEED_TO_ADDRESS' }
  | { type: 'SUBMIT_ADDRESS'; address: string }
  | { type: 'SUBMIT_PAYMENT'; method: 'upi' | 'card' | 'cod' }
  | { type: 'CONFIRM_ORDER' }
  | { type: 'ORDER_SUCCESS'; orderId: string }
  | { type: 'ORDER_FAILED'; reason: string }
  | { type: 'RESET' };
