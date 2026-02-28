type Item = { name: string; qty: number; price: number };
type Driver = { driverName: string; driverPhone: string };

type OrderBase = {
  orderId: string;
  deliveryAddress: string;
  items: Item[];
  placedAt: Date;
  estimatedReadyAt: Date;
};

type Pending = {
  status: 'pending';
  orderId: string;
  items: Item[];
  deliveryAddress: string;
  placedAt: Date;
};

type Confirmed = OrderBase & { status: 'confirmed' };

type Preparing = OrderBase & { status: 'preparing' };

type ReadyForPickup = OrderBase & Driver & { status: 'readyForPickup' };

type OutForDelivery = OrderBase &
  Driver & {
    status: 'outForDelivery';
    pickedUpAt: Date;
  };

type Delivered = OrderBase &
  Driver & {
    status: 'delivered';
    pickedUpAt: Date;
    deliveredAt: Date;
  };

type Cancelled = {
  status: 'cancelled';
  orderId: string;
  reason: string;
  cancelledAt: Date;
};

type Failed = {
  status: 'failed';
  orderId: string;
  reason: string;
  failedAt: Date;
};

export type OrderFlow =
  | Pending
  | Confirmed
  | Preparing
  | ReadyForPickup
  | OutForDelivery
  | Delivered
  | Cancelled
  | Failed;

export type Actions =
  | { type: 'CONFIRM_ORDER'; estimatedReadyAt: Date }
  | { type: 'START_PREPARING' }
  | { type: 'MARK_READY'; driverName: string; driverPhone: string }
  | { type: 'PICKUP'; pickedUpAt: Date }
  | { type: 'MARK_DELIVERED'; deliveredAt: Date }
  | { type: 'CANCEL'; reason: string; cancelledAt: Date }
  | { type: 'MARK_FAILED'; reason: string; failedAt: Date }
  | { type: 'RESET' };
