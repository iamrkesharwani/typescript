export function renderBanner(n) {
    switch (n.type) {
        case 'success':
            return `Success: ${n.message} (closes in ${n.duration})`;
        case 'error':
            return `Error ${n.errorCode}: ${n.message}`;
        case 'info':
            return `Info from ${n.source}: ${n.message}`;
        case 'warning':
            return `Warning: ${n.message}`;
        default:
            const _exhaustiveCheck = n;
            return _exhaustiveCheck;
    }
}
