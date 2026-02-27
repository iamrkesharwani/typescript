export function transition(current, action) {
    switch (current.state) {
        case 'cart':
            switch (action.type) {
                case 'ADD_ITEM':
                    return {
                        ...current,
                        items: [...current.items, action.item],
                    };
                case 'PROCEED_TO_ADDRESS':
                    return {
                        state: 'address',
                        items: current.items,
                    };
                default:
                    return current;
            }
        case 'address':
            switch (action.type) {
                case 'SUBMIT_ADDRESS':
                    return {
                        state: 'payment',
                        items: current.items,
                        address: action.address,
                    };
                case 'RESET':
                    return { state: 'cart', items: [] };
                default:
                    return current;
            }
        case 'payment':
            switch (action.type) {
                case 'SUBMIT_PAYMENT':
                    return {
                        state: 'confirming',
                        items: current.items,
                        address: current.address,
                        paymentMethod: action.method,
                    };
                default:
                    return current;
            }
        case 'confirming':
            switch (action.type) {
                case 'ORDER_SUCCESS':
                    return { state: 'success', orderId: action.orderId };
                case 'ORDER_FAILED':
                    return { state: 'failed', reason: action.reason };
                default:
                    return current;
            }
        case 'success':
        case 'failed':
            if (action.type === 'RESET') {
                return { state: 'cart', items: [] };
            }
            return current;
        default: {
            const _exhaustive = current;
            return _exhaustive;
        }
    }
}
