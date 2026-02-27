export function render(state) {
    switch (state.state) {
        case 'idle':
            return 'Nothing started yet';
        case 'loading':
            return 'Loading...';
        case 'success':
            return `Success: ${JSON.stringify(state.data)}`;
        case 'error':
            return `Error: ${state.message}`;
        default:
            const _exhaustiveCheck = state;
            return _exhaustiveCheck;
    }
}
