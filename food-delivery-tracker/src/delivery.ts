import type { Actions, OrderFlow } from './types.js';

export function transition(current: OrderFlow, action: Actions): OrderFlow {
  switch (current.status) {
    case 'pending':
      switch (action.type) {
        case 'CONFIRM_ORDER':
          return {
            status: 'confirmed',
            orderId: current.orderId,
            items: current.items,
            deliveryAddress: current.deliveryAddress,
            placedAt: new Date(),
            estimatedReadyAt: action.estimatedReadyAt,
          };
        case 'CANCEL':
          return {
            status: 'cancelled',
            orderId: current.orderId,
            reason: action.reason,
            cancelledAt: action.cancelledAt,
          };
        default:
          return current;
      }
    case 'confirmed':
      switch (action.type) {
        case 'START_PREPARING':
          return {
            ...current,
            status: 'preparing',
          };
        case 'CANCEL':
          return {
            status: 'cancelled',
            orderId: current.orderId,
            reason: action.reason,
            cancelledAt: action.cancelledAt,
          };
        default:
          return current;
      }
    case 'preparing':
      switch (action.type) {
        case 'MARK_READY':
          return {
            ...current,
            status: 'readyForPickup',
            driverName: action.driverName,
            driverPhone: action.driverPhone,
          };
        case 'CANCEL':
          return {
            status: 'cancelled',
            orderId: current.orderId,
            reason: action.reason,
            cancelledAt: action.cancelledAt,
          };
        case 'MARK_FAILED':
          return {
            status: 'failed',
            orderId: current.orderId,
            reason: action.reason,
            failedAt: action.failedAt,
          };
        default:
          return current;
      }
    case 'readyForPickup':
      switch (action.type) {
        case 'PICKUP':
          return {
            ...current,
            status: 'outForDelivery',
            pickedUpAt: action.pickedUpAt,
          };
        case 'MARK_FAILED':
          return {
            status: 'failed',
            orderId: current.orderId,
            reason: action.reason,
            failedAt: action.failedAt,
          };
        default:
          return current;
      }
    case 'outForDelivery':
      switch (action.type) {
        case 'MARK_DELIVERED':
          return {
            ...current,
            status: 'delivered',
            deliveredAt: action.deliveredAt,
          };
        case 'MARK_FAILED':
          return {
            status: 'failed',
            orderId: current.orderId,
            reason: action.reason,
            failedAt: action.failedAt,
          };
        default:
          return current;
      }
    case 'delivered':
    case 'cancelled':
    case 'failed':
      if (action.type === 'RESET') {
        return {
          status: 'pending',
          orderId: current.orderId,
          items: [],
          deliveryAddress: '',
          placedAt: new Date(),
        };
      }
      return current;
    default: {
      const _exhaustive: never = current;
      return _exhaustive;
    }
  }
}
