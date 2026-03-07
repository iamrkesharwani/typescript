export class ApiError extends Error {
    status;
    body;
    constructor(status, body) {
        super(`API returned status ${status}`);
        this.status = status;
        this.body = body;
        this.name = 'ApiError';
    }
}
